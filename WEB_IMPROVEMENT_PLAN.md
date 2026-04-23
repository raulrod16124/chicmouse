# ChicMouse Studio — Web Improvement Plan

> **Documento de referencia visual:** [`src/VISUAL_DESIGN_GUIDE.md`](src/VISUAL_DESIGN_GUIDE.md)
> Toda decisión de diseño, color, tipografía o componente debe validarse contra ese documento antes de implementarse.

---

## Cómo usar este documento

Este archivo funciona como un mini tablero de tareas. Cada ítem tiene un estado:

| Estado      | Símbolo |
| ----------- | ------- |
| Pendiente   | `[ ]`   |
| En progreso | `[~]`   |
| Completado  | `[x]`   |
| Bloqueado   | `[!]`   |

**Flujo de trabajo por fase:**

1. Revisar todos los ítems de la fase actual
2. Implementar los cambios
3. Verificar visualmente que el resultado es correcto y coherente con `VISUAL_DESIGN_GUIDE.md`
4. Marcar el ítem como `[x]`
5. Pasar al siguiente ítem o fase

---

## Principios de desarrollo

Antes de comenzar cualquier fase, interiorizar los siguientes principios. Son no negociables.

### SOLID en React/TypeScript

| Principio                     | Aplicación en este proyecto                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **S** — Single Responsibility | Cada componente hace una sola cosa. Un componente de layout no gestiona lógica de negocio. Un hook no mezcla fetching con formatting.                               |
| **O** — Open/Closed           | Los componentes se extienden via props y composición, no modificando el componente base. `Button` tiene variantes via props, no múltiples versiones del componente. |
| **L** — Liskov Substitution   | Los componentes hijos respetan el contrato del padre. Props tipadas con interfaces explícitas, sin romper el comportamiento esperado al sustituir.                  |
| **I** — Interface Segregation | No crear props-types monolíticas. Si un componente solo usa 2 de 10 props de una interfaz, dividir esa interfaz.                                                    |
| **D** — Dependency Inversion  | Los componentes dependen de abstracciones (interfaces, tokens, tipos) no de implementaciones concretas (valores hardcodeados, imports directos de assets).          |

### Clean Architecture

```
src/
├── tokens/          ← Design tokens (colores, spacing, tipografía). Capa base.
├── types/           ← Interfaces y tipos globales. Sin lógica.
├── hooks/           ← Lógica reutilizable extraída de componentes.
├── services/        ← Comunicación externa (Firebase, APIs).
├── context/         ← Estado global compartido.
├── common/          ← Componentes UI atómicos (Button, Card, Link...).
├── modules/         ← Páginas y secciones compuestas.
└── routes/          ← Composición de rutas y layout raíz.
```

**Reglas:**

- Las capas internas no importan de capas externas (tokens no importan de modules)
- Los módulos importan de common, nunca al revés
- Ningún módulo importa directamente de otro módulo (si hay lógica compartida, sube a common o hooks)

### TypeScript estricto

- **Prohibido `any`** en cualquier forma. Si no se conoce el tipo, usar `unknown` y narrowing explícito.
- Todas las props de componentes tienen interfaz o type alias nombrado y exportado.
- Todos los event handlers tienen tipo explícito (`React.ChangeEvent<HTMLInputElement>`, etc.).
- Los styled-components con props dinámicas tienen su tipo declarado antes del componente.
- `as const` para objetos de configuración y tokens.

### React eficiente

- `useCallback` y `useMemo` solo cuando el profiling lo justifique — no por defecto.
- Evitar re-renders innecesarios: no crear objetos/arrays inline en JSX como props.
- Componentes presentacionales puros siempre que sea posible (sin side effects, sin estado).
- Los efectos (`useEffect`) tienen dependencias explícitas y cleanup cuando aplique.
- Lazy loading con `React.lazy` para rutas que no se necesitan en el primer render.

---

## Fase 1 — Quick Wins

> Objetivo: Impacto visual máximo con mínimo esfuerzo. Corregir las inconsistencias más graves.
> Duración estimada: 1–2 semanas.

### 1.1 — Sincronizar sistema de colores

