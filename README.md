# 🌸 Saba's Flower Shop

A fully responsive e-commerce flower shop built with React, TypeScript, and SCSS. Features a complete shopping experience from product browsing to cart management, backed by a custom REST API.

---

## Live Demo

**[https://saba-flower-shop.netlify.app](https://saba-flower-shop.netlify.app)**

---

## Features

- **Product Listing (PLP)** — Responsive 4-column grid with live category filter chips and animated hover overlays
- **Product Detail (PDP)** — Size variant selector, quantity control, and Add to Cart with real-time feedback
- **Shopping Cart** — Global cart state via React Context, slide-in drawer with live item count badge, and a dedicated full cart page (`/cart`)
- **FAQ Page** — Custom animated accordion (smooth height transition, rotating chevron) — no UI library dependency
- **Blog** — Card-based layout with image zoom on hover
- **About Us** — Parallax banner with team section
- **Search** — Live product search in the header
- **Fully Responsive** — Mobile-first breakpoints across all pages

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Styling | SCSS (BEM-like, no CSS-in-JS) |
| Routing | React Router v7 |
| HTTP Client | Axios |
| Carousel | Swiper.js |
| Icons | React Icons |
| UI Components | HeroUI (minimal usage) |
| Backend | Node.js + Express |
| Fonts | Google Fonts — Playfair Display, Lora, Montserrat |

---

## Project Structure

```
flower-Shop/
├── flower-API/          # Express REST API (products data)
│   └── server.js
├── src/
│   ├── assets/          # Images and SVGs
│   ├── Components/      # Reusable UI components
│   │   ├── Banner.tsx
│   │   ├── Cart.tsx          # Slide-in cart drawer
│   │   ├── Collection.tsx    # PLP with category filters
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Intro.tsx
│   │   ├── Introduction.tsx  # Flower experts section
│   │   ├── Menu.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── PDP.tsx           # Product detail page
│   │   ├── ProductCard.tsx
│   │   ├── Reviews.tsx
│   │   ├── SearchBar.tsx
│   │   └── Slider.tsx
│   ├── context/
│   │   └── CartContext.tsx   # Global cart state
│   ├── pages/
│   │   ├── AboutUs.tsx
│   │   ├── Blog.tsx
│   │   ├── CartPage.tsx      # Full cart page (/cart)
│   │   ├── FAQ.tsx           # Custom accordion
│   │   └── Home.tsx
│   └── styles/              # Per-component SCSS files
│       ├── globals.scss      # CSS variables & shared utilities
│       ├── mixins.scss       # Responsive breakpoints
│       └── ...
└── public/
```

---

## Getting Started

### 1. Install frontend dependencies

```bash
npm install
```

### 2. Install and start the API

```bash
cd flower-API
npm install
node server.js
# API runs at http://localhost:3000
```

### 3. Start the frontend

```bash
# In the root directory
npm run dev
# App runs at http://localhost:5173
```

---

## API Endpoints

The local Express API serves 25 flower products with pagination and search support.

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | List all products |
| `GET` | `/api/products?search=rose` | Search by title |
| `GET` | `/api/products?page=1&limit=8` | Paginated results |
| `GET` | `/` | Health check |

### Sample Product Response

```json
{
  "id": 1,
  "title": "Red Rose",
  "category": "Roses",
  "price": 120,
  "image": "/images/red-rose.jpg",
  "description": "Classic romantic red rose.",
  "variants": [
    { "size": "Small", "stock": 12 },
    { "size": "Medium", "stock": 6 }
  ]
}
```

---

## Key Implementation Details

### Cart System
Built from scratch using React Context API — no external state library. The `CartContext` exposes `addItem`, `removeItem`, `updateQty`, and `clearCart`. The `BrowserRouter` wraps the entire app so `Link`-based navigation preserves cart state across all page transitions.

### Custom FAQ Accordion
Replaced the HeroUI Accordion dependency with a fully custom component. Smooth expand/collapse uses CSS `max-height` transition with `cubic-bezier` easing and a rotating SVG chevron — no JavaScript animation libraries.

### Responsive Design
All breakpoints are defined as SCSS mixins (`mobile-s`, `mobile-m`, `mobile-l`, `tablet`, `desktop`). Fluid sizing uses `clamp()` for images and inputs to avoid fixed-pixel overflow on any screen width.

### Overflow / Scroll Prevention
- `html` and `body` both carry `overflow-x: hidden`
- Flex children use `min-width: 0` to prevent bloating past their containers
- Select elements use `width: min(300px, 100%)` instead of fixed pixel widths

---

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home (banner, collections, intro, experts, CTA, slider) |
| `/shop` | Full product listing with category filters |
| `/product/:id` | Product detail with variant & cart |
| `/cart` | Full cart page with order summary |
| `/blog` | Blog post grid |
| `/about-us` | About page with parallax banner |
| `/faq` | Animated FAQ accordion |

---

## Design System

The entire UI is built around a consistent token set defined in `globals.scss`:

```scss
--color-rose: #d4687a;        // Primary accent
--color-blush: #fce8ec;       // Light backgrounds
--color-sage: #7a9e7e;        // Secondary accent
--color-cream: #fdf6f0;       // Warm white
--color-text-dark: #3d2c2c;   // Headings
--color-gold: #c9a96e;        // Star ratings

--font-serif: "Playfair Display", serif;
--font-body: "Lora", serif;
--font-sans: "Montserrat", sans-serif;
```

---

## Scripts

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # TypeScript check + production build
npm run preview   # Preview production build locally
npm run lint      # ESLint
```

---

## Author

**Saba Daryabari**
