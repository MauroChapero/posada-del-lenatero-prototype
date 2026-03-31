# Fix Tablet Dropdown, Optimize Images for Vercel, and Critical Audit

Fix the mobile menu breakage on tablet viewports (768–1024px), migrate images from raw `<img>` with `public/` paths to Astro's `<Image />` component with `src/assets/` imports for Vercel Edge optimization, and fix critical bugs discovered during audit.

## Root Cause Analysis

### Why the dropdown breaks on tablets

The mobile menu currently uses `lg:hidden` (1024px breakpoint), meaning it appears on **both mobile and tablet** viewports. The problems:

1. **Scroll lock is too aggressive**: `navigation.ts` blocks `wheel` and `touchmove` events on the entire `window`. On tablets, users touch-scroll — this interception prevents interacting with the menu itself if it overflows the screen.
2. **No `Escape` key support**: The mobile menu has no keyboard dismiss, which breaks both usability and WCAG compliance.
3. **No ARIA `expanded` state**: The hamburger button lacks `aria-expanded`, so screen readers can't communicate menu state.
4. **No backdrop click dismiss**: Tapping outside the menu on tablet doesn't close it — confusing for iPad/Android tablet users.
5. **z-index stacking conflict**: The header uses `z-100`, the mobile menu uses `z-100`, and the right-side controls use `z-1001`. This can cause the menu to render behind or clip with the controls area on various tablet layouts.

### Why images fail in production

All image `src` attributes use hardcoded string paths like `/images/hero.webp` or `/icons/services/wifi.webp`. These are served from `public/` which:
- **Bypasses Astro's image pipeline** — no automatic format conversion, resizing, or optimization
- **Works on Vercel** (public files are served statically) but wastes bandwidth and loses Core Web Vitals scores
- For the hero and showcase images, moving to `src/assets/` with Astro's `<Image />` component enables build-time optimization (WebP/AVIF, responsive `srcset`, proper `width`/`height` for CLS prevention)

> [!IMPORTANT]
> **Scope decision**: Icons and small UI images (rates icons, WhatsApp icon, logo, service icons) are intentionally kept in `public/` with `<img>`. These are tiny files (< 5KB) where Astro Image optimization adds complexity without meaningful benefit. Only the **hero image** and **showcase gallery images** (large photos, 20–80KB each) will be migrated to `<Image />`.

## Proposed Changes

### Navigation — Tablet Dropdown Fix

#### [MODIFY] [navigation.ts](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/scripts/navigation.ts)

- Replace `wheel`/`touchmove` prevention with `document.body.style.overflow = 'hidden'` (simpler, browser-native scroll lock)
- Add `Escape` key handler to close menu
- Add resize listener to auto-close menu when viewport crosses the `lg` breakpoint (1024px)
- Update `aria-expanded` on the hamburger button toggle

#### [MODIFY] [HamburgerButton.astro](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/components/ui/buttons/HamburgerButton.astro)

- Add `aria-expanded="false"` and `aria-controls="mobile-menu"` to the button

#### [MODIFY] [NavBar.astro](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/components/NavBar.astro)

- Add `aria-label` to the mobile menu `<div>` for screen readers
- Ensure z-index stacking is consistent (mobile menu `z-[999]`, controls `z-[1000]`)

---

### Image Optimization — Hero & Showcase

#### [MODIFY] [HeroBackground.astro](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/components/features/hero/HeroBackground.astro)

- Change `Props.src` from `string` to accept `ImageMetadata` (Astro's image import type)
- Replace raw `<img>` with Astro `<Image />` component
- Add `loading="eager"` (it's above the fold) and proper `width`/`height` for CLS

#### [MODIFY] [Hero.astro](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/components/Hero.astro)

- Import the hero image from `src/assets/` (via `import heroImage from '@assets/hero.webp'`)
- Pass imported `ImageMetadata` to `HeroBackground` instead of string path

#### Move image files

- Move `public/images/hero.webp` → `src/assets/hero.webp`
- Move `public/images/showcase/*.webp` → `src/assets/showcase/*.webp`

#### [MODIFY] [ShowcaseCard.astro](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/components/features/showcase/ShowcaseCard.astro)

- Replace raw `<img>` with Astro `<Image />` component
- Accept `ImageMetadata` for `src` instead of `string`

#### [MODIFY] [content.ts](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/i18n/content.ts)

- Import showcase images from `src/assets/showcase/` and use `ImageMetadata` for `src` field
- Update `ShowcaseImage` type to accept `ImageMetadata`

#### [MODIFY] [showcase.ts (type)](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/types/showcase.ts)

- Update `ShowcaseImage.src` type from `string` to `ImageMetadata | string`

#### [MODIFY] [Showcase.astro](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/components/Showcase.astro)

- No structural changes needed — flows through from `content.ts` → `ShowcaseCard.astro`

#### [MODIFY] [GalleryModal.astro](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/components/features/showcase/GalleryModal.astro)

- **Bug fix**: Currently imports from stale `@constants/showcase` — change to accept `showcaseImages` prop (it's already passed as a prop from `Showcase.astro` but ignored in the script!)
- The gallery modal **will continue using string URLs** for runtime JS image switching (since `define:vars` serializes to plain data). We'll extract the `.src` string from `ImageMetadata` objects when passing to the client script

---

### Critical Audit Fixes

#### [MODIFY] [GalleryModal.astro](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/components/features/showcase/GalleryModal.astro)

- Fix the stale import (mentioned above)
- Add `aria-label` to prev/next/close buttons for screen reader accessibility

#### [MODIFY] [Layout.astro](file:///c:/Users/chape/dev/posada-del-lenatero-prototype/src/layouts/Layout.astro)

- Fix `<script is:inline src="/scripts/lang-redirect.ts">` — `.ts` files in `public/` are NOT compiled. Rename to `.js` or move the script to `src/scripts/` and import it properly

## Verification Plan

### Automated Tests
No existing test suite was found in the project. We'll verify via Astro build:
```bash
npm run build
```
This ensures all image imports resolve, TypeScript types check, and Astro components compile successfully.

### Browser Verification
Using the browser subagent:
1. Start the dev server with `npm run dev`
2. Open the site at `http://localhost:4321`
3. Resize browser to **768px width** (tablet) and verify:
   - Hamburger button is visible
   - Clicking it opens the full-screen mobile menu smoothly
   - Menu links are clickable and navigate correctly
   - Menu closes on link click
4. Resize to **1024px+** and verify the desktop nav links are visible
5. Check that images render properly (hero, showcase cards)
6. Open browser DevTools Network tab to verify images are served with Astro's optimized format

### Manual Verification
- Deploy to Vercel preview and verify images load on production Edge CDN
