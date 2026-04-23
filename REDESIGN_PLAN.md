# ChicMouse Studio — Redesign: Single Scroll-Driven Page

> Referencia visual: [`VISUAL_DESIGN_GUIDE.md`](VISUAL_DESIGN_GUIDE.md)
> Principios de código: SOLID + Clean Architecture
> Objetivo: Transformar la SPA multi-ruta actual en una página scroll-driven cohesionada

---

## 1. Análisis del diseño objetivo

La imagen de referencia muestra una web de **7 secciones verticales** en una sola URL (`/`):

| # | Sección | Fondo | Contenido clave |
|---|---------|-------|-----------------|
| 1 | **Nav** | `#0B132B` sticky | Logo CM · Links de sección · ES/EN toggle |
| 2 | **Hero** | `#0B132B` | H1 + CTA + Ilustración geométrica del ratón |
| 3 | **Featured Game** | `#1C2541` | Card de Matchup + screenshots + badges |
| 4 | **Studio Statement** | `#0B132B` | Headline + 2 columnas de texto |
| 5 | **Team Glimpse** | `#1C2541` | 2 tarjetas de equipo con avatares de iniciales |
| 6 | **Contact Strip** | `#0B132B` | Email clicable en grande |
| 7 | **Footer** | `#0B132B` | Links legales + copyright |

**Rutas que se mantienen como páginas independientes** (no colapsan en el scroll):
- `/applications/:id` — Página de detalle de cada juego
- `/privacy-policy` — Política de privacidad
- `/terms-and-conditions` — Términos y condiciones
- `/applications/:id/privacy-policy` — PP de Matchup
- `/applications/:id/terms-and-conditions` — T&C de Matchup

---

## 2. Delta arquitectónico

### Estado actual
```
/ → Home (page)
/applications → Applications (page)
/about-us → AboutUs (page)
/contact → Contact (page)
/applications/:id → AppPage (page)
/privacy-policy → PrivacyPolicy (page)
...
```

### Estado objetivo
```
/ → SinglePage (scroll-driven, 7 secciones en una URL)
  ├── #hero
  ├── #games
  ├── #studio
  ├── #team
  └── #contact
/applications/:id → AppPage (se mantiene)
/privacy-policy → PrivacyPolicy (se mantiene)
/terms-and-conditions → TermsAndConditions (se mantiene)
...
```

### Módulos eliminados
- `modules/aboutUs/` → contenido migrado a `sections/TeamGlimpse/`
- `modules/contact/` → contenido migrado a `sections/ContactStrip/`
- `modules/apps/Applications.*` → contenido migrado a `sections/FeaturedGame/`
- `modules/home/` → reemplazado por `sections/Hero/`

### Módulos que se mantienen íntegros
- `modules/apps/components/AppPage.*`
- `modules/privacy-policy/`
- `modules/terms-and-conditions/`
- `modules/nav/` (se refactoriza, no se elimina)

---

## 3. Nueva estructura de carpetas

