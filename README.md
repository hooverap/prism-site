# Spectra website (built on the Prism starter)

A small, standardized website for an LGBTQ+ mathematicians' nonprofit — the same
kind of site as [lgbtmath.org](https://www.lgbtmath.org), rebuilt with a
consistent visual system and a structure that's easy for volunteers to maintain.

It's a static [Jekyll](https://jekyllrb.com) site, which GitHub Pages builds
and hosts for free directly from a repo — no server, database, or build
pipeline to maintain.

Content was migrated from the original lgbtmath.org site (October 2026).
Remaining gaps are marked with `TODO` comments in the page source.

## Pages

Home · Council · Events · Join · Out List · Allyship · Volunteer · Donate · History · Advocacy

Each page is a Markdown file with an HTML block for layout — edit the text
directly, no build tools required for content changes.

## Site structure

```
_config.yml         site title, nav, and org-wide settings (EIN, donation link, etc.)
_layouts/default.html   the shared page shell (head, header, footer)
_includes/header.html   navigation bar (edit once, updates everywhere)
_includes/footer.html   footer (edit once, updates everywhere)
_includes/mark.html     the logo mark, reused in header + footer
assets/css/site.css     all styling — see "Design system" below
assets/js/main.js       just the mobile-nav toggle
index.md             Home
outlist/index.md     Out List (entries come from _data/outlist.yml)
council/index.md      Council (people come from _data/council.yml)
board/index.md        Board (current and former Board members)
resources/index.md    Resources (bylaws, Advocacy Committee)
events/index.md       Events
join/index.md         Join
allyship/index.md     Allyship (Ally List entries come from _data/allylist.yml)
volunteer/index.md    Volunteer
donate/index.md        Donate
history/index.md       History
```

Because the header, footer, and nav live in `_includes/`, you only edit
navigation or org links in one place, and every page picks it up.

## Updating the lists and Council

- **Out List / Ally List** — add or edit entries in `_data/outlist.yml` and
  `_data/allylist.yml`. Each entry takes `name`, `info`, and optionally
  `email`, `website`, and `contact: true` (open to questions about climate).
- **Council** — edit `_data/council.yml`; headshots go in `assets/img/council/`.
- **Documents** — PDFs and forms are kept at the same paths as on the old site
  (`NoticesArticle/`, `Governance/`, `StudentChapters/`, `Logo/`) so existing
  links keep working. Old page URLs such as `/People.html` redirect to the new
  pages via `jekyll-redirect-from`.

## Customize it

1. **Org name and links** — edit `_config.yml`: `title`, `tagline`,
   `description`, `ein`, `donate_url`, `mailing_list_url`, `bluesky_url`.
2. **Content** — edit the Markdown files directly, or the YAML files in `_data/`.
3. **Forms** — the mailing-list and volunteer forms are static HTML with no
   backend. Point their `action` at a Google Form, Google Group signup,
   [Formspree](https://formspree.io), or similar.
4. **Growing lists** — if the Out List, Board, or Events start changing often,
   consider moving each into a `_data/*.yml` file and looping over it with
   Liquid (`{% for person in site.data.outlist %}`), so adding an entry means
   editing one line of YAML instead of HTML.

## Design system

Defined as CSS custom properties at the top of `assets/css/site.css`:

- **Colors** — `--ink` (near-black navy text), `--paper` (warm off-white
  background), and three accents (`--violet`, `--teal`, `--gold`) used as a
  deliberate three-point "spectrum" — most visible in the homepage's plotted-
  points graphic, echoing the idea of a spectrum of people and giving the
  brand a literal tie to mathematics rather than a rainbow motif.
- **Type** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif)
  for headlines, [Inter](https://fonts.google.com/specimen/Inter) (sans) for
  body text and UI, loaded from Google Fonts in `_layouts/default.html`.
- **Layout** — left-aligned, editorial, generous whitespace; a sticky header;
  simple cards and a left-rule timeline for lists.

Change the palette or type by editing the `:root` variables at the top of
`site.css` — nothing else needs to change.

## Run it locally

Requires Ruby. Once installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch,"
   pick your default branch and `/ (root)`, and save.
4. GitHub builds and publishes the site automatically on every push — no
   further configuration needed, since `github-pages` in the Gemfile matches
   what GitHub Pages runs in production.

To use a custom domain, add a `CNAME` file at the repo root containing the
domain, and configure DNS per
[GitHub's custom-domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Accessibility notes already built in

Skip-to-content link, visible focus outlines, semantic headings, a
`prefers-reduced-motion` override, and alt text / `<title>`/`<desc>` on the
decorative SVG. Keep these when you edit — they're cheap to keep and easy to
break by accident.

## Going live on lgbtmath.org

The site deploys to https://hooverap.github.io/prism-site/ through
`.github/workflows/jekyll.yml` on every push to `main`. To move it to the real
domain: set `url: "https://www.lgbtmath.org"` in `_config.yml`, add
`www.lgbtmath.org` as the custom domain under Settings → Pages, and point the
domain's DNS at GitHub Pages (and remove it from the old site's repo first).
