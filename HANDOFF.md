# Design Handoff - Ashop

## 0. Approval Record

- **Homepage options shown:** Option A (Swiss Grid), Option B (Editorial Luxury), Option C (Modern Elevated)
- **Selected option:** Option C - Modern Elevated with Option A's hero section
- **Preview artifact file paths:**
  - `output/ashop/designs/homepage-directions.pen`
  - `output/ashop/designs/homepage-option-a.png`
  - `output/ashop/designs/homepage-option-b.png`
- **Pencil project paths used:** `output/ashop/designs/homepage-directions.pen`
- **Final design file:** `output/ashop/designs/design.pen`
- **Source website:** https://www.apple.com/
- **Source audit:** `output/ashop/source-audit.json`

## 1. Frontend Build Map

### Homepage Section Sequence
1. **Header** - Navigation with logo, links, and cart badge
2. **Hero** - Centered "Ashop." title with subtitle and CTA buttons (Option A style)
3. **Featured Products** - 4-column product grid with image, name, and price
4. **About** - "Your Trusted Tech Partner" section with text and image
5. **Blog** - "Latest from the Blog" with 3 blog cards (category, title, date)
6. **Contact** - Dark section with "Need Help? We're Here." and CTA buttons
7. **Footer** - Brand info, link columns, and copyright

### Ecommerce Pages Designed
- `/` - Homepage (approved design)
- `/products` - Product listing with filter sidebar (categories, price range), product grid (4 columns), sort controls, pagination
- `/products/[id]` - Product detail with image gallery (main + thumbnails), color selector, storage selector, add-to-cart button, wishlist button
- `/cart` - Line items with quantity controls, remove buttons, order summary with subtotal/shipping/total, checkout CTA
- `/checkout` - Delivery form (name, email, phone, address), delivery method selector (standard/express), payment method selector, order summary panel
- `/login` - Email/password form with sign in button, forgot password link, create account link
- `/register` - First/last name, email, password, confirm password fields with create account button
- `/profile` - Sidebar menu (Profile, Orders, Wishlist), editable profile form with save button
- `/orders` - Order history list with order number, status badges (Delivered/Processing/Shipped), date, total, view details link
- `/orders/[id]` - Order detail with status timeline (4 steps), item list with images, order totals
- `/wishlist` - Saved product grid with remove buttons and add-to-cart buttons

### CMS Pages
- `/about` - About page
- `/contact` - Contact page
- `/blog` - Blog listing
- `/blog/[slug]` - Blog post detail

## 2. Design System

### Colors
- **Primary:** `#111111` (near-black)
- **Secondary:** `#0066cc` (blue links/accents)
- **Background:** `#ffffff` (white)
- **Surface:** `#f5f5f7` (light gray)
- **Text Primary:** `#111111`
- **Text Secondary:** `#666666`
- **Text Muted:** `#86868b`

### Typography
- **Display:** Inter, system-ui, sans-serif
- **Body:** Inter, system-ui, sans-serif
- **Scale:** 72px (hero), 48px (section titles), 36px (subsection), 18px (body), 14px (small)

### Spacing
- **Page padding:** 48px
- **Section gap:** 80px
- **Card gap:** 24px
- **Content max width:** 1200px

### Motion
- **Level:** 2 (Alive)
- **Library:** Framer Motion
- **Effects:** Fade-in on scroll, subtle hover transitions

## 3. erxes CMS Field Map

### Homepage Sections
1. Hero - Static content
2. Featured Products - Dynamic from POS/products
3. About - CMS page content
4. Blog - CMS posts (latest 3)
5. Contact - Static content

### Pages to Seed
- `about` - About Us page
- `contact` - Contact page
- `blog` - Blog listing page

### Menu Structure
**Header:**
- Products (/products)
- New Arrivals (/products?sort=new)
- About (/about)
- Blog (/blog)
- Contact (/contact)

**Footer:**
- Shop: All Products, New Arrivals, Best Sellers
- Support: Contact Us, FAQ, Shipping Info
- Company: About Us, Blog, Careers

### Languages
- Primary: Mongolian (mn)
- Secondary: English (en)
- All content must be translated

## 4. Implementation Notes

### Do Not Change
- Hero section layout (centered text)
- Dark contact section styling
- 4-column product grid on desktop
- Blog card structure (image + category + title + date)

### Responsive Behavior
- Mobile: Stack all columns to single column
- Tablet: 2-column grids
- Desktop: 4-column product grid, 3-column blog grid

### Accessibility
- Minimum contrast ratio 4.5:1 for text
- Focus states on all interactive elements
- Semantic HTML structure