```
src/
├── animations/
│   └── variants.ts                    ← ya existe
├── assets/
│   ├── hero-illustration.webp         ← NUEVO (ver §6)
│   ├── badge-appstore.svg             ← NUEVO (asset oficial Apple)
│   ├── badge-googleplay.svg           ← NUEVO (asset oficial Google)
│   ├── matchupIcon.webp               ← ya existe
│   ├── matchupImage_1.webp … _4.webp  ← ya existen
│   ├── cm.webp                        ← ya existe
│   └── logo.webp                      ← ya existe
├── common/
│   ├── Button.tsx / .styles.ts        ← ya existe, sin cambios
│   ├── Footer.tsx / .styles.ts        ← refactorizar (simplificar)
│   ├── LoadingScreen.tsx / .styles.ts ← ya existe
│   └── Logo.tsx / .styles.ts          ← ya existe
├── context/
│   └── LanguageContext.tsx            ← ya existe
├── hooks/
│   ├── useReducedMotion.ts            ← ya existe
│   └── useWindowSize.ts               ← ya existe
├── modules/
│   ├── apps/
│   │   └── components/
│   │       ├── AppPage.tsx / .styles.ts  ← se mantiene
│   │       └── appDescriptions.tsx
│   ├── nav/
│   │   ├── Nav.tsx / .styles.ts       ← refactorizar (anchor links)
│   │   └── components/
│   │       ├── FarMenuItems.tsx       ← ya existe
│   │       ├── MobileDrawer.tsx       ← NUEVO
│   │       └── MobileDrawer.styles.ts ← NUEVO
│   ├── privacy-policy/                ← sin cambios
│   └── terms-and-conditions/          ← sin cambios
├── sections/                          ← NUEVA CARPETA
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.styles.ts
│   ├── FeaturedGame/
│   │   ├── FeaturedGame.tsx
│   │   └── FeaturedGame.styles.ts
│   ├── StudioStatement/
│   │   ├── StudioStatement.tsx
│   │   └── StudioStatement.styles.ts
│   ├── TeamGlimpse/
│   │   ├── TeamGlimpse.tsx
│   │   └── TeamGlimpse.styles.ts
│   └── ContactStrip/
│       ├── ContactStrip.tsx
│       └── ContactStrip.styles.ts
├── pages/
│   └── SinglePage.tsx                 ← NUEVO — compone las 7 secciones
├── routes/
│   ├── Root.tsx / .styles.ts          ← refactorizar routing
│   └── ScrollToSection.tsx            ← NUEVO — utility de scroll suave
├── tokens/                            ← ya existe, sin cambios
├── translations/
│   ├── app_en.json                    ← añadir nuevas claves
│   └── app_es.json                    ← añadir nuevas claves
├── types/
│   └── index.ts                       ← añadir SectionId type
└── utils/
    └── index.ts                       ← simplificar menu[]
```

---

## 4. Estrategia de routing

### Navegación por secciones (anchor scroll)

Los links del Nav en la `SinglePage` son anclas internas (`href="#games"`). Desde otras rutas (ej: `/applications/:id`), los links del Nav apuntan a `/#games`.

```tsx
// Lógica del link de nav según ruta activa
const isHome = location.pathname === '/';
const href = isHome ? `#${sectionId}` : `/#${sectionId}`;
```

### CSS global para scroll suave
```css
html {
  scroll-behavior: smooth;
}
```

### Nuevo Root.tsx simplificado
```
/ → <SinglePage />
/applications/:id → <AppPage />
/privacy-policy → <PrivacyPolicyEN | PrivacyPolicyES />
/terms-and-conditions → <TermsAndConditionsEN | TermsAndConditionsES />
/applications/:id/privacy-policy → <MatchupPrivacyPolicyEN | MatchupPrivacyPolicyES />
/applications/:id/terms-and-conditions → <MatchupTermsAndConditionsEN | MatchupTermsAndConditionsES />
```

### Nuevo type `SectionId`
```ts
// types/index.ts
export type SectionId = 'hero' | 'games' | 'studio' | 'team' | 'contact';
```

---

## 5. Especificación por sección

---

### 5.1 — Nav (sticky)

**Archivo:** `modules/nav/Nav.tsx` (refactorizado)

**Comportamiento:**
- `position: sticky; top: 0; z-index: 100`
- Altura: `64px`
- Fondo: `#0B132B` con `border-bottom: 1px solid rgba(255,255,255,0.06)` al hacer scroll (`scrollY > 10`)
- Blur backdrop: `backdrop-filter: blur(12px)` cuando hay scroll

**Layout desktop (≥1024px):**
```
[CM logo] ←──── flex gap ────→ [Home · Games · Studio · Contact] [ES / EN]
```
- Logo: `cm.webp` 40×20px, link a `/`
- Links de sección: `font-size: 14px, font-weight: 500`, color `#C9D1D9`
  - Link activo (basado en `IntersectionObserver`): `color: #F5F5F5`, `border-bottom: 2px solid #FFC857`
  - Hover: `color: #F5F5F5`, transición `150ms`
- Language toggle: texto `ES` / `EN`, separador `/`, activo en `#FFC857`

