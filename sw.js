/* Math Galaxy · Service Worker — permite jugar sin conexión.
   Estrategia: red primero para HTML/JS (para recibir actualizaciones al
   estar en línea) con respaldo al caché; caché primero para imágenes. */
const CACHE = "math-galaxy-v2";
const CORE = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./fonts/nunito-latin.woff2",
  "./fonts/press-start-2p-latin.woff2",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // no tocar fuentes/CDN externas

  const isDoc = req.mode === "navigate";
  const isScript = url.pathname.endsWith(".js");

  if (isDoc || isScript) {
    // red primero, respaldo al caché (offline)
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((r) => r || caches.match("./index.html"))
        )
    );
  } else {
    // caché primero para el resto (imágenes, manifest)
    e.respondWith(
      caches.match(req).then((r) => r || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }))
    );
  }
});
