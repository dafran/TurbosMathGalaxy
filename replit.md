# TurbosMathGalaxy

Un juego educativo de matemáticas para niños, con el perrito Turbo como mascota.

## Stack

- HTML/CSS/JavaScript puro — un solo archivo (`index.html`)
- Sin dependencias ni build step para la web
- Progreso guardado en `localStorage`
- Empaquetado para móvil con **Capacitor 7**

## Cómo correr en el navegador

```
python3 -m http.server 5000
```

El workflow "Start application" ya está configurado. El juego se sirve en el puerto 5000.

## Estructura del juego

- **Pequeño explorador** (4 años): 40 niveles, 10 mundos — lógica y matemáticas básicas
- **Aventurero** (8 años): 93 niveles, 11 mundos — operaciones y desafíos avanzados
- Mascota: Turbo el pug (interactivo, hace "guau" al tocarlo)

## Objetivo del proyecto

Convertir el juego en una app móvil monetizable (iOS/Android).

---

## 📱 Publicar como app móvil (Capacitor)

El proyecto está configurado con **Capacitor 7** (`capacitor.config.json`).  
Los proyectos nativos ya existen en `android/` e `ios/`.

### Flujo de trabajo (cada vez que cambies `index.html`)

```bash
# 1. Copiar los assets web al directorio www/
node scripts/build.js

# 2. Sincronizar con los proyectos nativos
npx cap sync
```

### Generar APK/AAB de Android (desde esta máquina)

Necesitas **Android Studio** y el **Android SDK** instalados localmente.

```bash
# Opción A: Abrir Android Studio (requiere GUI)
npm run cap:android          # abre android/ en Android Studio

# Opción B: Build desde línea de comandos (CI/CD)
cd android
./gradlew assembleRelease    # genera APK
./gradlew bundleRelease      # genera AAB para Google Play
# Output: android/app/build/outputs/
```

#### Requisitos para publicar en Google Play
1. Cuenta de desarrollador en Google Play Console (pago único ~$25)
2. Firmar el APK/AAB con un keystore:
   ```bash
   keytool -genkey -v -keystore release.keystore \
     -alias mathgalaxy -keyalg RSA -keysize 2048 -validity 10000
   ```
3. Subir el AAB a Google Play Console → Producción

### Generar el proyecto de iOS (requiere Mac con Xcode)

El proyecto `ios/App/` ya está generado. Para compilarlo:

```bash
# En una Mac con Xcode instalado:
git clone <este-repo>
npm install
node scripts/build.js
npx cap sync ios

# Opción A: Abrir Xcode
npx cap open ios    # abre ios/App/App.xcodeproj

# Opción B: Instalar pods primero (si es la primera vez)
cd ios/App && pod install
# Luego abrir App.xcworkspace en Xcode
```

#### Requisitos para publicar en App Store
1. Cuenta de Apple Developer ($99/año)
2. Xcode con certificado de distribución configurado
3. Archivar con Xcode → Product → Archive → Distribute App

### Estructura de archivos relevantes

```
capacitor.config.json    — configuración de Capacitor (appId, webDir, plugins)
package.json             — dependencias npm y scripts
scripts/build.js         — copia index.html → www/ antes de sincronizar
www/                     — assets web (generado por build.js, no commitear)
android/                 — proyecto Android Studio (commitear)
ios/                     — proyecto Xcode (commitear)
```

### App IDs

| Plataforma | ID |
|---|---|
| Android package | `com.turbosmathgalaxy.app` |
| iOS bundle ID   | `com.turbosmathgalaxy.app` |

### Notas importantes

- **localStorage** funciona igual en la app nativa que en el navegador — el progreso del jugador se preserva sin ningún cambio de código.
- El service worker (`sw.js`) se omite en builds nativos; Capacitor gestiona el acceso offline de forma nativa.
- Para habilitar actualizaciones OTA (sin pasar por las tiendas), considera Capacitor Live Updates (Appflow).
- El `androidScheme: "https"` en `capacitor.config.json` asegura compatibilidad con APIs modernas dentro del WebView.