**Layout mobile (<1024px):**
```
[CM logo] [☰ Menu icon — Lucide `Menu`]
```
- Al pulsar: abre `MobileDrawer` (panel que entra desde la derecha, fondo `#1C2541`)
- Dentro del drawer: links de sección + language toggle
- Cerrar: Lucide `X` en la esquina

**Props interface:**
```ts
interface INavLink {
  label: string;
  sectionId: SectionId | null; // null = home (scroll to top)
  externalPath?: string;       // para cuando se está en otra ruta
}
```

**Lucide icons usados:** `Menu`, `X`

---

### 5.2 — Hero

**Archivo:** `sections/Hero/Hero.tsx`
**ID de sección:** `id="hero"`

**Layout desktop (≥1024px):** 2 columnas, `max-width: 1200px`, centrado
```
[Col 55%]                          [Col 45%]
 ── label "INDIE GAME STUDIO"       hero-illustration.webp
 H1: "We build mobile..."
 Body text
 [Ver nuestros juegos] [Studio →]
```

**Layout tablet (768–1023px):** 2 columnas estrechas, ilustración más pequeña (300px)

**Layout mobile (<768px):** columna única
- Ilustración arriba (200px, centrada)
- Texto debajo
- CTA ocupa ancho completo

**Elementos:**
- **Eyebrow label:** `"INDIE GAME STUDIO"` — uppercase, `font-size: 11px`, `letter-spacing: 0.12em`, `color: #C9D1D9`
- **Accent bar:** barra amarilla `4px × 48px`, `border-radius: 2px`, encima del eyebrow
- **H1:** `"We build mobile experiences worth playing."` — `font-size: 40px` desktop / `28px` mobile, `font-weight: 700`, `line-height: 1.15`, `color: #F5F5F5`
- **Body:** `"ChicMouse Studio is a premium independent studio crafting high-quality mobile games."` — `font-size: 15px`, `color: #C9D1D9`, `line-height: 1.6`, `max-width: 420px`
- **CTA primario:** `Button variant="primary"` — `"See our games"` — scroll a `#games`
- **CTA secundario:** link ghost con Lucide `ArrowRight` inline — `"About the studio"` — scroll a `#studio`
- **Ilustración:** `hero-illustration.webp` — ver §6 para el prompt

**Padding de sección:** `120px 0` desktop / `80px 0` tablet / `60px 0` mobile

---

### 5.3 — Featured Game

**Archivo:** `sections/FeaturedGame/FeaturedGame.tsx`
**ID de sección:** `id="games"`
**Fondo:** `#1C2541`

**Layout desktop:** contenido en `max-width: 1200px`
```
[Eyebrow: "OUR LATEST GAME"]
[App icon 80px] [Nombre H2] [Tagline body]
[Screenshots: 4 thumbnails en fila horizontal]
[App Store badge] [Google Play badge] [Learn more →]
```

**Layout mobile:**
- Header (icon + nombre) mantiene fila
- Screenshots: scroll horizontal (`overflow-x: scroll`, `snap-type: x mandatory`)
- Badges: apiladas verticalmente o en fila si caben

**Props interface:**
```ts
interface IFeaturedGameProps {
  name: string;
  tagline: string;
  icon: string;
  screenshots: string[];
  storeUrlAndroid: string;
  storeUrlIos?: string;
  detailPath: string;
}
```

**Elementos:**
- **Eyebrow label:** `"OUR LATEST GAME"` con `border-bottom: 2px solid #FFC857` debajo
- **App icon:** 80×80px, `border-radius: 18px` (estilo app store)
- **Game name:** `font-size: 28px`, `font-weight: 600`
- **Tagline:** `font-size: 15px`, `color: #C9D1D9`
- **Screenshots:** cada thumbnail `160px × 280px`, `border-radius: 12px`, gap `12px`, `overflow: hidden`
  - En mobile: contenedor con `overflow-x: auto` y `scroll-snap-align: start`
- **Store badges:** SVGs oficiales de Apple / Google (80–140px de ancho) — ver §6
- **"Learn more →":** Lucide `ArrowRight`, `color: #3A86FF`, link a `/applications/matchup`

**Lucide icons usados:** `ArrowRight`

---

### 5.4 — Studio Statement

