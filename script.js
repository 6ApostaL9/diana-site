const BEHANCE_URL = "https://www.behance.net/d4cc00b0";

const assetSequence = (directory, count) => Array.from(
  { length: count },
  (_, index) => `${directory}/slide-${String(index + 1).padStart(2, "0")}.webp`
);

const product = (label, caseSlug, productIndex, count, color) => ({
  label,
  color,
  images: assetSequence(
    `assets/portfolio/infographic/${caseSlug}/product-${String(productIndex).padStart(2, "0")}`,
    count
  )
});

const caseItems = [
  {
    id: "auto-cosmetics", number: 1, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "Бренд автокосметики",
    intro: "Серия карточек для средств по уходу за автомобилем. Визуальная система объединяет линейку, сохраняя собственные акценты и последовательность подачи каждого товара.",
    description: "Шесть продуктовых серий в единой системе с акцентом на свойствах и сценариях применения.",
    color: "#f1b814", background: "#f2c94c",
    details: [["Формат", "Инфографика для товарной линейки"], ["Работа", "Композиция, ретушь, визуальные акценты"], ["Подача", "От обложки к преимуществам и применению"]],
    products: [
      product("Товар 1", "auto-cosmetics", 1, 8, "#f2be20"), product("Товар 2", "auto-cosmetics", 2, 9, "#e9a51a"),
      product("Товар 3", "auto-cosmetics", 3, 7, "#d7901b"), product("Товар 4", "auto-cosmetics", 4, 8, "#efc543"),
      product("Товар 5", "auto-cosmetics", 5, 9, "#d9a60d"), product("Товар 6", "auto-cosmetics", 6, 7, "#c78e15")
    ]
  },
  {
    id: "auto-components", number: 2, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "Автокомпоненты",
    intro: "Две товарные серии для автокомпонентов. Карточки объясняют совместимость, конструкцию и ключевые характеристики через крупный продуктовый визуал и понятные смысловые блоки.",
    description: "Две серии карточек с ясной подачей совместимости, устройства и характеристик.",
    color: "#6f2a9c", background: "#6f3c95",
    details: [["Формат", "Карточки автокомпонентов"], ["Работа", "Иерархия, ретушь, технические акценты"], ["Подача", "Характеристики без визуальной перегрузки"]],
    products: [product("Товар 1", "auto-components", 1, 9, "#71329c"), product("Товар 2", "auto-components", 2, 9, "#9a397e")]
  },
  {
    id: "bbc", number: 3, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "BBC",
    intro: "Четыре товарные серии бренда BBC. В каждой сохранён общий характер марки, а цвет, окружение и смысловые акценты подстроены под конкретный продукт.",
    description: "Четыре продуктовые серии с единым характером бренда и разными сценариями подачи.",
    color: "#2b8e43", background: "#72b83b",
    details: [["Формат", "Серии для маркетплейсов"], ["Работа", "Обложки, преимущества, инструкции"], ["Подача", "Единый бренд-код для разных продуктов"]],
    products: [product("Товар 1", "bbc", 1, 11, "#3f9b55"), product("Товар 2", "bbc", 2, 18, "#6fac33"), product("Товар 3", "bbc", 3, 13, "#2e8750"), product("Товар 4", "bbc", 4, 11, "#88b83e")]
  },
  {
    id: "poekhali", number: 4, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "Бренд мотохимии „Поехали“",
    intro: "Четыре серии для мотохимии с динамичной визуальной системой. Контрастные акценты, крупный продукт и тематическое окружение поддерживают характер линейки.",
    description: "Динамичная система из четырёх серий для мотохимии и разных сценариев использования.",
    color: "#ef9417", background: "#f1a12a",
    details: [["Формат", "Инфографика мотолинейки"], ["Работа", "Композиция, ретушь, атмосфера серии"], ["Подача", "Функции продукта и условия применения"]],
    products: [product("Товар 1", "poekhali", 1, 12, "#f09b18"), product("Товар 2", "poekhali", 2, 9, "#d56a1d"), product("Товар 3", "poekhali", 3, 13, "#f2b126"), product("Товар 4", "poekhali", 4, 13, "#c86924")]
  },
  {
    id: "hunt", number: 5, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "Hunt",
    intro: "Три продуктовые серии для специализированной линейки. Сдержанная палитра, предметное окружение и крупные тезисы помогают быстро считать назначение каждого средства.",
    description: "Три технические серии с предметным окружением и чёткой смысловой иерархией.",
    color: "#c44b2b", background: "#8c7950",
    details: [["Формат", "Инфографика технических средств"], ["Работа", "Ретушь, окружение, смысловые блоки"], ["Подача", "Назначение и преимущества продукта"]],
    products: [product("Товар 1", "hunt", 1, 13, "#c8492d"), product("Товар 2", "hunt", 2, 13, "#7f704b"), product("Товар 3", "hunt", 3, 9, "#9f5d36")]
  },
  {
    id: "kosmo", number: 6, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "Бренд детейлинга „Космо“",
    intro: "Три серии для детейлинг-линейки „Космо“. Светлое окружение, кислотные цветовые акценты и крупная предметная композиция делают продукты узнаваемыми внутри общей системы.",
    description: "Три серии детейлинг-линейки со светлой композицией и узнаваемыми цветовыми акцентами.",
    color: "#a8c900", background: "#c4dd36",
    details: [["Формат", "Инфографика детейлинг-линейки"], ["Работа", "Композиция, цвет, ретушь продукта"], ["Подача", "Свойства, ароматы и применение"]],
    products: [product("Товар 1", "kosmo", 1, 12, "#b2d400"), product("Товар 2", "kosmo", 2, 9, "#86b22c"), product("Товар 3", "kosmo", 3, 11, "#c1d94b")]
  },
  {
    id: "mixed", number: 7, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "Разные товары",
    intro: "Двенадцать наборов для товаров разных категорий. Для каждого продукта подобраны собственные композиция, цвет и визуальная интонация без неподтверждённых обещаний и лишних деталей.",
    description: "Двенадцать товарных наборов — от канцелярии и товаров для дома до упаковки.",
    color: "#16a45a", background: "#c8ded0",
    details: [["Формат", "Инфографика разных категорий"], ["Работа", "Композиция, ретушь, адаптация стилистики"], ["Подача", "Отдельная визуальная логика для каждого товара"]],
    products: [
      product("Металлическая губка", "mixed", 1, 6, "#16a45a"), product("Перманентные маркеры", "mixed", 2, 4, "#159d42"),
      product("Зубочистки", "mixed", 3, 4, "#e18416"), product("Лаковый маркер", "mixed", 4, 5, "#d5a20d"),
      product("Мешки для мусора", "mixed", 5, 5, "#79a91e"), product("Лезвия Rapira", "mixed", 6, 6, "#9b7663"),
      product("Бумага для заметок", "mixed", 7, 5, "#e27517"), product("Канцелярские зажимы", "mixed", 8, 5, "#d65f10"),
      product("Фасовочные пакеты", "mixed", 9, 4, "#1787a6"), product("Лента ФУМ", "mixed", 10, 4, "#e98d10"),
      product("Раскраска", "mixed", 11, 5, "#e5b900"), product("Губки для посуды", "mixed", 12, 4, "#668a6f")
    ]
  },
  {
    id: "rich-01", number: 8, category: "rich", categoryLabel: "Rich-контент", type: "rich", richIndex: 0,
    title: "Чернитель шин LAVR",
    intro: "Последовательный rich-набор о свойствах глянцевого чернителя шин: продукт, преимущества, применение и визуальные детали собраны в единую историю.",
    description: "Rich-последовательность для глянцевого чернителя шин с акцентом на преимуществах и применении.",
    color: "#d6a312", background: "#d5ad2d",
    details: [["Формат", "Rich-контент"], ["Материал", "7 последовательных модулей"], ["Подача", "Продукт, свойства и применение"]],
    images: assetSequence("assets/portfolio/rich/rich-01", 7)
  },
  {
    id: "rich-02", number: 9, category: "rich", categoryLabel: "Rich-контент", type: "rich", richIndex: 1,
    title: "Очиститель обивки LAVR",
    intro: "Rich-набор для пенного очистителя обивки. Контрастная розовая система помогает последовательно раскрыть назначение, преимущества и комплект продукта.",
    description: "Семь rich-модулей для очистителя обивки в контрастной продуктовой системе.",
    color: "#d71487", background: "#d33693",
    details: [["Формат", "Rich-контент"], ["Материал", "7 последовательных модулей"], ["Подача", "Назначение, свойства и комплект"]],
    images: assetSequence("assets/portfolio/rich/rich-02", 7)
  },
  {
    id: "rich-03", number: 10, category: "rich", categoryLabel: "Rich-контент", type: "rich", richIndex: 2,
    title: "Очиститель кондиционера LAVR",
    intro: "Пять rich-модулей для очистителя кондиционера. Яркий зелёный акцент связывает продукт, аромат и сценарий использования в цельную последовательность.",
    description: "Пять модулей для очистителя кондиционера с ярким цветовым кодом и последовательной подачей.",
    color: "#91b900", background: "#a5c92e",
    details: [["Формат", "Rich-контент"], ["Материал", "5 последовательных модулей"], ["Подача", "Продукт, аромат и применение"]],
    images: assetSequence("assets/portfolio/rich/rich-03", 5)
  },
  {
    id: "rich-04", number: 11, category: "rich", categoryLabel: "Rich-контент", type: "rich", richIndex: 3,
    title: "Автошампунь LAVR",
    intro: "Шесть rich-модулей для автошампуня ручной мойки. Визуальная система раскрывает свойства, способ применения и характер продукта без разрыва между блоками.",
    description: "Шесть rich-модулей для автошампуня с цельной зелёной визуальной системой.",
    color: "#13a927", background: "#47b449",
    details: [["Формат", "Rich-контент"], ["Материал", "6 последовательных модулей"], ["Подача", "Свойства и способ применения"]],
    images: assetSequence("assets/portfolio/rich/rich-04", 6)
  },
  {
    id: "video-covers", number: 12, category: "video", categoryLabel: "Видеообложки", type: "video",
    title: "Видеообложки",
    intro: "Три вертикальные motion-работы для товарных карточек. Видео сохраняют фокус на продукте и адаптированы для просмотра в мобильном интерфейсе.",
    description: "Три реальные motion-обложки для товарных карточек в вертикальном формате.",
    color: "#e24c2d", background: "#252525",
    details: [["Формат", "Вертикальные MP4"], ["Материал", "3 видеообложки"], ["Подача", "Продукт и динамичные визуальные акценты"]],
    videos: [1, 2, 3].map((index) => ({ src: `assets/portfolio/video/video-${String(index).padStart(2, "0")}.mp4`, poster: `assets/portfolio/video/poster-${String(index).padStart(2, "0")}.webp` }))
  },
  {
    id: "media-banners", number: 13, category: "banners", categoryLabel: "Медийные баннеры", type: "banners",
    title: "Медийные баннеры",
    intro: "Серия из десяти медийных баннеров в формате 900 × 450. Каждый сюжет работает как самостоятельный рекламный модуль, сохраняя общую продуктовую направленность.",
    description: "Десять медийных баннеров 900 × 450 для разных продуктовых направлений.",
    color: "#5869d8", background: "#c6ccef",
    details: [["Формат", "Медийные баннеры 900 × 450"], ["Материал", "10 рекламных сюжетов"], ["Подача", "Продукт, предложение и визуальный акцент"]],
    images: Array.from({ length: 10 }, (_, index) => `assets/portfolio/banners/banner-${String(index + 1).padStart(2, "0")}.webp`)
  }
];