- [x] Crear `src/tokens/colors.ts` con la paleta completa de `VISUAL_DESIGN_GUIDE.md`
- [x] Reemplazar `src/theme.json` por importaciones desde `tokens/colors.ts`
- [x] Eliminar todos los colores hardcodeados (`#34A0A4`, `#168AAD`, `#1A759F`, etc.) de los archivos `.styles.ts`
- [x] Verificar que ningún componente usa la paleta azul-verde antigua

**Resultado esperado:** El fondo de la web es `#0B132B`. Las cards usan `#1C2541`. El acento amarillo `#FFC857` aparece en al menos un elemento visible (botón CTA o indicador activo del menú).

---

### 1.2 — Eliminar imagen de fondo estática

- [x] Eliminar el componente `WebBackground` (la imagen `bg.png` fija) de `App.tsx`
- [x] Sustituir por fondo CSS puro usando el color `bgPrimary` del token
- [x] Opcional: añadir patrón sutil en CSS (grid de puntos o líneas) sin imagen
- [x] Verificar en mobile y desktop que no hay artefactos visuales

**Resultado esperado:** Fondo limpio, sólido o con textura CSS mínima. Sin imagen de fondo.

---

### 1.3 — Arreglar legibilidad del menú en mobile

- [x] Elevar el `font-size` mínimo del menú a `13px` en todos los breakpoints
- [x] Revisar que el tamaño mínimo de área táctil de cada ítem es al menos `44px` de alto
- [x] Verificar en dispositivos de `375px` y `320px` de ancho

**Resultado esperado:** Menú legible y usable en cualquier tamaño de pantalla.

---

### 1.4 — Activar el H1 en la Home

- [x] Añadir `<HomeTitle>` en el JSX de `Home.tsx` con el copy correcto
- [x] Asegurarse de que visualmente tiene jerarquía clara sobre el texto secundario
- [x] Verificar que en mobile el H1 no se solapa con otros elementos

**Resultado esperado:** La Home tiene un titular principal visible e inmediatamente legible.

---

### 1.5 — Email de contacto funcional

- [x] Cambiar el `<div>` con el email en `Contact.tsx` por `<a href="mailto:info@chicmouse.com">`
- [x] Aplicar el estilo de link definido en la guía (`color: #3A86FF`, hover más brillante)

**Resultado esperado:** El email es clicable y abre el cliente de correo del usuario.

---

## Fase 2 — Refactor Visual

> Objetivo: Aplicar el design system completo. Unificar todos los estilos bajo los tokens. Limpiar deuda visual.
> Duración estimada: 2–4 semanas.

### 2.1 — Design tokens completos

- [x] Crear `src/tokens/spacing.ts` con escala de espaciado (`4, 8, 12, 16, 24, 32, 48, 64, 80, 120px`)
- [x] Crear `src/tokens/typography.ts` con la jerarquía de la guía (tamaños, pesos, line-heights)
- [x] Crear `src/tokens/radius.ts` (`sm: 6px`, `md: 12px`, `lg: 20px`, `full: 9999px`)
- [x] Crear `src/tokens/transitions.ts` (`fast: 150ms ease`, `base: 250ms ease`, `slow: 400ms ease`)
- [x] Crear `src/tokens/index.ts` que reexporte todos los tokens
- [x] Reemplazar todos los valores hardcodeados en archivos `.styles.ts` por referencias a tokens

**Resultado esperado:** Ningún valor de color, spacing, radio o duración aparece hardcodeado en ningún `.styles.ts`. Todo viene de `tokens/`.

---

### 2.2 — Componente Button refactorizado

- [x] Redefinir `CustomButton` con variantes explícitas: `primary` | `secondary` | `ghost`
- [x] Variante `primary`: fondo `#FFC857`, texto `#0B132B`, `border-radius: 8px`, `padding: 12px 28px`, `font-weight: 600`
- [x] Variante `secondary`: `background: transparent`, `border: 1px solid #F5F5F5`, texto `#F5F5F5`
- [x] Hover: `translateY(-1px)` + cambio de color (eliminar hover por opacidad)
- [x] Active: `translateY(0)`
- [x] Tipar las props con una interfaz nombrada, sin `any`
- [x] Actualizar todos los usos del botón en el proyecto

**Resultado esperado:** Todos los botones del proyecto usan el nuevo sistema. El hover da feedback de interacción, no de error.

---

### 2.3 — Cards de Applications

