// Data: to add a client or project, add one line below.

// Best-known names first: phones show only the first six until "show more"
const CLIENTS = [
  ['heineken', 'Heineken'],
  ['lazada', 'Lazada'],
  ['vietjet', 'Vietjet Air'],
  ['sapporo', 'Sapporo Vietnam'],
  ['prudential', 'Prudential'],
  ['novaland', 'Novaland'],
  ['vichy', 'Vichy'],
  ['laroche-posay', 'La Roche-Posay'],
  ['bmw', 'BMW'],
  ['phat-dat', 'Phát Đạt'],
  ['moony', 'Moony'],
  ['abbott', 'Abbott'],
  ['bridgestone', 'Bridgestone'],
  ['annam-gourmet', 'Annam Gourmet'],
  ['nam-long', 'Nam Long'],
  ['mobifone', 'MobiFone'],
  ['shu-uemura', 'Shu Uemura'],
  ['jadiny', 'Jadiny'],
  ['buzz', 'Buzz Communication'],
  ['kao', 'Kao'],
  ['ics', 'ICS'],
  ['sao-khue', 'Sao Khuê'],
  ['upsa', 'UPSA'],
  ['the-edu-house', 'The Edu House'],
  ['tomato', 'Tomato'],
  ['lancome', 'Lancôme'],
  ['toshiba', 'Toshiba'],
  ['wyeth', 'Wyeth Nutrition'],
  ['tan-hiep-phat', 'Tân Hiệp Phát'],
  ['sylva', 'Sylva'],
  ['faros', 'Faros'],
  ['yes-edu', 'YES Education'],
  ['genco3', 'EVN Genco3'],
];

const TEXT = {
  vi: {
    all: 'Tất cả',
    copied: 'Đã copy ✓',
    website: 'Website',
    types: { campaign: 'Campaign site', business: 'Doanh nghiệp / Tổ chức', education: 'Giáo dục', others: 'Khác' },
  },
  en: {
    all: 'All',
    copied: 'Copied ✓',
    website: 'Website',
    types: { campaign: 'Agency campaign sites', business: 'Business/Organization sites', education: 'Education sites', others: 'Others' },
  },
};