**Archivo:** `sections/StudioStatement/StudioStatement.tsx`
**ID de sección:** `id="studio"`
**Fondo:** `#0B132B`

**Layout desktop:** centrado, `max-width: 800px`
```
[Thin yellow bar 4×40px]
[Eyebrow: "STUDIO STATEMENT"]
[H2: "Small team. Obsessive quality."]
[Col izq text] [Col der text]
```

**Layout mobile:** todo centrado, cols apiladas

**Elementos:**
- **Accent bar:** `4px × 40px`, `background: #FFC857`, `border-radius: 2px`, centrada
- **Eyebrow:** uppercase, `11px`, `0.12em` letter-spacing, `#C9D1D9`
- **H2:** `font-size: 32px` desktop / `24px` mobile, `font-weight: 700`, `text-align: center`
- **Texto col izq:** `"We believe in quality over quantity, focusing on crafting unique and polished experiences."`
- **Texto col der:** `"Our small, dedicated team is passionate about pushing the boundaries of mobile gaming."`
- Font: `14px`, `color: #C9D1D9`, `line-height: 1.7`
- Espacio negativo generoso — `padding: 120px 0`

---

### 5.5 — Team Glimpse

**Archivo:** `sections/TeamGlimpse/TeamGlimpse.tsx`
**ID de sección:** `id="team"`
**Fondo:** `#1C2541`

**Layout desktop:** 2 tarjetas en fila, `gap: 24px`, `max-width: 900px`, centrado

**Layout mobile:** tarjetas apiladas

**Cada tarjeta:**
```
[Avatar grande de iniciales]  [Nombre H3]
                               [Rol — caption]
                               [Bio — body]
```

**Avatar de iniciales:**
- Div `96px × 96px`, fondo `transparent`, borde `3px solid accentColor`
- Texto de iniciales: `font-size: 32px`, `font-weight: 700`, `color: accentColor`
- TP → `accentColor: #FFC857` / TD → `accentColor: #3A86FF`

**Props interface:**
```ts
interface ITeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  accentColor: string;
}
```

**Datos:**
- TP: Tomas Petit · Creative Director · `"Combining art and design to create immersive worlds."`
- TD: Tanya Davis · Lead Developer · `"Building robust and fluid gameplay mechanics."`

---

### 5.6 — Contact Strip

**Archivo:** `sections/ContactStrip/ContactStrip.tsx`
**ID de sección:** `id="contact"`
**Fondo:** `#0B132B`

**Layout:** centrado, `max-width: 600px`
```
[Lucide `Mail` 24px icon]
[H3: "Want to get in touch?"]
[mailto link: info@chicmouse.com]
```

**Elementos:**
- Icon `Mail` de lucide-react, `color: #C9D1D9`, `size: 24`
- H3: `font-size: 22px`, `font-weight: 600`, `color: #F5F5F5`
- Email link: `font-size: 22px` desktop / `18px` mobile, `color: #3A86FF`, hover: `color: #6FA8FF`
  - Lucide `ExternalLink` inline opcional
- `padding: 80px 0`

**Lucide icons usados:** `Mail`, `ExternalLink`

---

### 5.7 — Footer

**Archivo:** `common/Footer.tsx` (simplificado)
**Fondo:** `#0B132B`
**Border:** `border-top: 1px solid rgba(255,255,255,0.06)`

**Layout desktop:** fila única centrada
```
[Privacy Policy]  ·  [Terms & Conditions]          © 2025 ChicMouse Studio. All rights reserved.
```

**Layout mobile:** apilado verticalmente, centrado

**Elementos:**
- Links: `font-size: 12px`, `color: #C9D1D9`, hover: `color: #F5F5F5`
- Copyright: `font-size: 12px`, `color: #C9D1D9`
- `padding: 24px 0`

---

## 6. Assets requeridos

### 6.1 — Assets existentes (mantener sin cambios)

| Asset | Uso en nuevo diseño |
|-------|---------------------|
| `cm.webp` | Logo en Nav |
| `matchupIcon.webp` | Featured Game — icono del juego |
| `matchupImage_1.webp` | Featured Game — screenshot 1 |
| `matchupImage_2.webp` | Featured Game — screenshot 2 |
| `matchupImage_3.webp` | Featured Game — screenshot 3 |
| `matchupImage_4.webp` | Featured Game — screenshot 4 |

