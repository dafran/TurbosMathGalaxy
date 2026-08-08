# 🐶 Turbo's Math Galaxy

Un juego educativo de matemáticas en español para niños, con **Turbo el pug** como mascota. El niño avanza por un camino de niveles y mundos, enfrenta jefes, gana monedas y desbloquea recompensas mientras practica desde la lógica básica hasta la multiplicación y la división.

> El juego no es solo "matemáticas gamificadas": cada mecánica está elegida a partir de **evidencia de la investigación en didáctica de las matemáticas y psicología cognitiva del aprendizaje**. Este README documenta esas decisiones y sus referencias, para que cualquiera pueda revisar el porqué de cada una.

---

## 📸 Capturas

<table>
  <tr>
    <td align="center" width="33%">
      <img src="docs/screenshots/01-perfiles.png" width="220" alt="Selector de perfiles con Turbo"><br>
      <sub><b>Perfiles</b><br>estilo Netflix, uno por niño</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/screenshots/02-inicio.png" width="220" alt="Menú principal"><br>
      <sub><b>Inicio</b><br>camino, práctica, reto, colección…</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/screenshots/03-camino.png" width="220" alt="Camino de niveles"><br>
      <sub><b>Camino</b><br>mundos, niveles, estrellas y jefes</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <img src="docs/screenshots/04-columna.png" width="220" alt="Suma en columna vertical"><br>
      <sub><b>Columna vertical</b><br>multi-dígito, unidades bajo unidades</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/screenshots/05-tienda.png" width="220" alt="Tienda de ítems"><br>
      <sub><b>Tienda</b><br>poción, escudo, lupa y doble intento</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/screenshots/06-equipar.png" width="220" alt="Pantalla de equipamiento"><br>
      <sub><b>Equípate</b><br>elige tus ítems antes del nivel</sub>
    </td>
  </tr>
</table>

---

## 🎮 Qué es

- **Pequeño explorador** (~4 años): 40 niveles, 10 mundos — lógica y matemáticas tempranas.
- **Aventurero** (~8 años): 90+ niveles, 11 mundos — sumas, restas, multiplicación, división, fracciones, patrones y jefes.
- Mascota interactiva (Turbo el pug), camino de niveles y jefes de fin de mundo.

## ✨ Características

- **🐶 Turbo, la mascota:** un pug interactivo que reacciona (hace "guau"), da pistas y ánimos, y se puede **personalizar con outfits**.
- **👨‍👩‍👧 Perfiles estilo Netflix:** hasta 4 perfiles por dispositivo, cada niño con su nombre, avatar, edad y **progreso independiente** (guardado en `localStorage`).
- **🗺️ Camino de niveles y jefes:** avance por mundos temáticos (playa, bosque, espacio, volcán, castillo…), con **jefes** de fin de mundo que dan más reto y recompensa.
- **📖 Álbum de stickers:** cada nivel superado regala un **sticker coleccionable** (animales, naves, planetas…) que se guardan en "Mi álbum".
- **🪙 Monedas y 🛒 tienda:** se ganan monedas por acertar (más si respondés rápido) y se gastan en ítems — **🧪 Poción de vida** (corazón extra), **🛡️ Escudo** (absorbe un error automáticamente), **🔍 Lupa mágica** (revela el truco de una pregunta) y **🔄 Doble intento** (si te equivocas, *tú eliges* volver a intentar esa pregunta sin perder corazón).
- **⭐ Superestrella:** ítem raro que se **gana** jugando (drop al acertar o por racha larga) y da invulnerabilidad por varias preguntas.
- **🎯 Mapa de dominio de hechos:** rastrea qué hechos (sumas, tablas…) ya domina el niño, marcándolos con estrellas — recordatorio visual del progreso real.
- **⚡ Reto relámpago:** modo de 60 segundos que guarda el **récord** personal y refuerza la fluidez.
- **📅 Metas diarias:** objetivos por día para sostener el hábito de práctica.
- **📱 PWA instalable:** funciona offline y se instala en el teléfono como una app.

## 🧱 Tecnología

- HTML/CSS/JavaScript, empaquetado en un único `app.js` que carga `index.html`. **Sin build step para la web.**
- **PWA** instalable (manifest + service worker), progreso guardado en `localStorage`.
- Empaquetado para móvil (iOS/Android) con **Capacitor 7**.

### Correr en el navegador

```bash
python3 -m http.server 5000
# abrir http://localhost:5000
```

### Build móvil (cuando cambia `app.js`)

```bash
node scripts/build.js   # copia los assets web a www/
npx cap sync            # sincroniza con android/ e ios/
```

---

## 🧠 Decisiones de diseño y su base científica

El juego aplica técnicas con respaldo empírico: **recuerdo activo** (escribir la respuesta en vez de solo reconocerla), **repetición espaciada**, **práctica intercalada**, conteo saltado como puente a las tablas, la **recta numérica** (uno de los mejores predictores del logro matemático), **el tiempo como premio y nunca como castigo**, y mensajes de esfuerzo en lugar de elogios a la inteligencia.

A continuación, las mecánicas principales y la razón detrás de cada una.