// [image file in assets/img/projects (named after the portfolio deck slide), website, type]
// Newest projects go first so they lead the grid
const PROJECTS = [
  ['p69', 'sylva.edu.vn', 'education'],
  ['p70', 'enzymax.vn/duomen', 'campaign'],
  ['p71', 'truonghelop1.tomato.edu.vn', 'education'],
  ['p72', 'truonghe2026.tomato.edu.vn', 'education'],
  ['p73', 'nhuongquyen.tomato.edu.vn', 'education'],
  ['p74', 'icanelc.faros.edu.vn', 'education'],
  ['p75', 'ow.sylva.edu.vn', 'education'],
  ['p76', 'Tomato Skill Up Summer 2025', 'education'],
  ['p77', 'secvietnam.org', 'business'],
  ['p78', 'lazadamarketing.vn/0909', 'campaign'],
  ['p79', 'lazadamarketing.vn/1212', 'campaign'],
  ['p80', 'lazadamarketing.vn/0606', 'campaign'],
  ['p81', 'lazadamarketing.vn/mar2025', 'campaign'],
  ['p82', 'lazadamarketing.vn/1212 · Kéo Búa Bao', 'campaign'],
  ['p83', 'lazadamarketing.vn/1111', 'campaign'],
  ['p84', 'aiforedu.vn', 'education'],
  ['p67', 'faros.edu.vn', 'education'],
  ['p68', 'lever.edu.vn', 'education'],
  ['p09', 'heineken00.danchoisom.com.vn', 'campaign'],
  ['p10', 'sapporo-starguide.com', 'campaign'],
  ['p11', 'dauhieuluadao.com', 'campaign'],
  ['p12', 'sachkhuankhumui.attack.com.vn', 'campaign'],
  ['p13', 'moonyclub.com.vn/vivucungmoony', 'campaign'],
  ['p14', 'thegioiconkhampha.com.vn', 'campaign'],
  ['p15', 'sapporo-premium-bar.sapporovietnam.com.vn', 'campaign'],
  ['p16', 'tracnghiemdakhoe.com', 'campaign'],
  ['p17', 'blog.prudential.com.vn', 'campaign'],
  ['p18', 'moonyclub.com.vn', 'campaign'],
  ['p19', 'loveconnection.vietjetair.com', 'campaign'],
  ['p20', 'giaiphaptrimun.vn', 'campaign'],
  ['p21', 'growcaohonthongminhhon.com', 'campaign'],
  ['p22', 'nhatkydaigiadinh.com', 'campaign'],
  ['p23', 'traxanhkhongdo.com.vn', 'campaign'],
  ['p24', 'wyethnutrition.com.vn', 'campaign'],
  ['p25', 'wyethnutrition.com.vn/lichyeuchobe', 'campaign'],
  ['p26', 'bridgestone.com.vn', 'campaign'],
  ['p27', 'number1chanh.com.vn', 'campaign'],
  ['p28', 'lancome.vn', 'campaign'],
  ['p29', 'annam-haribo.com.vn', 'campaign'],
  ['p30', 'toshiba.com.vn/truehome', 'campaign'],
  ['p31', 'lactum.com.vn', 'campaign'],
  ['p32', 'theflora.vn', 'campaign'],
  ['p33', 'sim1c.mobifone.vn', 'campaign'],
  ['p34', 'uocmo.ensure.com.vn', 'campaign'],
  ['p35', 'ensure.com.vn', 'campaign'],
  ['p36', 'giadinhlavogia.com.vn', 'campaign'],
  ['p38', 'theadora.vn', 'business'],
  ['p39', 'nhahangdongphuong.vn', 'business'],
  ['p40', 'tomato.edu.vn', 'education'],
  ['p41', 'icanschool.edu.vn', 'education'],
  ['p42', 'songngusaokhue.edu.vn', 'education'],
  ['p43', 'theeduhouse.vn', 'education'],
  ['p44', 'upsavietnam.com', 'business'],
  ['p45', 'attack.com.vn', 'business'],
  ['p46', 'vichy.com.vn', 'business'],
  ['p47', 'giaxe.bmw.vn', 'business'],
  ['p48', 'sapporovietnam.com.vn', 'business'],
  ['p49', 'novaworldphanthiet.com.vn', 'business'],
  ['p50', 'philoinhuan.org', 'business'],
  ['p51', 'redcarpetvn.com', 'business'],
  ['p52', 'yesedu.vn', 'education'],
  ['p53', 'truonghockientao.icanschool.edu.vn', 'education'],
  ['p54', 'doithoaivoigenz.yesedu.vn', 'education'],
  ['p55', 'maitam.org', 'business'],
  ['p56', 'eps.genco3.vn', 'business'],
  ['p57', 'buzzcommunication.com.vn', 'business'],
  ['p58', 'shuuemura.com.vn', 'business'],
  ['p59', 'theeverrichinfinity.com.vn', 'business'],
  ['p60', 'namlongvn.com', 'business'],
  ['p61', 'dmp.vn', 'business'],
  ['p62', 'latinobella.com', 'business'],
  ['p64', 'jadiny.vn', 'others'],
  ['p65', 'muahangviet.com.vn', 'others'],
  ['p66', 'vngreenfarm.com', 'others'],
];

const FEATURED = ['p69', 'p72', 'p78', 'p73', 'p80', 'p83'];

// Rendering

const t = TEXT[document.documentElement.lang] || TEXT.vi;
// Image paths are resolved from this script's location so pages in /en/ work too
const ASSETS = new URL('../assets/img/', document.currentScript.src).href;

// Each thumbnail exists at 600, 800 and 1200px wide; the browser picks the smallest that fits the card
const projectCard = ([image, site, type]) => {
  const src = `${ASSETS}projects/${image}`;
  return `
  <figure class="project" data-type="${type}">
    <div class="project-img">
      <img src="${src}-600.webp" srcset="${src}-600.webp 600w, ${src}-800.webp 800w, ${src}.webp 1200w"
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        alt="${t.website} ${site}" width="1200" height="750" loading="lazy" decoding="async" />
    </div>
    <figcaption><strong>${site.replace(/([./])/g, "$1<wbr>")}</strong><span>${t.types[type]}</span></figcaption>
  </figure>`;
};

const logos = document.querySelector('[data-clients]');
if (logos) {
  logos.innerHTML = CLIENTS.map(
    ([slug, name]) => `<li><img src="${ASSETS}clients/${slug}.webp" alt="${name}" loading="lazy" /></li>`,
  ).join('');
}

// On phones only the first logos show until "show more" is tapped; the button is hidden on wider screens
const more = document.querySelector('[data-more]');
if (logos && more) {
  more.addEventListener('click', () => {
    logos.classList.add('is-open');
    more.setAttribute('aria-expanded', 'true');
    more.hidden = true;
  });
}

document.querySelectorAll('[data-project-count]').forEach((el) => (el.textContent = PROJECTS.length));
document.querySelectorAll('[data-client-count]').forEach((el) => (el.textContent = CLIENTS.length));

