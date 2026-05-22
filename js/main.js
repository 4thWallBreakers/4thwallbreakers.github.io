// ---- Game catalogue ----
// Edit this list to add/update titles. `image` is optional — rows without one
// fall back to a colored panel + title. Replace `links` hrefs with real store /
// social URLs; external links (https://…) open in a new tab automatically.
const GAMES = [
  {
    title: "River Rush Racing",
    badge: "Co-created w/ Lead Head Studio",
    desc: "Paddle, drift, and race down white-water rapids in a high-energy kayak racing adventure.",
    year: "2026",
    youtube: "2G-n_KCfue4",
    tags: ["Mobile", "Racing"],
    gradient: ["#1f7ae0", "#0a3a6b"],
    links: [{ label: "Meta Horizon World", href: "#" }],
  },
  {
    title: "Pencil — Learn to Draw",
    badge: "Co-created w/ Lead Head Studio",
    desc: "Learn to draw using mixed reality w/ real paper and pencil. Follow step-by-step lessons to learn the fundamentals or use your creativity to draw still life in free-draw mode!",
    year: "2025",
    youtube: "tHnDBGgvSIg",
    tags: ["Mixed Reality", "Hand Tracking", "Educational"],
    gradient: ["#3a3f74", "#181a30"],
    links: [
      { label: "Visit site", href: "https://www.pencilxr.com/" },
      { label: "Meta Quest", href: "https://www.meta.com/en-gb/experiences/pencil-learn-to-draw/7699993220035742" },
      { label: "Android XR", href: "https://play.google.com/store/apps/details?id=com.LeadHead.Pencil&hl=en_US" },
      { label: "Spectacles", href: "https://www.spectacles.com/lens/c3646f5389a748d58cd70765afa53264?type=SNAPCODE&metadata=01" },
      { label: "Pico - Coming soon", href: "#", soon: true },
    ],
  },
  {
    title: "Coaster Mania",
    desc: "Build, customize, and ride your own roller coasters in mixed reality — right in your living room.",
    year: "2024",
    youtube: "qrHC4vNTg3U",
    tags: ["Mixed Reality", "Sandbox", "Room-scale + Tabletop"],
    gradient: ["#1c6ea4", "#0d3b5c"],
    links: [
      { label: "Visit site", href: "https://www.coastermaniavr.com/" },
      { label: "Meta Quest", href: "https://www.meta.com/en-gb/experiences/coastermania/7856648691073700" },
    ],
  },
  {
    title: "GorillaZilla — Maximum Rampage",
    badge: "Collab w/ Meta & XR Bootcamp",
    desc: "Go full kaiju in mixed reality and smash your way through the city as a colossal gorilla. Built in collaboration with Meta & XR Bootcamp as curriculum material for teaching MR development.",
    year: "2024",
    youtube: "nBgQGehk4VE",
    tags: ["Mixed Reality", "Full-Body"],
    gradient: ["#2f9e44", "#0f3d1c"],
    links: [
      { label: "Visit site", href: "https://xrbootcamp.com/gorillazilla/" },
      { label: "Meta Quest", href: "https://www.meta.com/en-gb/experiences/gorilla-zilla/24708707708727852/" },
    ],
  },
  {
    title: "Pillow",
    badge: "Work for Hire",
    desc: "A cozy, experimental experience designed for winding down inside the headset. We were contracted to help with development & design work.",
    year: "2023",
    youtube: "jGaPFRT25is",
    tags: ["Mixed Reality", "Meditation"],
    gradient: ["#0ea5b7", "#0c4a52"],
    links: [
      { label: "Visit site", href: "https://www.pillow.social/" },
      { label: "Meta Quest", href: "https://www.meta.com/en-gb/experiences/pillow/5655932521164368/" },
    ],
  },
  {
    title: "Brushwork Studio",
    badge: "Co-created w/ Sunset Division",
    desc: "An expressive painting playground that turns the space around you into a living canvas.",
    year: "2022",
    youtube: "puFuuamdCoQ",
    tags: ["Virtual Reality", "Painting", "Simulation"],
    gradient: ["#7c3aed", "#3a1670"],
    links: [
      { label: "Visit site", href: "https://www.web.brushworkvr.com/" },
      { label: "Meta Quest", href: "https://www.meta.com/en-gb/experiences/brushwork-studio/4094479883955051/" },
    ],
  },
  {
    title: "PartyLine VR",
    desc: "Drop into a social VR hangout packed with fast, hilarious party games for you and your friends.",
    year: "2018",
    youtube: "nfcURbAZ120",
    tags: ["Asymmetric Multiplayer", "Virtual Reality", "Web"],
    gradient: ["#d6336c", "#4a1130"],
    links: [{ label: "View on Steam", href: "https://store.steampowered.com/app/846830/PartyLine_VR/" }],
  },
  {
    title: "& more in the lab",
    desc: "We're always prototyping. New worlds, mechanics, and barrier-breaking ideas are in the works.",
    tag: "Coming soon",
    gradient: ["#2a2e36", "#15181d"],
    soon: true,
  },
];

function linkBtn(link) {
  if (link.soon) {
    return `<span class="btn btn--ghost btn--sm btn--soon" aria-disabled="true">${link.label}</span>`;
  }
  const ext = link.href.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
  return `<a class="btn btn--ghost btn--sm" href="${link.href}"${ext}>${link.label} &rarr;</a>`;
}

