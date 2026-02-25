# Birdiez - Modern Golf Fashion E-Commerce

Premium golf shop website for MSport Driving Range in Chiang Mai, Thailand.

## Overview

Birdiez is a fashion-forward golf lifestyle brand featuring:
- Premium golf apparel and accessories
- Secondhand clubs and bags
- Modern, editorial design aesthetic
- Reserve-in-store checkout flow
- Community app teaser

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Typography:** Inter (sans-serif) + Playfair Display (serif)

## Brand Colors

- **Chalk Cream:** #EFE9DC (primary background)
- **Olive Smoke:** #706C61 (primary text)
- **Matcha Mist:** #C2D8C4 (accent sections)
- **Dusty Coal:** #222222 (dark accents)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── shop/page.tsx         # Shop with filters
│   ├── product/[slug]/       # Product detail pages
│   ├── cart/page.tsx         # Shopping cart
│   ├── checkout/page.tsx     # Reservation checkout
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Sticky navigation
│   ├── Footer.tsx            # Site footer
│   └── ProductCard.tsx       # Product card component
└── lib/
    ├── products.ts           # Product data & utilities
    └── cart.ts               # Cart state management (Zustand)
```

## Features

### Landing Page
- Full-screen hero video
- Category fashion blocks (Shirts, Gloves, Accessories)
- Featured products grid
- Lifestyle/brand story section
- App teaser section
- Location section with map placeholder

### Shop Page
- Sidebar filters (desktop) / drawer filters (mobile)
- Category filtering
- Price range slider
- Size selection
- Responsive product grid

### Product Detail Page
- Image gallery with thumbnails
- Size and color selectors
- Stock indicator
- Add to cart functionality
- Product details and care instructions

### Cart & Checkout
- Cart management (add, remove, update quantity)
- Mock checkout flow
- Reserve-in-store system (no payment integration)
- Confirmation page

## Getting Started

### Prerequisites
- Node.js 20+ or Bun 1.2+

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add images** (see IMAGE_GUIDE.md):
   - Logo: `/public/logo.png`
   - Hero video: `/public/hero.mp4`
   - Category images: `/public/categories/`
   - Product images: `/public/products/`

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## Pages & Routes

- `/` - Landing page
- `/shop` - All products
- `/shop?category=shirts` - Filtered by category
- `/product/[slug]` - Product detail
- `/cart` - Shopping cart
- `/checkout` - Reservation form

## Design System

### Typography
- **Hero Titles:** Inter Black, uppercase, 7xl-9xl
- **Section Titles:** Inter ExtraBold, 3xl-5xl
- **Serif Accents:** Playfair Display italic for subheadings
- **Body:** Inter regular, lg

### Section Color Rotation
Following the brand guidelines:
1. Cream → Matcha → Cream → Smoke → Matcha → Cream

### Components
- Rounded corners: `rounded-xl` (12px) or `rounded-2xl` (16px)
- Hover effects: Scale 1.04-1.05, 300ms transition
- Buttons: Bold, rounded-xl, strong presence

## Customization

### Adding Products
Edit `/src/lib/products.ts`:

```typescript
{
  id: '11',
  name: 'New Product',
  slug: 'new-product',
  category: 'shirts',
  price: 1990,
  images: ['/products/new-1.jpg'],
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['White', 'Black'],
  stock: 10,
  featured: true,
  description: 'Product description',
  details: ['Detail 1', 'Detail 2'],
  care: ['Care instruction 1']
}
```

### Modifying Colors
Edit `/src/app/globals.css`:

```css
:root {
  --chalk-cream: #EFE9DC;
  --olive-smoke: #706C61;
  --matcha-mist: #C2D8C4;
  --dusty-coal: #222222;
}
```

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Docker
```bash
docker build -t birdiez .
docker run -p 3000:3000 birdiez
```

## Future Enhancements

- [ ] Real payment integration (Stripe/Omise)
- [ ] Admin dashboard for inventory
- [ ] Customer accounts
- [ ] Order history
- [ ] Community app integration
- [ ] Email notifications
- [ ] Google Maps integration
- [ ] Product reviews

## Notes

- **CSS Warnings:** The Tailwind CSS v4 `@apply`, `@plugin`, `@theme` warnings in globals.css are expected and can be ignored - they work correctly at runtime.
- **Images:** All product/category images need to be added manually (see IMAGE_GUIDE.md)
- **Cart:** Uses Zustand with localStorage persistence
- **No Backend:** Currently frontend-only, ready for API integration

## Support

For questions or issues, refer to:
- IMAGE_GUIDE.md for image requirements
- Next.js 15 documentation
- Tailwind CSS v4 documentation

---

Built with ❤️ for the Chiang Mai golf community