// Offerings slider on phones: one dot per card, the current card's dot lit; tapping a dot scrolls to it
const slides = document.querySelector('.cards');
const dots = document.querySelector('[data-dots]');
if (slides && dots) {
  const cards = [...slides.children];
  dots.innerHTML = cards.map((_, i) => `<button type="button" aria-label="${i + 1}"></button>`).join('');
  const buttons = [...dots.children];
  const update = () => {
    const current = Math.round(slides.scrollLeft / (cards[1].offsetLeft - cards[0].offsetLeft));
    buttons.forEach((b, i) => b.setAttribute('aria-current', i === current));
  };
  buttons.forEach((b, i) => b.addEventListener('click', () => slides.scrollTo({ left: cards[i].offsetLeft - cards[0].offsetLeft, behavior: 'smooth' })));
  slides.addEventListener('scroll', update, { passive: true });
  update();
}

const ofType = (type) => (type === 'all' ? PROJECTS : PROJECTS.filter((p) => p[2] === type));

// Filter chips above a project grid. pick(type) returns the projects to show for that chip.
const setupFilters = (filters, grid, pick, showCount) => {
  const options = [['all', t.all], ...Object.entries(t.types)];
  filters.innerHTML = options
    .map(
      ([value, label], i) =>
        `<button type="button" data-filter="${value}" aria-pressed="${i === 0}">${label}${showCount ? ` <span>${ofType(value).length}</span>` : ''}</button>`,
    )
    .join('');

  const show = (type) => (grid.innerHTML = pick(type).map(projectCard).join(''));
  show('all');

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    filters.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', b === button));
    show(button.dataset.filter);
  });
};

// Homepage: the featured six, or the newest six of the chosen type
const featured = document.querySelector('[data-featured]');
const featuredFilters = featured && featured.parentElement.querySelector('[data-filters]');
if (featured && featuredFilters) {
  setupFilters(featuredFilters, featured, (type) =>
    type === 'all' ? FEATURED.map((id) => PROJECTS.find((p) => p[0] === id)) : ofType(type).slice(0, 6),
  );
}

// Projects page: every project
const grid = document.querySelector('[data-projects]');
const filters = document.querySelector('[data-filters]');
if (grid && filters) {
  setupFilters(filters, grid, ofType, true);
}

// Phone numbers are written as "0986 *** 660"; the real digits sit in the HTML reversed and base64-encoded,
// so neither plain scrapers nor a phone-number pattern search can find them
const phoneFrom = (encoded) => {
  const digits = [...atob(encoded)].reverse().join('');
  return { digits, text: `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}` };
};

const phoneLinks = document.querySelectorAll('[data-phone]');
const phoneCopies = document.querySelectorAll('[data-copy-phone]');

const revealLink = (link) => {
  const { digits, text } = phoneFrom(link.dataset.phone);
  link.textContent = text;
  link.href = `tel:${digits}`;
};

const revealCopy = (button) => {
  button.querySelector('strong').textContent = phoneFrom(button.dataset.copyPhone).text;
  const show = button.parentElement.querySelector('[data-show-phone]');
  if (show) show.hidden = true;
};

// Bots load the page but rarely touch, move a mouse or type, so the number appears on the first
// such interaction; the eye button (and tapping the footer number) reveals it too
const revealOnInteraction = ['pointermove', 'pointerdown', 'touchstart', 'keydown', 'wheel'];
const revealAll = () => {
  phoneLinks.forEach(revealLink);
  phoneCopies.forEach(revealCopy);
  revealOnInteraction.forEach((type) => removeEventListener(type, revealAll));
};
revealOnInteraction.forEach((type) => addEventListener(type, revealAll, { passive: true }));

phoneLinks.forEach((link) =>
  link.addEventListener('click', (event) => {
    if (link.href.startsWith('tel:')) return;
    event.preventDefault();
    revealLink(link);
  }),
);

// Contact lines copy their value; the label briefly reads "Copied"
const copy = async (button, value) => {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    return;
  }
  const label = button.querySelector('small') || button;
  const original = label.dataset.label || label.textContent;
  label.dataset.label = original;
  label.textContent = t.copied;
  button.setAttribute('data-copied', '');
  clearTimeout(button.copyTimer);
  button.copyTimer = setTimeout(() => {
    label.textContent = original;
    button.removeAttribute('data-copied');
  }, 1600);
};

document.querySelectorAll('[data-copy]').forEach((button) =>
  button.addEventListener('click', () => copy(button, button.dataset.copy)),
);

phoneCopies.forEach((button) => {
  button.addEventListener('click', () => copy(button, phoneFrom(button.dataset.copyPhone).text));
  button.parentElement.querySelector('[data-show-phone]')?.addEventListener('click', () => revealCopy(button));
});

document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