### 6.2 — Assets nuevos a generar

---

#### ASSET 1 — `hero-illustration.webp`

**Uso:** Columna derecha de la sección Hero (45% del ancho)
**Tamaño objetivo:** 600×600px, fondo transparente (o `#0B132B`)

---

**🎨 PROMPT para generación AI (Midjourney / DALL-E 3 / Stitch):**

```
Flat 2D vector illustration. Abstract geometric stylized mouse silhouette 
constructed entirely from bold curved line strokes — NO fills, NO gradients, 
NO shadows, NO textures, NO gradients, NO cartoon elements.

Style: premium minimal, geometric, like a studio logo expanded into a 
hero illustration. Think Lusion.co or Linear.app illustration aesthetic.

Construction:
- A large sweeping C-shaped arc forming the mouse body and head, 
  rendered as a thick stroke (weight ~14px equivalent) in warm yellow #FFC857
- A smaller half-circle arc suggesting an ear, also in #FFC857
- A long sinuous S-curve suggesting the mouse tail, in electric blue #3A86FF
- A small filled circle (8–10px dot) in near-white #F5F5F5 acting as the eye
- An additional inner arc or partial circle in #F5F5F5 for depth
- Optionally, a subtle partial arc in blue behind the main yellow shape

Composition: roughly centered in a square canvas, the shapes flow 
counterclockwise. The letter C and M are subtly embedded in the mouse 
silhouette — it should feel like you can read "CM" and see a mouse at 
the same time.

Background: transparent or solid #0B132B (dark navy)
Canvas: 600×600px
Line cap: round
No text, no labels, no extra decorative elements.
Output: flat vector, suitable for web hero section.
```

---

**🎨 PROMPT alternativo para SVG / Figma AI:**

```
Create a minimalist SVG illustration of a stylized geometric mouse.
Use only thick strokes (no fills) in three colors: #FFC857 (yellow), 
#3A86FF (blue), #F5F5F5 (white). 
The mouse should be abstracted into 3–5 curved arcs/circles. 
No cartoon features. No outlines or borders around shapes.
The composition should suggest the letters C and M embedded in the mouse form.
600×600 viewBox, transparent background.
```

---

#### ASSET 2 — `badge-appstore.svg`

**Uso:** Featured Game — badge de descarga
**Fuente oficial:** https://developer.apple.com/app-store/marketing/guidelines/
**No generar con AI** — descargar el SVG oficial negro de Apple.

---

#### ASSET 3 — `badge-googleplay.svg`

**Uso:** Featured Game — badge de descarga
**Fuente oficial:** https://play.google.com/intl/en_us/badges/
**No generar con AI** — descargar el SVG/PNG oficial de Google Play.

---

#### ASSET 4 (opcional) — Dot pattern de fondo

**Uso:** decorador sutil en sección Hero (capa de fondo, 5% opacidad)
**Recomendación:** implementar como CSS `radial-gradient` — no requiere imagen:

```css
background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
background-size: 24px 24px;
```

---

## 7. Inventario de iconos lucide-react

Instalar: `yarn add lucide-react`

| Icono Lucide | Componente | Uso exacto |
|---|---|---|
| `Menu` | `Nav / MobileDrawer` | Hamburger — abrir menú mobile |
| `X` | `Nav / MobileDrawer` | Cerrar menú mobile |
| `ArrowRight` | `Hero`, `FeaturedGame` | CTA secundario "About the studio →", "Learn more →" |
| `Mail` | `ContactStrip` | Icono decorativo antes del H3 |
| `ExternalLink` | `ContactStrip`, `FeaturedGame` | Links externos (stores, email) |
| `Star` | `FeaturedGame` (opcional) | Rating de la app si se muestra |
| `Smartphone` | `FeaturedGame` (opcional) | Label "Mobile game" |

**Uso estándar en el codebase:**
```tsx
import { ArrowRight } from 'lucide-react';
<ArrowRight size={16} color={colors.accentBlue} />
```

