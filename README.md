# 4thwallbreakers.github.io

Company site for **4th Wall Breakers, LLC** — an indie VR/AR game studio.

Live at **[4thwallbreakers.com](https://4thwallbreakers.com)**.

## Stack

Plain static HTML / CSS / JS — no build step. Deploys directly via GitHub Pages.

```
index.html        markup + content
css/style.css     styles, animations, responsive layout
js/main.js        game catalogue + interactions
assets/           logos, icons, game art
CNAME             custom domain (4thwallbreakers.com)
```

## Editing the games

The portfolio grid is data-driven. Edit the `GAMES` array near the top of
[`js/main.js`](js/main.js):

- `image` is optional — cards without one fall back to a gradient + title.
- Drop game art into `assets/games/` and reference it by path.
- Replace `link: "#"` placeholders with real store / social URLs. External
  links (`https://…`) open in a new tab automatically.

## Local preview

It's a static site, so any local server works, e.g.:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Push to the default branch. In the repo's **Settings → Pages**, set the source
to that branch (root). The `CNAME` file wires up the custom domain.