function buildFeature(game, i) {
  const flip = i % 2 === 1 ? " feature--flip" : "";
  const soon = game.soon ? " feature--soon" : "";
  const mediaClass = game.youtube ? " feature__media--video" : "";
  const media = game.youtube
    ? `<iframe src="https://www.youtube-nocookie.com/embed/${game.youtube}?rel=0&modestbranding=1&playsinline=1"
         title="${game.title} trailer" loading="lazy"
         allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`
    : game.image
    ? `<img src="${game.image}" alt="${game.title}" loading="lazy" />`
    : `<span class="lettermark">${game.title}</span>`;
  const label = game.year || (game.soon ? "Coming soon" : "");
  const actions = game.soon
    ? ""
    : `<div class="feature__actions">${(game.links || []).map(linkBtn).join("")}</div>`;

  return `
    <article class="feature${flip}${soon}">
      <div class="feature__media${mediaClass}" data-c1="${game.gradient[0]}" data-c2="${game.gradient[1]}">
        ${media}
      </div>
      <div class="feature__body">
        <span class="feature__num">${label}</span>
        <h3 class="feature__title">${game.title}</h3>
        ${game.badge ? `<span class="feature__badge">${game.badge}</span>` : ""}
        <p class="feature__desc">${game.desc}</p>
        <div class="feature__meta">${(game.tags || (game.tag ? [game.tag] : [])).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        ${actions}
      </div>
    </article>`;
}

const grid = document.getElementById("gamesGrid");
if (grid) {
  grid.innerHTML = GAMES.map(buildFeature).join("");
  grid.querySelectorAll(".feature__media").forEach((el) => {
    const c1 = el.dataset.c1;
    const c2 = el.dataset.c2;
    if (c1 && c2) {
      el.style.background = `radial-gradient(130% 130% at 25% 0%, ${c1}, ${c2})`;
    }
  });
}

// ---- Awards & accolades ----
// Edit this list to add/update recognition.
const AWARDS = [
  {
    year: "2023",
    title: "Hackathon Winner",
    detail: "Meta Presence Platform Hackathon — Meta Campus, for Submersed",
    link: "https://developers.meta.com/horizon/blog/announcing-our-presence-platform-hackathon-results/",
  },
  {
    year: "2024",
    title: "Hackathon Winner",
    detail: "Meta Presence Platform Hackathon — NYC, for Pencil",
    link: "https://presence-platform-ny-2024.devpost.com/project-gallery",
  },
  {
    year: "2025",
    title: "Best Consumer App",
    detail: "AWE USA 2025 Auggie Awards",
    link: "https://www.awexr.com/blog/AWE-USA-2025-Auggies-Winners",
  },
  {
    year: "2024",
    title: "Best Early Access Mixed Reality",
    detail: "UploadVR Awards",
    link: "https://www.uploadvr.com/best-2024-hand-tracking-and-mixed-reality/",
  },
  {
    year: "2026",
    title: "Most Anticipated App",
    detail: "Pico — Mainland China",
    link: "https://app-vote-global.picoxr.com/index",
  },
  {
    year: "2026",
    title: "Most Anticipated App",
    detail: "Pico — Global",
    link: "https://app-vote-global.picoxr.com/index",
  },
];

const TROPHY = `<svg class="award__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`;

const awardsGrid = document.getElementById("awardsGrid");
if (awardsGrid) {
  awardsGrid.innerHTML = AWARDS.map((a) => {
    const tag = a.link ? "a" : "article";
    const attrs = a.link ? ` href="${a.link}" target="_blank" rel="noopener"` : "";
    return `
    <${tag} class="award reveal"${attrs}>
      ${TROPHY}
      <span class="award__year">${a.year}</span>
      <h3 class="award__title">${a.title}</h3>
      <p class="award__detail">${a.detail.replace(/\n/g, "<br>")}</p>
      ${a.link ? `<span class="award__link">View &rarr;</span>` : ""}
    </${tag}>`;
  }).join("");
}

// ---- Partners carousel ----
// Add `logo: "assets/partners/name.svg"` to show a logo image (rendered white);
// otherwise the name renders as a text wordmark.
const PARTNERS = [
  { name: "Meta", logo: "assets/partners/meta.png" },
  { name: "Android XR", logo: "assets/partners/android-xr.svg" },
  { name: "Niantic", logo: "assets/partners/niantic.svg" },
  { name: "Snapchat", logo: "assets/partners/snapchat.svg" },
  { name: "Pico", logo: "assets/partners/pico.svg" },
];

function partnerHtml(p) {
  return p.logo
    ? `<span class="partner"><img src="${p.logo}" alt="${p.name}" /></span>`
    : `<span class="partner partner__text">${p.name}</span>`;
}

const partnersHtml = PARTNERS.map(partnerHtml).join("");
["partnersTrack", "partnersTrack2"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = partnersHtml;
});

// ---- Scroll reveal ----
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".feature").forEach((f) => f.classList.add("reveal"));
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ---- Nav scroll state ----
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ---- Mobile menu ----
const toggle = document.getElementById("navToggle");
const links = document.querySelector(".nav__links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// ---- Year ----
document.getElementById("year").textContent = new Date().getFullYear();