**Regla de consistencia:** todos los iconos en `size={16}` para inline, `size={24}` para decorativos standalone. Stroke width por defecto (2px). Color siempre desde tokens.

---

## 8. Responsive — Especificación completa por breakpoint

Usar los breakpoints existentes en `utils/index.ts`:

| Nombre | Valor | Uso |
|--------|-------|-----|
| `mobileS` | 320px | Edge case — verificar sin romper |
| `mobileM` | 375px | **Target mobile principal** |
| `tablet` | 768px | **Punto de quiebre col 1→2** |
| `laptop` | 1024px | **Nav colapsa a hamburger aquí** |
| `laptopL` | 1440px | Max-width container |

### Tabla de comportamiento por sección

| Sección | <768px | 768–1023px | ≥1024px |
|---------|--------|------------|---------|
| **Nav** | Logo + hamburger; links en drawer | Logo + hamburger | Logo + links inline + ES/EN |
| **Hero** | 1 col: ilustración encima (200px) + texto | 2 col: 50/50, ilustración 280px | 2 col: 55/45, ilustración 420px |
| **Featured Game** | Header fila; screenshots scroll-h; badges apiladas | Header fila; screenshots scroll-h (más anchas) | Todo horizontal, 4 screenshots visibles |
| **Studio Statement** | 1 col: todo centrado y apilado | 1 col centrado | 2 col: texto partido en columnas |
| **Team Glimpse** | 1 col: tarjetas apiladas ancho completo | 2 col: tarjetas en fila | 2 col: tarjetas en fila, max 900px |
| **Contact Strip** | Centrado, email font-size 18px | Centrado, email font-size 20px | Centrado, email font-size 24px |
| **Footer** | Apilado centrado | 2 col: links izq, copyright der | 1 fila: links + copyright |

### Reglas globales de responsive
- `min-height: 44px` en todos los elementos táctiles
- No horizontal overflow en ningún breakpoint
- `padding-inline: 20px` en mobile como margen lateral mínimo
- Imágenes: `max-width: 100%; height: auto` siempre
- `font-size` nunca inferior a `13px` en body text en cualquier breakpoint

---

## 9. Nuevas claves de traducción necesarias

### `app_en.json` — añadir:
```json
{
  "heroEyebrow": "INDIE GAME STUDIO",
  "heroHeadline": "We build mobile experiences worth playing.",
  "heroBody": "ChicMouse Studio is a premium independent studio crafting high-quality mobile games with obsessive attention to detail.",
  "heroCtaPrimary": "See our games",
  "heroCtaSecondary": "About the studio",
  "featuredGameEyebrow": "OUR LATEST GAME",
  "learnMore": "Learn more",
  "studioEyebrow": "STUDIO STATEMENT",
  "studioHeadline": "Small team. Obsessive quality.",
  "studioTextLeft": "We believe in quality over quantity, focusing on crafting unique and polished experiences.",
  "studioTextRight": "Our small, dedicated team is passionate about pushing the boundaries of mobile gaming.",
  "teamEyebrow": "Team Glimpse",
  "contactHeading": "Want to get in touch?",
  "tpRole": "Creative Director",
  "tpBio": "Combining art and design to create immersive worlds.",
  "tdRole": "Lead Developer",
  "tdBio": "Building robust and fluid gameplay mechanics."
}
```

### `app_es.json` — añadir (equivalente en español)

---

## 10. Fases de implementación

### Fase A — Infraestructura base
- [ ] `yarn add lucide-react`
- [ ] Añadir `scroll-behavior: smooth` en `src/index.css`
- [ ] Añadir `SectionId` type en `types/index.ts`
- [ ] Crear `pages/SinglePage.tsx` vacío (esqueleto de 7 secciones)
- [ ] Simplificar routing en `routes/Root.tsx` (ruta `/` → `<SinglePage />`)
- [ ] Añadir todas las claves de traducción en `app_en.json` y `app_es.json`

