# Aal-E-Imran – Pakistani Restaurant Landing Page

A modern, responsive landing page for **Aal-E-Imran**, a Pakistani/desi restaurant, built with **React**, **Vite**, and **Tailwind CSS**.  
This repo contains a fully revamped hero, about/vision, menu highlight, best sellers spotlight, and contact/review experience – optimized for conversions and smooth scrolling.

---

## ✨ Features

- **Revamped hero section**
  - Full-screen background image with dark gradient overlay for readability
  - Clear headline and subheading describing authentic Pakistani flavors

- **About / Vision section**
  - Brand story focused on tradition, “asli desi zaiqa”, and hospitality
  - Highlighted key stats (signature dishes, average rating, happy customers)
  - Elegant brand image with gold accent border and floating info card

- **Menu highlights**
  - Focus on core dishes like **desi chicken**, **aseel chicken salan**, **haleem**, and **channay**
  - Designed to be easily extended with more items or categories

- **best sellers**
  - Dedicated section to introduce best selling items
  - Layout ready for photos, names, and short bios

- **Contact / Review form**
  - Simple section where guests can share feedback or inquiries
  - Ideal entry point for future “reservation” or “order now” integration

- **Smooth scrolling & micro-animations**
  - Click-to-scroll navigation between sections
  - AOS-powered fade-in effects for a polished, modern feel

- **Responsive & theme-ready**
  - Mobile-first layout that adapts to all screen sizes
  - Utility-first styling via Tailwind for quick customization

---

## 🛠 Tech Stack

- **Frontend**: React 18
- **Build tool**: Vite
- **Styling**: Tailwind CSS, utility classes
- **Animations**: AOS (Animate On Scroll)
- **UI utilities**:
  - Radix UI primitives (`@radix-ui/react-slot`, `@radix-ui/react-toast`, `@radix-ui/react-tooltip`)
  - `lucide-react` for icons (available for use)
  - `class-variance-authority`, `clsx`, `tailwind-merge` for styling patterns
- **Routing**: `react-router-dom`
- **Data fetching state (available)**: `@tanstack/react-query`
- **Notifications (available)**: `sonner`
- **Theming (available)**: `next-themes`

> Not all utilities are necessarily used on the landing page yet, but they are installed and ready for future expansion.

---

## 📁 Project Structure (high level)

```text
src/
  assets/
    images/
      herobg.jpeg        # Hero background
      brand.png          # About/vision image
      ...other dish images
  components/
    Header.tsx           # Top navigation
    Hero.tsx             # Hero section with CTA & scroll indicator
    About.tsx            # Vision/story, stats, brand image
    Menu.tsx             # Menu highlight section
    Chefs.tsx            # Chef spotlight section
    ReviewForm.tsx       # Contact / review form
    Footer.tsx           # Footer
  pages/
    Index.tsx            # Home page – assembles all sections
```

The home page (`Index.tsx`) defines the order of sections and their HTML IDs, so navigation and smooth scrolling stay in sync.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended)
- **npm** (bundled with Node) or `pnpm`/`yarn` if you prefer

### Installation

```bash
# Clone the repo
git clone <your-repo-url>.git
cd Restaurant-LandingPage

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

---

## 🧩 Customization

- **Branding**
  - Update logo and brand imagery in `src/assets/images/`
  - Adjust restaurant name and tagline in `Hero.tsx` and `About.tsx`
- **Content**
  - Modify hero copy, about text, and stats in `Hero.tsx` and `About.tsx`
  - Add or update dishes in `Menu.tsx`
  - Update chef details in `Chefs.tsx`
- **Styling**
  - Tailwind utility classes are used throughout components
  - Global Tailwind config (colors, fonts, etc.) can be adjusted in `tailwind.config.js`

---

## 📸 Screenshots

- **Hero & navigation** – `src/assets/screenshots/heronavigation.png`
- **Vision section** – `src/assets/screenshots/vision.jpeg`
- **Best Sellers** – `src/assets/screenshots/bestsellers.jpeg`
- **Contact Us** – `src/assets/screenshots/contactus.jpeg`

---

## 📄 License

`MIT License` – feel free to use, adapt, and customize this template for your own restaurant or food brand.

