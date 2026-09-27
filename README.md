# Prism — nonprofit website starter

A small, standardized website for an LGBTQ+ mathematicians' nonprofit — the same
kind of site as [lgbtmath.org](https://www.lgbtmath.org), rebuilt with a
consistent visual system and a structure that's easy for volunteers to maintain.

It's a static [Jekyll](https://jekyllrb.com) site, which GitHub Pages builds
and hosts for free directly from a repo — no server, database, or build
pipeline to maintain.

**Everything here is placeholder content.** Names, dates, EIN, and links are
fake. Search for "Placeholder" and replace before you launch.

## Pages

Home · Out List · Board · Events · Join · Allyship · Volunteer · Donate · History

Each page is a Markdown file with an HTML block for layout — edit the text
directly, no build tools required for content changes.

## Site structure

```
_config.yml         site title, nav, and org-wide settings (EIN, donation link, etc.)
_layouts/default.html   the shared page shell (head, header, footer)
_includes/header.html   navigation bar (edit once, updates everywhere)
_includes/footer.html   footer (edit once, updates everywhere)
_includes/mark.html     the logo mark, reused in header + footer
assets/css/style.css    all styling — see "Design system" below
assets/js/main.js       just the mobile-nav toggle
index.md             Home
outlist/index.md     Out List
board/index.md        Board
events/index.md       Events
join/index.md         Join
allyship/index.md     Allyship
volunteer/index.md    Volunteer
donate/index.md        Donate
history/index.md       History
```

Because the header, footer, and nav live in `_includes/`, you only edit
navigation or org links in one place, and every page picks it up.

## Customize it

1. **Org name and links** — edit `_config.yml`: `title`, `tagline`,
   `description`, `ein`, `donate_url`, `mailing_list_url`, `bluesky_url`.
2. **Content** — edit the Markdown files directly. Placeholder people, board
   members, events, and history entries are marked `Placeholder`.
3. **Forms** — the mailing-list and volunteer forms are static HTML with no
   backend. Point their `action` at a Google Form, Google Group signup,
   [Formspree](https://formspree.io), or similar.
4. **Growing lists** — if the Out List, Board, or Events start changing often,
   consider moving each into a `_data/*.yml` file and looping over it with
   Liquid (`{% for person in site.data.outlist %}`), so adding an entry means
   editing one line of YAML instead of HTML.

## Design system

Defined as CSS custom properties at the top of `assets/css/style.css`:

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
`style.css` — nothing else needs to change.

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