const workGrid = document.querySelector("#work-grid");
const dialog = document.querySelector("#case-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogKicker = document.querySelector("#dialog-kicker");
const richCases = caseItems.filter((item) => item.type === "rich");

function renderPreview(item) {
  if (item.type === "video") {
    const firstVideo = item.videos[0];
    return `<div class="work-collage work-collage-video" style="--case-bg: ${item.background}"><video src="${firstVideo.src}" poster="${firstVideo.poster}" muted loop autoplay playsinline preload="metadata" tabindex="-1" aria-hidden="true"></video><span class="motion-badge"><span></span> Motion · 3 видео</span></div>`;
  }
  const images = item.type === "infographic"
    ? [item.products[0].images[0], item.products[0].images[1], item.products[1]?.images[0] || item.products[0].images[2]]
    : item.images.slice(0, 3);
  const count = item.type === "banners" ? "10 баннеров" : item.type === "rich" ? `${item.images.length} модулей` : `${item.products.length} ${item.products.length === 2 ? "товара" : "товаров"}`;
  return `<div class="work-collage work-collage-${item.type}" style="--case-bg: ${item.background}">${images.map((image, index) => `<img class="preview-${index + 1}" src="${image}" alt="" loading="lazy" decoding="async">`).join("")}<span class="preview-count">${count}</span></div>`;
}

function renderCards() {
  workGrid.innerHTML = caseItems.map((item) => `<article class="work-card reveal" data-category="${item.category}"><button class="work-open" type="button" data-case="${item.id}" aria-label="Открыть кейс: ${item.title}">${renderPreview(item)}<div class="work-meta"><div><span>${String(item.number).padStart(2, "0")} · ${item.categoryLabel}</span><h3>${item.title}</h3></div><span class="open-arrow" aria-hidden="true">↗</span></div><p>${item.description}</p></button></article>`).join("");
  workGrid.querySelectorAll("[data-case]").forEach((button) => button.addEventListener("click", () => openCase(button.dataset.case)));
}

function renderProductSwitcher(item, activeIndex) {
  if (item.type !== "infographic" || item.products.length < 2) return "";
  return `<div class="product-switcher" role="group" aria-label="Выбор товара">${item.products.map((entry, index) => `<button class="product-pill${index === activeIndex ? " is-active" : ""}" type="button" data-product="${index}" aria-pressed="${index === activeIndex}" style="--pill-color: ${entry.color}">${entry.label}</button>`).join("")}</div>`;
}

function renderRichNavigation(item) {
  if (item.type !== "rich") return "";
  const index = item.richIndex;
  return `<div class="rich-navigation" aria-label="Навигация между rich-кейсами"><button class="rich-arrow" type="button" data-rich-target="${index - 1}" aria-label="Предыдущий rich-кейс" ${index === 0 ? "disabled" : ""}>←</button><span>${index + 1} / ${richCases.length}</span><button class="rich-arrow" type="button" data-rich-target="${index + 1}" aria-label="Следующий rich-кейс" ${index === richCases.length - 1 ? "disabled" : ""}>→</button></div>`;
}

function renderGallery(item, activeProductIndex) {
  if (item.type === "video") {
    return item.videos.map((video, index) => `<figure class="dialog-video"><video src="${video.src}" poster="${video.poster}" controls muted loop playsinline preload="metadata" aria-label="Видеообложка ${index + 1}"></video><figcaption>Видеообложка ${String(index + 1).padStart(2, "0")}</figcaption></figure>`).join("");
  }
  const images = item.type === "infographic" ? item.products[activeProductIndex].images : item.images;
  return images.map((image, index) => `<img src="${image}" alt="${item.title} — слайд ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async">`).join("");
}

function renderCase(item, activeProductIndex = 0) {
  dialog.style.setProperty("--case-color", item.color);
  dialogKicker.textContent = `Кейс ${String(item.number).padStart(2, "0")} · ${item.categoryLabel}`;
  dialogContent.innerHTML = `<header class="dialog-heading"><h2 id="dialog-title">${item.title}</h2><p class="dialog-intro">${item.intro}</p></header>${renderProductSwitcher(item, activeProductIndex)}${renderRichNavigation(item)}<div class="dialog-details">${item.details.map(([label, text]) => `<div><span>${label}</span><strong>${text}</strong></div>`).join("")}</div><div class="dialog-gallery dialog-gallery-${item.type}">${renderGallery(item, activeProductIndex)}</div><div class="behance-cta"><p>Ознакомиться с кейсом подробнее</p><a class="button button-primary" href="${BEHANCE_URL}" target="_blank" rel="noopener">Смотреть на Behance ↗</a></div>`;
  processTypography(dialogContent);
  dialogContent.querySelectorAll("[data-product]").forEach((button) => button.addEventListener("click", () => renderCase(item, Number(button.dataset.product))));
  dialogContent.querySelectorAll("[data-rich-target]").forEach((button) => button.addEventListener("click", () => {
    const target = richCases[Number(button.dataset.richTarget)];
    if (!target) return;
    renderCase(target);
    dialog.scrollTop = 0;
  }));
}

function openCase(caseId) {
  const item = caseItems.find((entry) => entry.id === caseId);
  if (!item) return;
  renderCase(item);
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog() {
  dialog.querySelectorAll("video").forEach((video) => video.pause());
  dialog.close();
  document.body.classList.remove("dialog-open");
}

document.querySelector(".dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => { if (event.target === dialog) closeDialog(); });
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

const filterButtons = document.querySelectorAll("[data-filter]");
filterButtons.forEach((button) => button.addEventListener("click", () => {
  filterButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  workGrid.querySelectorAll(".work-card").forEach((card) => {
    card.hidden = button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter;
  });
}));

const shortWordPattern = /(^|[\s\u00a0(«„"—–-])(в|во|и|а|но|к|ко|с|со|у|о|об|от|до|за|из|на|по|для|при)\s+(?=[^\s\u00a0])/gi;

function processTypography(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "CODE", "PRE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = node.nodeValue.replace(shortWordPattern, "$1$2\u00a0"); });
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}));
document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !toggle.contains(event.target)) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  elements.forEach((element) => revealObserver.observe(element));
}

renderCards();
processTypography(document.body);
setupReveal();
