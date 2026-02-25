# Birdiez - Image Assets Guide

## Required Images

To complete the website, you need to add the following images to the `/public` directory:

### Logo
- **Path:** `/public/logo.png`
- **Dimensions:** 120x40px (or similar aspect ratio)
- **Format:** PNG with transparent background
- **Description:** Birdiez brand logo

### Hero Section
- **Path:** `/public/hero.mp4`
- **Format:** MP4 video
- **Description:** Full-screen hero video showing golf/lifestyle content
- **Alternative:** Can use `/public/hero.jpg` as fallback image (1920x1080px)

### Category Images
Create folder: `/public/categories/`

- **shirts.jpg** - 800x1200px - Fashion shot of golf shirts
- **gloves.jpg** - 800x1200px - Golf gloves product shot
- **accessories.jpg** - 800x1200px - Golf accessories (caps, towels, etc.)

### Product Images
Create folder: `/public/products/`

#### Shirts
- polo-1.jpg, polo-2.jpg
- tee-1.jpg, tee-2.jpg
- jacket-1.jpg

#### Gloves
- glove-1.jpg, glove-2.jpg
- glove-3.jpg

#### Accessories
- cap-1.jpg, cap-2.jpg
- towel-1.jpg

#### Clubs & Bags
- driver-1.jpg
- irons-1.jpg
- bag-1.jpg

**Recommended dimensions:** 800x800px (square)
**Format:** JPG or PNG

## Image Guidelines

### Brand Colors (for reference)
- Chalk Cream: #EFE9DC
- Olive Smoke: #706C61
- Matcha Mist: #C2D8C4
- Dusty Coal: #222222

### Photography Style
- Clean, minimal backgrounds
- Natural lighting
- Modern, editorial feel
- High-end sports fashion aesthetic
- Mix of product shots and lifestyle images

### Optimization
Before uploading, optimize images:
```bash
# Using ImageOptim, TinyPNG, or similar tools
# Target: < 200KB per image
```

## Quick Start with Placeholder Images

For development, you can use placeholder services:

1. **Unsplash** (free, high-quality):
   - Golf shirts: https://unsplash.com/s/photos/golf-polo
   - Golf gloves: https://unsplash.com/s/photos/golf-glove
   - Golf accessories: https://unsplash.com/s/photos/golf-cap

2. **Pexels** (free):
   - https://www.pexels.com/search/golf/

3. **Placeholder.com** (quick testing):
   ```
   https://via.placeholder.com/800x800/706C61/EFE9DC?text=Product
   ```

## Next Steps

1. Add your logo to `/public/logo.png`
2. Add hero video to `/public/hero.mp4`
3. Create category images in `/public/categories/`
4. Add product images to `/public/products/`
5. Restart the dev server to see changes

## Notes

- All images are referenced from the `/public` directory
- Next.js Image component automatically optimizes images
- Use WebP format for better performance (optional)
- Consider adding alt text for accessibility
