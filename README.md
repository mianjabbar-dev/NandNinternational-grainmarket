# N&N International @ Grain Market Stores

Static, price-free product showcase for grain market commodities.
Plain HTML / CSS / vanilla JavaScript with classic scripts — **no build step**.

## Run locally

Option A (simplest): double-click `index.html` — it works straight from disk.

Option B (local server):
```bash
cd nn-international-grain-market
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (Vercel / Netlify / any static host)

- Vercel: import the folder/repo, framework preset **Other**, build command
  *(none)*, output directory `.` (project root). Or drag the folder into
  Netlify Drop.
- No build, no environment variables, no backend.

## Structure

- `index.html` — page, SEO/OG meta, semantic sections
- `src/css/styles.css` — all styling (forest green / ivory / beige / gold)
- `src/data/products.js` — central product data (`window.NN_PRODUCTS`,
  `window.NN_CATEGORIES`). Add/edit products here only.
- `src/js/app.js` — rendering, category filters, mobile nav, dynamic year
- `images/products/` — product photos · `images/market/` — supplied market
  photos · `images/hero-grains.jpg` — hero
- `IMAGE_SOURCES.md` — image provenance and licences
- `favicon.svg`

## Notes

- No prices, currency symbols, carts, or contact details are shown anywhere.
  Contact details go in the `#contact` section of `index.html` once verified.
- Footer credits: Dr. Nadeem Nazir & Associates · Diginixit → https://diginixit.com/