- [x] Cambiar fondo de card de gradiente a plano `#1C2541`
- [x] Aplicar `border-radius: 12px`
- [x] Reducir sombra a `0 4px 16px rgba(0, 0, 0, 0.4)`
- [x] Añadir borde sutil: `border: 1px solid rgba(255, 255, 255, 0.06)`
- [x] Cambiar hover de `scale(1.1)` a `translateY(-4px)` con sombra aumentada
- [x] Transición con token `base: 250ms ease`

**Resultado esperado:** Las cards se ven limpias, modernas y coherentes con la guía.

---

### 2.4 — Jerarquía tipográfica aplicada

- [x] Definir en `tokens/typography.ts` todos los tamaños y pesos
- [x] Revisar cada componente y aplicar el nivel correcto (H1, H2, H3, body, caption)
- [x] Eliminar `font-size` y `font-weight` hardcodeados de los `.styles.ts`
- [x] Verificar contraste de texto en todos los fondos (mínimo WCAG AA: 4.5:1 para body)

**Resultado esperado:** Clara jerarquía visual en todas las páginas. El contenido se escanea de arriba abajo sin ambigüedad.

---

### 2.5 — Footer refactorizado

- [x] Sacar el footer de `position: fixed`
- [x] Colocarlo en el flujo normal del layout, al final del contenido
- [x] Eliminar el `padding-bottom: 100px` del `BodyWrapper` que existe como compensación
- [x] Aplicar fondo `#1C2541` (coherente con la guía)
- [x] Verificar que en páginas cortas el footer queda al final y no flota en medio

**Resultado esperado:** El footer ocupa su lugar natural en el layout. No tapa contenido.

---

### 2.6 — Indicador activo del menú

- [x] Reemplazar `background-color: green` en el ítem activo por `border-bottom: 2px solid #FFC857`
- [x] Asegurarse de que el cambio aplica también en el menú responsive (`FloatItem`)
- [x] Eliminar los colores `greenLight` y `greenDark` del menú

**Resultado esperado:** El ítem activo se distingue con el acento amarillo, no con un color verde incongruente.

---

## Fase 3 — Branding & Identidad

> Objetivo: Que la web comunique la marca ChicMouse Studio con claridad y coherencia. Eliminar elementos que contradigan la guía.
> Duración estimada: 2–3 semanas.

### 3.1 — Rediseñar la Home

- [x] Estructurar la Home con las siguientes secciones:
  - **Hero:** Headline (H1) + subheadline + CTA primario ("Ver nuestros juegos")
  - **Featured App:** Card destacada con la app principal (Matchup)
  - **Studio tagline:** 1–2 líneas sobre la filosofía del estudio
- [x] El CTA debe usar la variante `primary` del nuevo `Button`
- [x] El hero debe ocupar al menos el 80% del viewport en desktop
- [x] En mobile, el hero debe ser legible sin scroll horizontal

**Resultado esperado:** Un visitante nuevo entiende qué hace ChicMouse Studio en menos de 5 segundos.

---

### 3.2 — Refactorizar AboutUs

- [x] Reemplazar `programmer.png` y `designer.png` (personajes cartoon) por alternativas coherentes con la marca:
  - Fotografías reales (preferido)
  - Avatares geométricos vectoriales en la paleta de marca
- [x] Eliminar cualquier elemento de estilo cartoon de la sección de marca
- [x] Mantener el contenido textual, actualizar solo los assets visuales

**Resultado esperado:** AboutUs transmite profesionalidad. Sin personajes de juego en la sección de marca.

---

### 3.3 — Refactorizar Contact

- [x] Eliminar `cheese.png`
- [x] Usar el logo del estudio o un icono limpio como elemento visual principal
- [x] Añadir estructura de información de contacto: email, redes sociales (si aplica)
- [x] El email debe ser el componente `<a href="mailto:">` estilado correctamente

**Resultado esperado:** La página de contacto da confianza y sensación de profesionalidad.

---

### 3.4 — Reforzar el acento amarillo como marca

- [x] `#FFC857` debe aparecer de forma consistente en:
  - Indicador de ítem activo del menú
  - Botón CTA principal
  - Al menos un detalle decorativo en el hero (punto, subrayado, separador)
- [x] Verificar que `#FFC857` no aparece como color de fondo en superficies grandes

