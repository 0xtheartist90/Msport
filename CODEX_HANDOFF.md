# Codex Project Handoff

## Project snapshot

- **Project**: `Msport`
- **Stack**: Next.js 15 app router, React, TypeScript, Tailwind CSS, Zustand
- **Workspace root**: `/Users/richieparinya/Documents/Msport`
- **Local dev URL**: `http://localhost:3000`
- **Current focus areas recently edited**:
  - Homepage card reveal animations in `src/app/page.tsx`
  - Simulators page layout cleanup and premium sections in `src/app/simulators/page.tsx`
  - About / Facilities / Simulators section-header normalization via `SectionHeader`
  - Translation structure updates in `src/lib/translations.ts`

---

## High-priority findings to address

### 1. Checkout confirmation total is cleared before the success screen renders

**Problem**
- In `src/app/checkout/page.tsx`, `handleSubmit()` sets `submitted` and immediately calls `clearCart()`.
- The success UI still reads the total from `getTotalPrice()`.
- Because the cart is already cleared, the confirmation screen shows **`฿0`**.

**Relevant code**
- `src/app/checkout/page.tsx:28-32`
- `src/app/checkout/page.tsx:54-57`

**Current flow**
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true);
  clearCart();
};
```

```tsx
<p><span className="font-semibold">Total:</span> ฿{getTotalPrice().toLocaleString()}</p>
```

**Recommended fix**
- Capture a checkout snapshot before clearing the cart.
- Example approach:
  - Add state like `const [submittedTotal, setSubmittedTotal] = useState(0)`
  - On submit, set it from `getTotalPrice()` before `clearCart()`
  - Render the submitted value in the confirmation UI instead of live cart state
- If desired, also snapshot the cart items for the confirmation screen.

**Why this matters**
- This is a real user-facing correctness bug.

---

### 2. Cart quantity updates and deletes break when the same product exists in multiple variants

**Problem**
- `addItem()` correctly distinguishes cart lines by:
  - `product.id`
  - `selectedSize`
  - `selectedColor`
- But `removeItem()` and `updateQuantity()` only use `productId`.
- This means two cart lines for the same product but different size/color are not handled independently.

**Relevant code**
- Store API definitions: `src/lib/cart.ts:14-22`
- Broken removals/updates: `src/lib/cart.ts:54-67`
- UI callers passing only product id: `src/app/cart/page.tsx:74-93`

**Current store behavior**
```tsx
removeItem: (productId) => {
  set({ items: get().items.filter(item => item.product.id !== productId) });
},

updateQuantity: (productId, quantity) => {
  if (quantity <= 0) {
    get().removeItem(productId);
  } else {
    set({
      items: get().items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    });
  }
},
```

**Recommended fix**
- Introduce a unique cart-line identity based on:
  - `productId`
  - `selectedSize`
  - `selectedColor`
- Update store signatures to accept a full line identifier.
- Update cart page buttons to pass those variant fields.

**Safe implementation options**
1. Add a helper like:
```ts
const isSameCartLine = (item, productId, size, color) =>
  item.product.id === productId && item.selectedSize === size && item.selectedColor === color;
```
2. Or add a derived `lineId` string for each cart row, e.g.:
```ts
`${product.id}__${selectedSize ?? ''}__${selectedColor ?? ''}`
```

**Why this matters**
- This is both a correctness bug and a data integrity issue.

---

### 3. Footer contains links that currently resolve to missing routes

**Problem**
The footer links to pages that do not exist in the current app.

**Relevant code**
- `src/components/Footer.tsx:12-17`
- `src/components/Footer.tsx:65-68`

**Missing routes currently linked**
- `/events`
- `/privacy`
- `/terms`
- `/careers`

**Observed route state**
- No corresponding route files were identified under `src/app` for those links.

**Recommended fix**
Choose one:
1. Create the missing pages.
2. Remove those links.
3. Repoint them to valid existing destinations.

**Why this matters**
- These are guaranteed user-facing 404s from a global navigation surface.

---

### 4. Product not-found fallback links to `/shop`, but `/shop` is not implemented

**Problem**
- In `src/app/product/[slug]/page.tsx`, missing products link users to `/shop`.
- There is a `src/app/shop/` directory, but it is **empty** and contains no `page.tsx`.
- Therefore the recovery path leads to another 404.

**Relevant code**
- `src/app/product/[slug]/page.tsx:23-30`
- `src/app/shop/` exists but is empty

**Current code**
```tsx
<Link href="/shop" className="text-[#222222] underline">
  Back to Shop