### Fase B — Nav refactorizado
- [ ] Actualizar `modules/nav/Nav.tsx`: links de sección con anchor href
- [ ] Crear `modules/nav/components/MobileDrawer.tsx` con Lucide `Menu` / `X`
- [ ] Lógica de link activo basada en `IntersectionObserver` (hook `useActiveSection`)
- [ ] Backdrop blur al hacer scroll (`useScrolled` hook simple)
- [ ] Verificar comportamiento en 375px, 768px, 1440px

### Fase C — Sección Hero
- [ ] Crear `sections/Hero/Hero.tsx` y `Hero.styles.ts`
- [ ] Implementar layout 2-col con grid CSS
- [ ] Placeholder para ilustración (color block #1C2541 de 420px) hasta tener el asset
- [ ] Responsive: colapso a 1 col en <768px
- [ ] Animación de entrada con `fadeUp` (ya definido en `animations/variants.ts`)

### Fase D — Sección Featured Game
- [ ] Crear `sections/FeaturedGame/FeaturedGame.tsx` y `.styles.ts`
- [ ] Scroll horizontal de screenshots en mobile con `scroll-snap`
- [ ] Descargar y añadir `badge-appstore.svg` y `badge-googleplay.svg`
- [ ] Link "Learn more" con `ArrowRight` de lucide-react → `/applications/matchup`
- [ ] `whileInView` animation (scroll reveal)

### Fase E — Sección Studio Statement
- [ ] Crear `sections/StudioStatement/StudioStatement.tsx` y `.styles.ts`
- [ ] Layout 2-col en desktop / 1-col en mobile
- [ ] Accent bar amarilla (CSS puro — no imagen)

### Fase F — Sección Team Glimpse
- [ ] Crear `sections/TeamGlimpse/TeamGlimpse.tsx` y `.styles.ts`
- [ ] Migrar lógica de avatares de iniciales desde `modules/aboutUs/`
- [ ] Cards en fila desktop / apiladas mobile
- [ ] `whileInView` animation con stagger entre tarjetas

### Fase G — Sección Contact Strip
- [ ] Crear `sections/ContactStrip/ContactStrip.tsx` y `.styles.ts`
- [ ] Lucide `Mail` icon
- [ ] Link `mailto:info@chicmouse.com` estilado como texto grande

### Fase H — Footer simplificado
- [ ] Refactorizar `common/Footer.tsx` al nuevo diseño minimal
- [ ] Layout responsive 1-fila / apilado

### Fase I — Assets hero
- [ ] Generar `hero-illustration.webp` con el prompt de §6.2
- [ ] Integrar en `sections/Hero/`
- [ ] Verificar que se ve bien en los 3 breakpoints principales

### Fase J — Limpieza
- [ ] Eliminar `modules/aboutUs/` (contenido ya migrado a TeamGlimpse)
- [ ] Eliminar `modules/contact/` (contenido ya migrado a ContactStrip)
- [ ] Eliminar `modules/apps/Applications.*` (ya no existe como página)
- [ ] Eliminar `modules/home/` (reemplazado por `sections/Hero/`)
- [ ] Limpiar `utils/index.ts` — eliminar `menu[]` array (ya no se usa)
- [ ] `yarn build` — verificar 0 errores y bundle split correcto
- [ ] Auditoría final: mobile 375px + tablet 768px + desktop 1440px

---

## 11. Criterios de aceptación

Antes de marcar el rediseño como completado:

- [ ] En 375px: el nav muestra hamburger; hero legible sin scroll horizontal; screenshots en FeaturedGame hacen scroll horizontal; tarjetas de equipo apiladas
- [ ] En 768px: hero usa 2 columnas; team en fila
- [ ] En 1440px: contenido centrado con max-width 1200px; nav muestra links inline
- [ ] `prefers-reduced-motion`: todas las animaciones desactivadas
- [ ] Keyboard navigation: nav accesible con Tab; drawer abre/cierra con Enter/Escape
- [ ] WCAG AA: contraste de texto mínimo 4.5:1 en todos los fondos
- [ ] `yarn build` con exit 0
- [ ] No hay imports de `modules/aboutUs`, `modules/contact`, ni `modules/apps/Applications` fuera de sus propios directorios

---

_Creado: 23 de abril de 2026_
