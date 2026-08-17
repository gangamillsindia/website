# Annapurna Flour Mills — Static Website

A fast, no-build static site for a flour mill & wholesale grains business.
Just HTML, CSS and a little JavaScript — hosts free on GitHub Pages and points
to your own domain.

## Structure

```
flour-mill-site/
├── index.html          # The whole page
├── css/styles.css      # All styling (theme colors at the top under :root)
├── js/catalogue.js     # Renders products from data/products.json
├── data/products.json  # ← EDIT THIS to add / change products
├── images/             # Put logo & photos here
├── CNAME               # Your custom domain (edit this)
└── .nojekyll           # Tells GitHub Pages to serve files as-is
```

## Things to fill in (search for these placeholders)

- `Annapurna Flour Mills` → your real brand name
- `[Your City]`, `[State]`, `[PIN]` → your location
- `[Company Address Line 1]`, `[Area]` → your address
- `+91 00000 00000` → your phone / WhatsApp numbers
- `info@example.com` → your email
- `[Your FSSAI Number]` → your FSSAI license number
- `www.yourdomain.com` in `CNAME` → your real domain

## Add or edit products

Open `data/products.json` and edit. Each product looks like:

```json
{ "name": "Chakki Fresh Atta", "desc": "Short description.", "packs": "5 / 10 / 25 kg", "tag": "Flagship" }
```

`tag` is optional (shows a small badge). No code changes needed.

## Preview locally

Because the site loads a JSON file, open it via a tiny local server (not by
double-clicking the file):

```bash
cd flour-mill-site
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new GitHub repo and push these files.
2. Repo → **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**,
   **Branch: main**, folder **/(root)**. Save.
4. Wait ~1 min — your site is live at `https://<user>.github.io/<repo>/`.

## Point your custom domain

1. Edit `CNAME` to your domain (e.g. `www.yourdomain.com`) and push.
2. At your domain registrar, add DNS records:
   - **CNAME**: `www` → `<your-github-username>.github.io`
   - For the root/apex (`yourdomain.com`), add **A records** to GitHub's IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. In **Settings → Pages**, enter your domain under **Custom domain** and
   enable **Enforce HTTPS** (may take a bit to provision the certificate).