| Mecánica | Qué hace | Fundamento | Ref. |
|---|---|---|---|
| **Recuerdo activo** | El niño escribe la respuesta, no la reconoce entre opciones. | La recuperación activa produce aprendizaje más duradero que el reconocimiento pasivo (*test-enhanced learning*). | [1] |
| **Repetición espaciada / intercalada** | Los hechos vuelven días después y las operaciones se mezclan. | El espaciado y la intercalación mejoran la retención y la flexibilidad estratégica frente al bloqueo por tipo. | [1][2] |
| **Warm-ups de 1 dígito en niveles altos** | ~20 % de las preguntas en mundos avanzados son sumas/restas de un dígito. | Los niveles altos se traban cuando los hechos básicos no están automatizados: la memoria de trabajo se gasta *recalculando lo básico* (carga cognitiva). Intercalar recuperación de hechos básicos lo alivia. | [2][3] |
| **Tiempo como premio, no castigo** | Responder rápido da monedas y segundos extra; el tiempo nunca resta corazones. | La presión de tiempo eleva la **ansiedad matemática**, que consume memoria de trabajo y empeora el rendimiento. | [4] |
| **Protectores de tiempo (congelar)** | Cada 2–3 correctas (razón variable) la siguiente pregunta viene con el tiempo congelado. | Menos presión de tiempo en momentos clave + los refuerzos de **razón variable** sostienen mejor la motivación que los fijos. | [4] |
| **Superestrella (invulnerabilidad)** | Ítem raro que evita perder corazón por varios errores, **pero sigue mostrando la respuesta correcta**. | Reduce el miedo a equivocarse y favorece el riesgo productivo; se conserva la **retroalimentación correctiva**, que es lo que enseña (no el castigo). | [1] |
| **Doble intento** | Ítem que el niño **decide** usar tras un error para reintentar esa misma pregunta (sin ver la respuesta) en vez de perder un corazón. | Un segundo intento de recuperación tras fallar, en vez de solo mostrar la solución, refuerza el aprendizaje (recuperación activa y agencia del alumno). | [1] |
| **Recta numérica** | Representación central para sumar/restar y comparar. | La estimación en la recta numérica es uno de los predictores más robustos del logro matemático. | [5] |
| **Layout horizontal para cálculo mental** | Hechos de 1 dígito y cálculo mental se muestran en horizontal (`45 + 23`). | El formato **horizontal** favorece estrategias de descomposición basadas en el valor posicional. | [6][7] |
| **Layout en columna para multi-dígito** | Sumas/restas con operandos de 2+ dígitos se muestran apiladas (unidades bajo unidades), como en la escuela. | El formato **vertical** descarga la memoria de trabajo en el multi-dígito con llevada/préstamo y facilita la transferencia al algoritmo escolar. Se introduce **después** del cálculo mental, no como única vía. | [6][7][8] |

### La representación provoca la estrategia

Un hallazgo clave que guía el juego: **el formato "avisa" qué estrategia usar**. Los problemas horizontales tienden a resolverse con descomposición mental (valor posicional, de izquierda a derecha); los verticales, con el algoritmo de columna (dígito a dígito, de derecha a izquierda). Por eso el juego usa **horizontal para construir sentido numérico** y reserva **la columna para el multi-dígito**, alineando cada representación con la estrategia que se busca desarrollar — e introduciendo el algoritmo estándar sin prisa, para no "desenseñar" el valor posicional [6][7][8].

---

## 📚 Referencias

Enlaces verificados y obras fundamentales que respaldan las decisiones anteriores.

1. **Roediger, H. L., & Karpicke, J. D. (2006).** *Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention.* Psychological Science — recuerdo activo y aprendizaje por recuperación.
2. **Interleaved Learning in Elementary School Mathematics: Effects on the Flexible and Adaptive Use of Subtraction Strategies.** Frontiers in Psychology / PMC. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6385790/
3. **Teoría de la carga cognitiva (Sweller y cols.).** La memoria de trabajo limitada se satura si los hechos básicos no están automatizados. Base del diseño de warm-ups de hechos.
4. **Ashcraft, M. H., & Kirk, E. P. (2001).** *The relationships among working memory, math anxiety, and performance.* Journal of Experimental Psychology: General — la ansiedad matemática y la presión de tiempo consumen memoria de trabajo.
5. **Educación Matemática Realista (RME)** y la **recta numérica vacía** (Freudenthal Institute; Beishuizen) — cálculo mental antes del algoritmo; la recta numérica como andamio y predictor del logro.
6. **Students' Multidigit Addition & Subtraction Strategies** — el formato horizontal induce descomposición y el vertical el algoritmo estándar. https://www.projectmath.net/wp-content/uploads/2017/06/Students%E2%80%99-Multidigit-Addition-_-Subtraction.pdf
7. **Mental computation or standard algorithm? Children's strategy choices on multi-digit subtractions** (European Journal of Psychology of Education, 2015). https://link.springer.com/article/10.1007/s10212-015-0255-8 · y **Children's Strategy Choices on Complex Subtraction Problems** (Frontiers, 2018): https://pmc.ncbi.nlm.nih.gov/articles/PMC6057409/
8. **Kamii, C., & Dominick, A. (1998).** *The Harmful Effects of Algorithms in Grades 1–4* (NCTM Yearbook) — el algoritmo estándar impuesto demasiado pronto puede "desenseñar" el valor posicional. Resumen: https://edlab.tc.columbia.edu/blog/5720-The-Harmful-Effects-of-Algorithms-in-Grades-1-4 · Crítica metodológica (para balance): https://nonpartisaneducation.org/Review/Reviews/v9n2.html

> **Nota honesta sobre las citas:** los enlaces se verificaron al momento de escribir este documento. Para uso académico formal conviene confirmar autores, año, DOI y páginas en la fuente original. Las obras marcadas sin enlace (1, 3, 4, 5) son referencias fundamentales del área, ampliamente citadas y fáciles de localizar.

---

## 🗺️ Estado del proyecto

En desarrollo activo. Objetivo: convertir el juego en una app móvil educativa (iOS/Android). Las mecánicas y la dificultad se ajustan de forma iterativa con base en la evidencia y en pruebas con niños reales.

Sugerencias y reportes son bienvenidos vía *issues*.