</Link>
```

**Recommended fix**
- Either restore a valid shop page, or repoint the link to an existing route.
- Based on current site structure, likely candidates are:
  - `/simulators` if these products are simulator-related reservations
  - another actual commerce/catalog route if one exists elsewhere

**Why this matters**
- The error-recovery path is itself broken.

---

### 5. Type-check currently depends on stale generated Next types

**Problem**
- `tsconfig.json` includes `.next/types/**/*.ts`.
- In the current workspace, `npm run type-check` is reportedly unstable because `.next/types` still references deleted or missing app routes.

**Relevant code**
- `tsconfig.json:31-36`

**Current include**
```json
"include": [
  "next-env.d.ts",
  "**/*.ts",
  "**/*.tsx",
  ".next/types/**/*.ts"
]
```

**Risk**
- Static checking can fail for stale generated files rather than actual source problems.
- This reduces confidence in the type-check signal.

**Recommended fix options**
1. Regenerate `.next/types` after ensuring route structure is valid.
2. Remove `.next/types/**/*.ts` from `include` if this project does not need it for explicit route typing workflows.
3. If kept, document that `.next` must be rebuilt/cleaned before type-checking.

**Why this matters**
- Type-check should be deterministic and source-driven.

---

### 6. Production build is blocked by lint failures

**Problem**
- `next build` reportedly fails due to lint issues.
- One confirmed issue is real and visible in source:
  - `FacilityGallery` maps buttons without `key` props on one list.
- There are also multiple newline-before-return style issues across new pages/components.

**Confirmed relevant code**
- `src/components/FacilityGallery.tsx:48-64`

**Current missing-key area**
```tsx
{Array.from({ length: Math.min(visibleSlots, sanitizedImages.length) }).map((_, offset) => {
  const imageIndex = (index + offset) % sanitizedImages.length;
  return (
    <button
      type="button"
      onClick={() => openModal(imageIndex)}
      className="relative aspect-video overflow-hidden rounded-xl border border-[#E1DED6] focus:outline-none focus:ring-2 focus:ring-white/70"
    >
```

**Recommended fix**
- Add a stable `key`, for example:
```tsx
key={`${name}-preview-${imageIndex}`}
```
- Then run the project lint/build and address remaining reported formatting issues file by file.

**Why this matters**
- Build pipeline is not green.

---

## Recent project changes that Codex should know about

### Homepage (`src/app/page.tsx`)
- Homepage section headers were normalized around the `SectionHeader` pattern.
- Reveal animations were re-enabled for the Heritage / Expansion headers.
- Homepage cards now use staggered `reveal reveal-up` animation classes across:
  - range overview cards
  - membership cards
  - feature highlight cards
  - news cards
- Some performance cleanup was added:
  - shared delay-class constants
  - `useMemo` for localized card data

### Section header system (`src/components/SectionHeader.tsx`)
- Subtitle rendering was tightened to only render non-empty strings.
- Global spacing under titles/subtitles was reduced to make sections feel tighter.
- This component is now the main header convention across homepage/about/facilities/simulators.

### Translations (`src/lib/translations.ts`)
- Homepage heritage structure was expanded to:
  - `eyebrow`
  - `title`
  - `subtitle`
  - `description`
  - `cta`
- This was updated across locales.

### Simulators page (`src/app/simulators/page.tsx`)
Recent changes here are significant:
- Performance Bay image overlay label was removed.
- Booking section now includes:
  - email: `msport.golfsimulator@gmail.com`
  - Instagram: `https://www.instagram.com/msport_golfsimulator`
- Features section was refactored from a simple list into a premium card grid.
- Booking section was refactored into a centered reservation module with contact cards and CTAs.
- Icons in the feature and booking cards were updated to match the visual language of About page “What to Expect” cards.
- Features section heading/body/cards were center-aligned.

**Important note**
- Because the simulators page was edited repeatedly in-session, it should be rechecked with lint/type-check after any additional edits to ensure no JSX regressions were introduced during iterative patching.

### About page (`src/app/about/page.tsx`)
- “What to Expect” icon treatment is the visual reference for simulator card icons.
- That section uses `lucide-react` icons inside rounded circular containers with accent-colored icons.

### Facilities
- Facilities page headers were normalized to the eyebrow/title/subtitle structure.
- Facility detail pages moved gallery above the title area.
- `FacilityGallery` is currently one of the known lint blockers due to the missing key noted above.

---

## Current architectural conventions worth preserving

### 1. Section headers
Use `SectionHeader` for consistent:
- eyebrow
- title
- subtitle
- alignment
- optional animation

### 2. Styling constraints from recent work
The user has been strict about preserving visual language once approved. In general:
- avoid changing colors unless explicitly requested
- avoid changing typography tokens unless explicitly requested
- avoid changing Tailwind design classes for approved sections unless necessary
- maintain eyebrow/title/subtitle consistency across pages

### 3. Animations
- Homepage uses `reveal`, `reveal-up`, `reveal-down`, and `reveal-delay-*` classes.
- Recent requests focused on making cards animate, not just headers.
- Do not remove those unless specifically asked.

---

## Suggested execution order for Codex

1. **Fix correctness bugs first**
   - checkout total snapshot
   - cart variant-safe remove/update
   - product not-found redirect

2. **Fix broken navigation**
   - footer links to missing routes

3. **Fix build stability**
   - `FacilityGallery` missing key
   - run lint/build and clear remaining failures
   - address `.next/types` type-check instability

4. **Re-verify recently edited simulator page**
   - ensure JSX / lint is clean after the premium feature + booking refactor

---

## Quick file map for the main issues

- `src/app/checkout/page.tsx`
- `src/app/cart/page.tsx`
- `src/lib/cart.ts`
- `src/components/Footer.tsx`
- `src/app/product/[slug]/page.tsx`
- `src/components/FacilityGallery.tsx`
- `tsconfig.json`
- `src/app/simulators/page.tsx`
- `src/components/SectionHeader.tsx`
- `src/lib/translations.ts`

---

## Practical handoff note

If Codex starts by running validation, the likely useful sequence is:

```bash
npm run lint
npm run type-check
npm run build
```

If type-check fails on `.next/types`, clear or regenerate Next build artifacts before trusting the result.

---

## Short summary

The most important unresolved issues are:
- checkout success total becomes `฿0`
- cart variant lines are not independently mutable/removable
- footer has multiple dead links
- product not-found fallback points to a non-existent page
- type-check is noisy/unreliable due to `.next/types`
- build is blocked by lint issues, including a confirmed missing `key` in `FacilityGallery`

The most important recent completed design work is on the homepage and simulators page, especially the premium refactor of simulator Features and Booking sections.
