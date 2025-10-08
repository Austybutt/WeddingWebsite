# Wedding Website

This repository contains the source files for Aryn & Austin's wedding website. It is a static site that can be hosted on any static hosting provider (for example GitHub Pages, Netlify, or Vercel).

## Structure
- `index.html` – Password gate that forwards guests to the main site after they enter the shared password.
- `home.html` – Main landing page that now includes the RSVP reminder banner.
- `style.css` – Global styles for the site including the RSVP banner styling.
- Additional HTML pages (`about.html`, `details.html`, etc.) contain the rest of the wedding information.

## Implementing the RSVP reminder banner
If you want to add the RSVP reminder banner to another page or tweak it, follow these steps:

1. **Copy the HTML snippet**
   ```html
   <div class="rsvp-banner">
       <span>Friendly reminder: please RSVP as soon as you can so we can save you a seat!</span>
       <a href="form.html">RSVP now</a>
   </div>
   ```
   Place the snippet near the top of the page (usually under the navigation) where you would like the reminder to appear.

2. **Ensure the CSS is present**
   The necessary CSS rules live in `style.css`. As long as the page links to `style.css` (most pages already do), the banner will inherit the styling automatically. If you need to customize the banner, adjust the `.rsvp-banner` rules in `style.css`.

3. **Link to the RSVP form**
   The banner link points to `form.html`. If your RSVP form lives at a different URL, update the `href` attribute in the HTML snippet.

4. **Preview locally**
   Open the HTML file directly in a browser or use a lightweight static server:
   ```bash
   python3 -m http.server
   ```
   Navigate to `http://localhost:8000/home.html` (or the page you edited) to verify the banner appears and matches the rest of the design.

5. **Deploy the changes**
   Upload the updated files to your hosting provider. For GitHub Pages, commit and push the changes to the `main` branch, then wait a few minutes for the site to rebuild. For other hosts, follow their upload instructions.

## General tips
- Keep image assets inside the `images/` directory so relative paths remain valid.
- Maintain consistent font usage by sticking with the `'Playfair Display'` font already included in `style.css`.
- When editing copy, avoid removing required links (like the RSVP button) so guests can always navigate to key actions.

Happy editing and congratulations to the happy couple!
