# Contexto para Claude Code

Este repo contiene Math Galaxy, un juego de matemáticas en español para niños de 4 y 8 años.

## Estado actual

`app/index.html` es el juego completo y funcional (build de producción de un proyecto React + TypeScript + Vite). Los archivos fuente `.tsx` se perdieron; este paquete conserva el build más los extractos necesarios para reconstruirlos.

## Para reconstruir el fuente

Material disponible, en orden de utilidad:

1. `data/levels.ts` — los 93 niveles del aventurero y los 40 del pequeño, más los 21 mundos, ya en TypeScript limpio. Es el contenido que más costaría rehacer y está listo para pegarse.
2. `reference/game-logic.beautified.js` — toda la lógica del juego formateada y legible (21k líneas). Los nombres de variables están minificados, pero la estructura, los textos, las pistas, los generadores de preguntas y los componentes son perfectamente legibles.
3. `reference/styles.beautified.css` — todos los estilos con los nombres de clase originales intactos, listos para copiarse tal cual.
4. `README.md` — arquitectura, modelo de datos, decisiones pedagógicas y la especificación de la siguiente versión.

Sugerencia de estructura al reconstruir, que es la que tenía el proyecto:

```
src/game.ts          tipos, generadores de preguntas, niveles, persistencia
src/App.tsx          pantallas y máquina de estados
src/BrainGames.tsx   los minijuegos de lógica de ambos perfiles
src/Pug.tsx          Turbo el pug (SVG) y su ropero
src/sfx.ts           efectos de sonido con WebAudio
src/App.css          estilos
```

## Reglas al modificar

- **No romper el progreso guardado.** Las llaves de `localStorage` están documentadas en el README. Si se renumeran niveles, hace falta una migración por nombre.
- **Conservar las decisiones pedagógicas** listadas en el README; están respaldadas por investigación y son la razón de ser del juego.
- **El perfil de 4 años no lleva monedas ni tienda.** Es deliberado.
- Idioma de toda la interfaz: español, con tono cálido e infantil.
