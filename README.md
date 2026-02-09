# Posada Leñatero – Astro + Tailwind Website

Sitio web estático desarrollado con **Astro** y **Tailwind CSS**, orientado a:
- performance
- SEO
- arquitectura por composición
- mantenimiento simple y escalable

El proyecto evita JavaScript innecesario en runtime y prioriza HTML semántico.

---

## 🚀 Stack tecnológico

- **Astro**
- **Tailwind CSS**
- **Bun** (runtime + package manager)
- **TypeScript** (configuración)
- Assets optimizados (`.webp`, `.svg`)

---

## 📁 Estructura del proyecto

```text
/
├── public/
│   ├── icons/
│   │   ├── posadas-navbar-icon.webp
│   │   ├── whatsapp-icon.svg
│   │   └── schedule.webp
│   ├── images/
│   │   ├── hero.webp
│   │   └── rates-beds/
│   │       ├── single-bed.webp
│   │       ├── single-king-bed.webp
│   │       ├── king-matrimonial-bed.webp
│   │       └── ...
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   │
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Main.astro
│   │   ├── NavBar.astro
│   │   ├── Rates.astro
│   │   └── ui/
│   │       ├── NavLink.astro
│   │       ├── SectionContainer.astro
│   │       └── WhatsAppButton.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── .gitignore
├── .stylelintrc.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── bun.lock
├── package.json
└── README.md
```
---
## 🧩 Arquitectura general

**pages/:** orquestan layouts y secciones (sin lógica).

**layouts/:** estructura base del documento HTML.

**components/:** secciones del sitio.

**components/ui/:** componentes reutilizables y atómicos.

**public/:** assets estáticos accesibles directamente.

**styles/:** estilos globales con Tailwind.

Toda la UI se construye por composición de componentes Astro.
---
### 📐 Layout
#### `Layout.astro`

### Layout base del sitio:

- Importa estilos globales
- Define <head> (SEO + meta tags)
- Habilita scroll-smooth
- Compensa el header fijo (pt-20)

### Uso:
```
<MainLayout title="Posada Leñatero | Home">
  <NavBar />
  <Main />
</MainLayout>
```

### Props:

```
title: string
```
---
## 🧭 Navegación
```
NavBar.astro
```
#### Header fijo con:

* Logo
* Navegación principal
* CTA a WhatsApp

#### Usa:

- NavLink.astro
- WhatsAppButton.astro
- SectionContainer.astro