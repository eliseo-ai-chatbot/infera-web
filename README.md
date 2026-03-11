# Infera Web

Sitio de marketing de Infera y su producto principal Eliseo.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Inicio rápido

### Requisitos

- Node.js 18+
- npm 9+

### Instalación

```bash
npm install
```

### Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de producción

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá los valores:

```bash
cp .env.example .env.local
```

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp para contacto comercial (formato internacional) | `+5491100000000` |
| `NEXT_PUBLIC_BASE_URL` | URL base del sitio (usada para metadatos SEO y OpenGraph) | `https://infera.com.ar` |

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio |
| `/eliseo` | Producto Eliseo |
| `/como-funciona` | Cómo funciona |
| `/industrias` | Industrias y casos de uso |
| `/infera` | Sobre Infera |
| `/contacto` | Contacto y demo |

## Deploy

El proyecto está optimizado para deploy en [Vercel](https://vercel.com/):

1. Conectá el repo a Vercel
2. Configurá las variables de entorno en el panel de Vercel
3. Deploy automático en cada push a `main`

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
