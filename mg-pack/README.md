# Math Galaxy

Juego web de matemáticas para niños, en español, construido para dos perfiles: un explorador de 4 años y un aventurero de 8. Todo corre en el navegador, sin servidor, y el progreso vive en `localStorage`.

## Qué hay en este paquete

```
app/index.html                        el juego completo y funcional (build de producción)
data/levels.ts                        los 93 + 40 niveles y los mundos, en TypeScript listo para usar
data/game-data.json                   mismos datos en JSON, más llaves de guardado y atuendos
reference/game-logic.beautified.js    toda la lógica del juego, legible (nombres de variables minificados)
reference/styles.beautified.css       todos los estilos, legibles y con nombres de clase intactos
```

**Importante sobre el estado del código.** El proyecto se construyó con React + TypeScript + Vite y se empaquetó a un HTML único. Los archivos `.tsx` originales no sobrevivieron; lo que se conserva es el build (`app/index.html`), que funciona perfectamente, más los extractos de este paquete. Para reconstruir el fuente, `reference/` tiene toda la lógica y los estilos, y `data/levels.ts` tiene el contenido ya limpio, que es la parte que más costaría rehacer a mano.

## Cómo se juega hoy

Abrir `app/index.html` en cualquier navegador. Funciona sin conexión. Para tablets, subirlo a un hosting estático (GitHub Pages, Netlify) y agregarlo a la pantalla de inicio.

## Arquitectura

El juego tiene un solo componente raíz con una máquina de estados por pantalla (`screen`), y tres bloques de contenido:

**1. Camino del aventurero (8 años), 93 niveles en 11 mundos.**
Estilo Duolingo: nodos en zigzag, 3 corazones por nivel, se pasa con ~70% de aciertos, estrellas por precisión, monedas por nivel nuevo (los repetidos pagan un cuarto). Jefes al final de cada mundo con contenido temático. Orden curricular: sumas → restas → tablas (2-5-10, 3-4, 6-7, 8-9) → división (misma progresión) → maestría mixta → experto (multiplicación de 2 dígitos, resto, fracciones, redondeo, reloj).

**2. Camino del pequeño (4 años), 40 niveles en 10 mundos.**
Sin cronómetro, sin corazones, sin monedas: la recompensa es una calcomanía por nivel y un álbum coleccionable. Modos: contar, sumar y restar con objetos, comparar cantidades, palitos (tallies), marco de 10, patrones, número que falta, tocar en orden, figuras iguales, contar de 2 en 2, completar 5.

**3. Minijuegos de lógica.**
Poder cerebral (aventurero): sudoku 4×4, reloj cucú, memoria de secuencias, ordenar números, conteo de cubos, parejas operación-resultado, balanza lógica, recta numérica. Juegos de lógica (pequeño): memoria de luces, parejas de animales, cuál es diferente, adivina la sombra, vías del tren, guardar en su caja. Todos con nivel infinito que escala.

**Modos transversales:** reto relámpago (60 s, solo con contenido ya desbloqueado), repaso inteligente (10 preguntas con los datos más débiles del historial), práctica libre (elegir operación y dificultad sin candados), mapa de dominio (grid 10×10 de maestría), meta de hoy (3 metas diarias con bono), informe para papás (precisión por tabla, datos débiles, exportar/importar respaldo).

**Turbo el pug:** mascota SVG con 4 expresiones, animaciones de cola, parpadeo y orejas, ladrido al tocarlo, y ropero de 5 accesorios comprables con monedas.

## Modelo de datos

Todo se guarda en `localStorage` con estas llaves:

| llave | contenido |
|---|---|
| `mg_facts` | historial por operación: `{ "7x8": { seen, correct, recentWrong, ts } }` |
| `mg_path` | progreso del aventurero: `{ [levelId]: { stars, done } }` |
| `mg_little_path` | progreso del pequeño, misma forma |
| `mg_little` | estrellas y partidas del pequeño |
| `mg_coins` | monedas |
| `mg_inv` | inventario de ítems de ayuda |
| `mg_outfit` | `{ owned: [], equipped: null }` del ropero de Turbo |
| `mg_daily` | racha diaria `{ date, streak, bestScore }` |
| `mg_goals` | meta de hoy `{ date, path, practice, brain, claimed }` |
| `mg_reto` | récord del reto relámpago |
| `mg_practice` | última fecha del repaso inteligente |
| `mg_brain` / `mg_lbrain` | nivel de cada minijuego de lógica |
| `mg_sound` | `{ on: true }` |
| `mg_pathver` | versión del camino, para migraciones |

El respaldo del informe para papás exporta e importa exactamente estas llaves en un JSON.

## Decisiones pedagógicas (respaldadas por investigación)

Estas decisiones no son estéticas; conviene conservarlas al refactorizar.

- **Recuerdo activo:** el niño escribe la respuesta en un teclado numérico en vez de escoger entre opciones. Los formatos alternativos (números que caen, verdadero o falso, cuál es mayor) se desbloquean progresivamente por mundo.
- **Repetición espaciada:** cada operación guarda cuándo se practicó por última vez; el repaso prioriza lo fallado y lo que lleva días sin verse.
- **Práctica intercalada:** desde el mundo 3, una de cada seis preguntas llega como problema verbal, para que el niño elija la operación y no solo la ejecute.
- **Conteo saltado antes de cada tabla:** un nivel de saltos (2, 4, 6, ?) precede a cada tabla nueva; es el mejor puente entre suma y multiplicación.
- **Estrategias derivadas:** al fallar, la pista enseña un truco (×9 = ×10 menos uno, ×4 = duplicar dos veces), no solo la respuesta.
- **Media tabla primero:** cada tabla se aprende de ×1 a ×5 antes de completarse.
- **Tiempo como bonus, nunca castigo:** responder rápido da monedas extra; responder lento no penaliza.
- **Recta numérica:** ubicar números en una recta es de los mejores predictores del logro matemático.
- **Mentalidad de crecimiento:** los mensajes al fallar elogian el esfuerzo y el proceso, nunca la inteligencia.
- **Sin economía a los 4 años:** el perfil pequeño no tiene monedas ni tienda a propósito; a esa edad la recompensa visual inmediata (calcomanías) funciona mejor.

## Siguiente paso planeado: versión pública con perfiles

Especificación acordada, pendiente de implementar:

1. **Perfiles con nombre, máximo 4.** Selector estilo Netflix: una fila de avatares con nombre, emoji y edad, más un botón para agregar mientras haya cupo. Editar y borrar desde el informe para papás.
2. **Adaptación por edad.** 4-5 años entra a la ruta del pequeño; 6 o más entra al camino grande desde sumas y restas. La asignación es editable después.
3. **Pantalla principal por niño (hub).** Al entrar, el niño elige: camino, lógica, práctica libre, reto, repaso, colección y tienda. La tienda y los coleccionables salen del camino y suben al hub. Para el perfil pequeño, el hub muestra álbum en vez de tienda, y sigue sin monedas.
4. **Almacenamiento por perfil.** Las llaves pasan a llevar prefijo del niño (`mg_<perfilId>_path`). Hace falta una migración que meta el progreso actual dentro del primer perfil creado, sin pérdida.

## Ideas pendientes, sin implementar

Informe para papás con tiempos de respuesta promedio; apuesta de racha estilo Duolingo; música de fondo; PWA instalable con ícono propio; contenido nuevo de dinero en pesos, horas con minutos, fracciones visuales y tablas del 11 y 12.