**Resultado esperado:** El amarillo es reconocible como elemento de identidad del estudio.

---

### 3.5 — Selector de idioma

- [x] Revisar si el uso de flags de país es el mecanismo correcto (considerar labels `ES` / `EN`)
- [x] Añadir estado activo visible con acento amarillo al idioma seleccionado
- [x] Asegurarse de que el selector es accesible (aria-label, foco con teclado)

**Resultado esperado:** El usuario sabe en todo momento qué idioma está activo.

---

## Fase 4 — Experiencia Premium

> Objetivo: Microinteracciones, animaciones y detalles que separan un producto bueno de uno memorable.
> Duración estimada: 3–4 semanas.

### 4.1 — Migrar animaciones a Framer Motion

- [x] Instalar `framer-motion`
- [x] Eliminar dependencia de `animate.css`
- [x] Implementar animación de entrada en el Hero (fade + slide up, `duration: 0.5s`)
- [x] Implementar stagger en listas de apps (cada card entra con 80ms de delay)
- [x] Transición entre rutas con `AnimatePresence` (fade, `duration: 0.2s`)

**Resultado esperado:** Las transiciones son fluidas y coherentes. Sin saltos visuales entre páginas.

---

### 4.2 — Microinteracciones en botones y links

- [x] Todos los botones: `transform: translateY(-2px)` en hover, `translateY(0)` en active
- [x] Todos los links de navegación: transición de color en `150ms`
- [x] Logo: escala sutil en hover (`scale(1.05)`) con `transition: 150ms`
- [x] Cards: hover con `translateY(-4px)` + sombra aumentada en `250ms`

**Resultado esperado:** Cada elemento interactivo responde con feedback visual claro y elegante.

---

### 4.3 — Loading state de la aplicación

- [x] Reemplazar el `<div>Loading...</div>` de `App.tsx`
- [x] Crear un componente `LoadingScreen` con el logo del estudio
- [x] Animación: el punto amarillo del logo pulsa (`opacity: 1 → 0.3 → 1` en loop)
- [x] Fondo: `#0B132B`, centrado verticalmente

**Resultado esperado:** El estado de carga refuerza la marca en lugar de romperla.

---

### 4.4 — Scroll animations

- [x] Las secciones de la Home entran con fade + slide up al hacer scroll
- [x] Usar `IntersectionObserver` via Framer Motion (`whileInView`)
- [x] Respetar `prefers-reduced-motion`: si el usuario tiene reducción de movimiento activada, las animaciones se desactivan

**Resultado esperado:** La web se siente viva. El contenido aparece con intención, no de golpe.

---

### 4.5 — Optimización de rendimiento

- [x] Implementar `React.lazy` + `Suspense` para todas las rutas excepto Home
- [x] Optimizar imágenes: convertir a `.webp` donde sea posible
- [x] Verificar que no hay re-renders innecesarios en Nav y Footer
- [x] Lighthouse score objetivo: Performance ≥ 90, Accessibility ≥ 90

**Resultado esperado:** La web carga rápido y sin jank visual.

---

## Checklist de calidad por PR

Antes de marcar cualquier fase como completada, verificar:

- [ ] ¿El cambio es coherente con `VISUAL_DESIGN_GUIDE.md`?
- [ ] ¿No hay ningún `any` nuevo introducido?
- [ ] ¿Todas las props nuevas tienen tipo explícito?
- [ ] ¿Los valores de color/spacing/radius vienen de `tokens/`?
- [ ] ¿Los componentes nuevos tienen una sola responsabilidad?
- [ ] ¿Se ve correctamente en mobile (375px), tablet (768px) y desktop (1280px)?
- [ ] ¿El contraste de texto cumple WCAG AA?
- [ ] ¿Los tests existentes siguen pasando?

---

## Progreso general

| Fase                          | Estado           | Ítems completados |
| ----------------------------- | ---------------- | ----------------- |
| Fase 1 — Quick Wins           | `[x]` Completada | 5 / 5             |
| Fase 2 — Refactor Visual      | `[x]` Completada | 6 / 6             |
| Fase 3 — Branding & Identidad | `[x]` Completada | 5 / 5             |
| Fase 4 — Experiencia Premium  | `[x]` Completada | 5 / 5             |

---

_Última actualización: 23 de abril de 2026_
