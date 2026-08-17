const assetSequence = (directory, count) => Array.from(
  { length: count },
  (_, index) => `${directory}/slide-${String(index + 1).padStart(2, "0")}.webp`
);

const assetImage = (directory, index) => `${directory}/slide-${String(index).padStart(2, "0")}.webp`;
const infographicCover = (caseSlug, selections) => selections.map(
  ([productIndex, slideIndex]) => assetImage(
    `assets/portfolio/infographic/${caseSlug}/product-${String(productIndex).padStart(2, "0")}`,
    slideIndex
  )
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
    coverVariant: "auto-cosmetics",
    coverImages: infographicCover("auto-cosmetics", [[1, 1], [3, 1], [6, 1]]),
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
    coverVariant: "auto-components",
    coverImages: infographicCover("auto-components", [[1, 1], [1, 8], [2, 1]]),
    details: [["Формат", "Карточки автокомпонентов"], ["Работа", "Иерархия, ретушь, технические акценты"], ["Подача", "Характеристики без визуальной перегрузки"]],
    products: [product("Товар 1", "auto-components", 1, 9, "#71329c"), product("Товар 2", "auto-components", 2, 9, "#9a397e")]
  },
  {
    id: "bbc", number: 3, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "BBC",
    intro: "Четыре товарные серии бренда BBC. В каждой сохранён общий характер марки, а цвет, окружение и смысловые акценты подстроены под конкретный продукт.",
    description: "Четыре продуктовые серии с единым характером бренда и разными сценариями подачи.",
    color: "#2b8e43", background: "#72b83b",
    coverVariant: "bbc",
    coverImages: infographicCover("bbc", [[1, 1], [2, 1], [4, 1]]),
    details: [["Формат", "Серии для маркетплейсов"], ["Работа", "Обложки, преимущества, инструкции"], ["Подача", "Единый бренд-код для разных продуктов"]],
    products: [product("Товар 1", "bbc", 1, 11, "#3f9b55"), product("Товар 2", "bbc", 2, 18, "#6fac33"), product("Товар 3", "bbc", 3, 13, "#2e8750"), product("Товар 4", "bbc", 4, 11, "#88b83e")]
  },
  {
    id: "poekhali", number: 4, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "Бренд мотохимии Поехали",
    intro: "Четыре серии для мотохимии с динамичной визуальной системой. Контрастные акценты, крупный продукт и тематическое окружение поддерживают характер линейки.",
    description: "Динамичная система из четырёх серий для мотохимии и разных сценариев использования.",
    color: "#ef9417", background: "#f1a12a",
    coverVariant: "poekhali",
    coverImages: infographicCover("poekhali", [[1, 1], [2, 1], [4, 1]]),
    details: [["Формат", "Инфографика мотолинейки"], ["Работа", "Композиция, ретушь, атмосфера серии"], ["Подача", "Функции продукта и условия применения"]],
    products: [product("Товар 1", "poekhali", 1, 12, "#f09b18"), product("Товар 2", "poekhali", 2, 9, "#d56a1d"), product("Товар 3", "poekhali", 3, 13, "#f2b126"), product("Товар 4", "poekhali", 4, 13, "#c86924")]
  },
  {
    id: "hunt", number: 5, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "Hunt Line",
    intro: "Три продуктовые серии для специализированной линейки. Сдержанная палитра, предметное окружение и крупные тезисы помогают быстро считать назначение каждого средства.",
    description: "Три технические серии с предметным окружением и чёткой смысловой иерархией.",
    color: "#c44b2b", background: "#8c7950",
    coverVariant: "hunt",
    coverImages: infographicCover("hunt", [[1, 1], [2, 1], [3, 1]]),
    details: [["Формат", "Инфографика технических средств"], ["Работа", "Ретушь, окружение, смысловые блоки"], ["Подача", "Назначение и преимущества продукта"]],
    products: [product("Товар 1", "hunt", 1, 13, "#c8492d"), product("Товар 2", "hunt", 2, 13, "#7f704b"), product("Товар 3", "hunt", 3, 9, "#9f5d36")]
  },
  {
    id: "kosmo", number: 6, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "Бренд детейлинга Космо",
    intro: "Три серии для детейлинг-линейки „Космо“. Светлое окружение, кислотные цветовые акценты и крупная предметная композиция делают продукты узнаваемыми внутри общей системы.",
    description: "Три серии детейлинг-линейки со светлой композицией и узнаваемыми цветовыми акцентами.",
    color: "#a8c900", background: "#c4dd36",
    coverVariant: "kosmo",
    coverImages: infographicCover("kosmo", [[1, 1], [2, 1], [3, 1]]),
    details: [["Формат", "Инфографика детейлинг-линейки"], ["Работа", "Композиция, цвет, ретушь продукта"], ["Подача", "Свойства, ароматы и применение"]],
    products: [product("Товар 1", "kosmo", 1, 12, "#b2d400"), product("Товар 2", "kosmo", 2, 9, "#86b22c"), product("Товар 3", "kosmo", 3, 11, "#c1d94b")]
  },
  {
    id: "mixed", number: 7, category: "infographic", categoryLabel: "Инфографика", type: "infographic",
    title: "Разные товары",
    intro: "Двенадцать наборов для товаров разных категорий. Для каждого продукта подобраны собственные композиция, цвет и визуальная интонация без неподтверждённых обещаний и лишних деталей.",
    description: "Двенадцать товарных наборов — от канцелярии и товаров для дома до упаковки.",
    color: "#16a45a", background: "#c8ded0",
    coverVariant: "mixed",
    coverImages: infographicCover("mixed", [[1, 1], [6, 5], [11, 1]]),
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
    coverVariant: "rich-01",
    coverImages: [1, 4, 7].map((index) => assetImage("assets/portfolio/rich/rich-01", index)),
    details: [["Формат", "Rich-контент"], ["Материал", "7 последовательных модулей"], ["Подача", "Продукт, свойства и применение"]],
    images: assetSequence("assets/portfolio/rich/rich-01", 7)
  },
  {
    id: "rich-02", number: 9, category: "rich", categoryLabel: "Rich-контент", type: "rich", richIndex: 1,
    title: "Очиститель обивки LAVR",
    intro: "Rich-набор для пенного очистителя обивки. Контрастная розовая система помогает последовательно раскрыть назначение, преимущества и комплект продукта.",
    description: "Семь rich-модулей для очистителя обивки в контрастной продуктовой системе.",
    color: "#d71487", background: "#d33693",
    coverVariant: "rich-02",
    coverImages: [1, 4, 7].map((index) => assetImage("assets/portfolio/rich/rich-02", index)),
    details: [["Формат", "Rich-контент"], ["Материал", "7 последовательных модулей"], ["Подача", "Назначение, свойства и комплект"]],
    images: assetSequence("assets/portfolio/rich/rich-02", 7)
  },
  {
    id: "rich-03", number: 10, category: "rich", categoryLabel: "Rich-контент", type: "rich", richIndex: 2,
    title: "Очиститель кондиционера LAVR",
    intro: "Пять rich-модулей для очистителя кондиционера. Яркий зелёный акцент связывает продукт, аромат и сценарий использования в цельную последовательность.",
    description: "Пять модулей для очистителя кондиционера с ярким цветовым кодом и последовательной подачей.",
    color: "#91b900", background: "#a5c92e",
    coverVariant: "rich-03",
    coverImages: [1, 3, 5].map((index) => assetImage("assets/portfolio/rich/rich-03", index)),
    details: [["Формат", "Rich-контент"], ["Материал", "5 последовательных модулей"], ["Подача", "Продукт, аромат и применение"]],
    images: assetSequence("assets/portfolio/rich/rich-03", 5)
  },
  {
    id: "rich-04", number: 11, category: "rich", categoryLabel: "Rich-контент", type: "rich", richIndex: 3,
    title: "Автошампунь LAVR",
    intro: "Шесть rich-модулей для автошампуня ручной мойки. Визуальная система раскрывает свойства, способ применения и характер продукта без разрыва между блоками.",
    description: "Шесть rich-модулей для автошампуня с цельной зелёной визуальной системой.",
    color: "#13a927", background: "#47b449",
    coverVariant: "rich-04",
    coverImages: [1, 3, 6].map((index) => assetImage("assets/portfolio/rich/rich-04", index)),
    details: [["Формат", "Rich-контент"], ["Материал", "6 последовательных модулей"], ["Подача", "Свойства и способ применения"]],
    images: assetSequence("assets/portfolio/rich/rich-04", 6)
  },
  {
    id: "video-covers", number: 12, category: "video", categoryLabel: "Видеообложки", type: "video",
    title: "Видеообложки",
    intro: "Три вертикальные motion-работы для товарных карточек. Видео сохраняют фокус на продукте и адаптированы для просмотра в мобильном интерфейсе.",
    description: "Три реальные motion-обложки для товарных карточек в вертикальном формате.",
    color: "#e24c2d", background: "#252525",
    coverVariant: "video-covers",
    coverImages: [
      "assets/portfolio/infographic/hunt/product-03/slide-01.webp",
      "assets/portfolio/video/poster-02.webp",
      "assets/portfolio/infographic/hunt/product-01/slide-01.webp"
    ],
    details: [["Формат", "Вертикальные MP4"], ["Материал", "3 видеообложки"], ["Подача", "Продукт и динамичные визуальные акценты"]],
    videos: [1, 2, 3].map((index) => ({ src: `assets/portfolio/video/video-${String(index).padStart(2, "0")}.mp4`, poster: `assets/portfolio/video/poster-${String(index).padStart(2, "0")}.webp` }))
  },
  {
    id: "media-banners", number: 13, category: "banners", categoryLabel: "Медийные баннеры", type: "banners",
    title: "Медийные баннеры",
    intro: "Серия из десяти медийных баннеров в формате 900 × 450. Каждый сюжет работает как самостоятельный рекламный модуль, сохраняя общую продуктовую направленность.",
    description: "Десять медийных баннеров 900 × 450 для разных продуктовых направлений.",
    color: "#5869d8", background: "#c6ccef",
    coverVariant: "media-banners",
    coverImages: [1, 6, 10].map((index) => `assets/portfolio/banners/banner-${String(index).padStart(2, "0")}.webp`),
    details: [["Формат", "Медийные баннеры 900 × 450"], ["Материал", "10 рекламных сюжетов"], ["Подача", "Продукт, предложение и визуальный акцент"]],
    images: Array.from({ length: 10 }, (_, index) => `assets/portfolio/banners/banner-${String(index + 1).padStart(2, "0")}.webp`)
  }
];

const workGrid = document.querySelector("#work-grid");
const dialog = document.querySelector("#case-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogKicker = document.querySelector("#dialog-kicker");
const richCases = caseItems.filter((item) => item.type === "rich");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

function prefersReducedMotion() {
  return reducedMotion.matches;
}

function pluralizeRussian(number, forms) {
  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return forms[2];
  if (lastDigit === 1) return forms[0];
  if (lastDigit >= 2 && lastDigit <= 4) return forms[1];
  return forms[2];
}

function renderPreview(item) {
  const count = item.type === "video" ? "3 видео" : item.type === "banners" ? "10 баннеров" : item.type === "rich" ? `${item.images.length} модулей` : `${item.products.length} ${pluralizeRussian(item.products.length, ["товар", "товара", "товаров"])}`;
  return `<div class="work-collage work-collage-${item.type} cover-${item.coverVariant}" style="--case-bg: ${item.background}; --cover-accent: ${item.color}"><div class="cover-stage" aria-hidden="true">${item.coverImages.map((image, index) => `<span class="cover-panel cover-panel-${index + 1}"><img src="${image}" alt="" loading="lazy" decoding="async"></span>`).join("")}</div><span class="preview-count">${count}</span></div>`;
}

function renderArrow(direction) {
  const paths = {
    upRight: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>'
  };
  return `<svg class="ui-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[direction]}</svg>`;
}

function renderCards() {
  workGrid.innerHTML = caseItems.map((item) => `<article class="work-card reveal" data-category="${item.category}"><button class="work-open" type="button" data-case="${item.id}" aria-label="Открыть кейс: ${item.title}">${renderPreview(item)}<div class="work-meta"><div><span>${String(item.number).padStart(2, "0")} · ${item.categoryLabel}</span><h3>${item.title}</h3></div><span class="open-arrow" aria-hidden="true">${renderArrow("upRight")}</span></div><p>${item.description}</p></button></article>`).join("");
  workGrid.querySelectorAll("[data-case]").forEach((button) => button.addEventListener("click", () => openCase(button.dataset.case)));
  setupCardTilt();
}

function resetCardTilt(collage) {
  const stage = collage.querySelector(".cover-stage");
  if (!stage) return;
  collage.classList.remove("is-tilting");
  stage.style.setProperty("--tilt-x", "0deg");
  stage.style.setProperty("--tilt-y", "0deg");
  collage.querySelectorAll(".cover-panel").forEach((panel) => {
    panel.style.setProperty("--pointer-x", "0px");
    panel.style.setProperty("--pointer-y", "0px");
  });
}

function setupCardTilt() {
  if (!finePointer.matches) return;

  workGrid.querySelectorAll(".work-collage").forEach((collage) => {
    const stage = collage.querySelector(".cover-stage");
    const panels = Array.from(collage.querySelectorAll(".cover-panel"));
    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paintTilt = () => {
      frameId = 0;
      if (prefersReducedMotion()) {
        resetCardTilt(collage);
        return;
      }

      collage.classList.add("is-tilting");
      stage.style.setProperty("--tilt-x", `${(-pointerY * 1.5).toFixed(2)}deg`);
      stage.style.setProperty("--tilt-y", `${(pointerX * 1.7).toFixed(2)}deg`);
      panels.forEach((panel, index) => {
        const depth = index === 1 ? 4 : 2;
        panel.style.setProperty("--pointer-x", `${(pointerX * depth).toFixed(2)}px`);
        panel.style.setProperty("--pointer-y", `${(pointerY * depth).toFixed(2)}px`);
      });
    };

    const scheduleTilt = () => {
      if (!frameId) frameId = requestAnimationFrame(paintTilt);
    };

    collage.addEventListener("pointermove", (event) => {
      if (prefersReducedMotion()) return;
      const bounds = collage.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
      scheduleTilt();
    });

    collage.addEventListener("pointerleave", () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
      pointerX = 0;
      pointerY = 0;
      resetCardTilt(collage);
    });
  });
}

function renderProductSwitcher(item, activeIndex) {
  if (item.type !== "infographic" || item.products.length < 2) return "";
  return `<div class="case-switcher product-switcher" role="group" aria-label="Выбор товара">${item.products.map((entry, index) => `<button class="case-switcher-pill product-pill${index === activeIndex ? " is-active" : ""}" type="button" data-product="${index}" aria-pressed="${index === activeIndex}">${entry.label}</button>`).join("")}</div>`;
}

function renderRichSwitcher(item) {
  if (item.type !== "rich") return "";
  return `<div class="case-switcher rich-switcher" role="group" aria-label="Выбор Rich-кейса">${richCases.map((entry, index) => `<button class="case-switcher-pill rich-pill${entry === item ? " is-active" : ""}" type="button" data-rich-target="${index}" aria-pressed="${entry === item}">${entry.title}</button>`).join("")}</div>`;
}

function renderGallery(item, activeProductIndex) {
  if (item.type === "video") {
    return item.videos.map((video, index) => `<figure class="dialog-video"><video src="${video.src}" poster="${video.poster}" controls muted loop playsinline preload="metadata" aria-label="Видеообложка ${index + 1}"></video><figcaption>Видеообложка ${String(index + 1).padStart(2, "0")}</figcaption></figure>`).join("");
  }
  const images = item.type === "infographic" ? item.products[activeProductIndex].images : item.images;
  return images.map((image, index) => `<img src="${image}" alt="${item.title} — слайд ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async">`).join("");
}

let dialogOpenTimer = 0;
let dialogCloseTimer = 0;
let contentSwitchTimer = 0;
let contentSwitchToken = 0;
let outgoingContentLayer = null;
const contentSwitchAnimations = new Set();

function cancelContentSwitch() {
  contentSwitchToken += 1;
  clearTimeout(contentSwitchTimer);
  contentSwitchTimer = 0;
  contentSwitchAnimations.forEach((animation) => animation.cancel());
  contentSwitchAnimations.clear();
  outgoingContentLayer?.remove();
  outgoingContentLayer = null;
}

function trackContentAnimation(animation) {
  contentSwitchAnimations.add(animation);
  animation.finished.catch(() => {}).finally(() => contentSwitchAnimations.delete(animation));
}

function renderCase(item, activeProductIndex = 0) {
  dialogKicker.textContent = `Кейс ${String(item.number).padStart(2, "0")} · ${item.categoryLabel}`;
  dialogContent.innerHTML = `<header class="dialog-heading"><h2 id="dialog-title">${item.title}</h2><p class="dialog-intro">${item.intro}</p></header>${renderProductSwitcher(item, activeProductIndex)}${renderRichSwitcher(item)}<div class="dialog-details">${item.details.map(([label, text]) => `<div><span>${label}</span><strong>${text}</strong></div>`).join("")}</div><div class="dialog-gallery dialog-gallery-${item.type}">${renderGallery(item, activeProductIndex)}</div>`;
  processTypography(dialogContent);
  dialogContent.querySelectorAll("[data-product]").forEach((button) => button.addEventListener("click", () => {
    const nextIndex = Number(button.dataset.product);
    if (button.classList.contains("is-active")) return;
    dialogContent.querySelectorAll("[data-product]").forEach((productButton) => {
      const active = productButton === button;
      productButton.classList.toggle("is-active", active);
      productButton.setAttribute("aria-pressed", String(active));
    });
    switchCaseContent(item, nextIndex, false, `[data-product="${nextIndex}"]`);
  }));
  dialogContent.querySelectorAll("[data-rich-target]").forEach((button) => button.addEventListener("click", () => {
    const targetIndex = Number(button.dataset.richTarget);
    const target = richCases[targetIndex];
    if (!target) return;
    if (button.classList.contains("is-active")) return;
    switchCaseContent(target, 0, true, `[data-rich-target="${targetIndex}"]`);
  }));
}

function switchCaseContent(item, activeProductIndex, resetScroll, focusTarget = null) {
  const previousScroll = dialog.scrollTop;
  const dialogShell = dialog.querySelector(".dialog-shell");
  if (prefersReducedMotion() || !dialogShell || typeof dialogContent.animate !== "function") {
    cancelContentSwitch();
    dialog.querySelectorAll("video").forEach((video) => video.pause());
    renderCase(item, activeProductIndex);
    if (focusTarget) dialogContent.querySelector(focusTarget)?.focus({ preventScroll: true });
    dialog.scrollTop = resetScroll ? 0 : previousScroll;
    return;
  }

  cancelContentSwitch();
  const token = ++contentSwitchToken;
  const shellRect = dialogShell.getBoundingClientRect();
  const contentRect = dialogContent.getBoundingClientRect();
  const outgoingLayer = document.createElement("div");
  outgoingLayer.className = "dialog-content dialog-content-transition-layer";
  outgoingLayer.setAttribute("aria-hidden", "true");
  outgoingLayer.setAttribute("inert", "");
  outgoingLayer.style.left = `${contentRect.left - shellRect.left}px`;
  outgoingLayer.style.top = `${contentRect.top - shellRect.top}px`;
  outgoingLayer.style.width = `${contentRect.width}px`;
  while (dialogContent.firstChild) outgoingLayer.appendChild(dialogContent.firstChild);
  outgoingLayer.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
  outgoingLayer.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach((element) => element.setAttribute("tabindex", "-1"));
  outgoingLayer.querySelectorAll("video").forEach((video) => video.pause());
  dialogShell.appendChild(outgoingLayer);
  outgoingContentLayer = outgoingLayer;

  renderCase(item, activeProductIndex);
  if (focusTarget) dialogContent.querySelector(focusTarget)?.focus({ preventScroll: true });
  dialog.scrollTop = resetScroll ? 0 : previousScroll;

  trackContentAnimation(outgoingLayer.animate([
    { opacity: 1, transform: "translateY(0)" },
    { opacity: 0, transform: "translateY(-4px)" }
  ], { duration: 320, easing: "cubic-bezier(.4,0,1,1)", fill: "both" }));
  trackContentAnimation(dialogContent.animate([
    { opacity: 0, transform: "translateY(6px)" },
    { opacity: 1, transform: "translateY(0)" }
  ], { duration: 320, easing: "cubic-bezier(0,0,.2,1)", fill: "both" }));

  contentSwitchTimer = window.setTimeout(() => {
    if (token !== contentSwitchToken) return;
    contentSwitchAnimations.forEach((animation) => animation.cancel());
    contentSwitchAnimations.clear();
    outgoingLayer.remove();
    if (outgoingContentLayer === outgoingLayer) outgoingContentLayer = null;
    contentSwitchTimer = 0;
  }, 370);
}

function openCase(caseId) {
  const item = caseItems.find((entry) => entry.id === caseId);
  if (!item) return;
  cancelContentSwitch();
  renderCase(item);
  clearTimeout(dialogOpenTimer);
  clearTimeout(dialogCloseTimer);
  dialog.classList.remove("is-opening", "is-closing", "is-preparing");
  if (!prefersReducedMotion()) dialog.classList.add("is-preparing");
  dialog.showModal();
  document.body.classList.add("dialog-open");

  if (!prefersReducedMotion()) {
    requestAnimationFrame(() => {
      if (!dialog.open) return;
      dialog.classList.remove("is-preparing");
      dialog.classList.add("is-opening");
      dialogOpenTimer = window.setTimeout(() => dialog.classList.remove("is-opening"), 520);
    });
  }
}

function finishDialogClose() {
  clearTimeout(dialogCloseTimer);
  dialogCloseTimer = 0;
  dialog.classList.remove("is-opening", "is-closing", "is-preparing");
  if (dialog.open) dialog.close();
  document.body.classList.remove("dialog-open");
}

function closeDialog() {
  if (!dialog.open || dialog.classList.contains("is-closing")) return;
  dialog.querySelectorAll("video").forEach((video) => video.pause());
  cancelContentSwitch();
  clearTimeout(dialogOpenTimer);
  dialogOpenTimer = 0;

  if (prefersReducedMotion()) {
    finishDialogClose();
    return;
  }

  dialog.classList.remove("is-opening", "is-preparing");
  dialog.classList.add("is-closing");
  dialogCloseTimer = window.setTimeout(finishDialogClose, 205);
}

document.querySelector(".dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => { if (event.target === dialog) closeDialog(); });
dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialog();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    event.preventDefault();
    closeDialog();
  }
});
dialog.addEventListener("close", () => {
  clearTimeout(dialogOpenTimer);
  clearTimeout(dialogCloseTimer);
  cancelContentSwitch();
  dialog.classList.remove("is-opening", "is-closing", "is-preparing");
  document.body.classList.remove("dialog-open");
});

const filterButtons = document.querySelectorAll("[data-filter]");
let activeFilter = "all";
let renderedFilter = "all";
let filterToken = 0;
let filterCleanupTimer = 0;
const filterAnimations = new Set();

function cardMatchesFilter(card, filter) {
  return filter === "all" || card.dataset.category === filter;
}

function clearFilterCardStyles(card) {
  ["position", "left", "top", "width", "height", "z-index", "pointer-events"].forEach((property) => card.style.removeProperty(property));
  card.classList.remove("is-filter-revealing");
  if (!card.hidden) card.removeAttribute("inert");
}

function clearFilterAnimation() {
  clearTimeout(filterCleanupTimer);
  filterCleanupTimer = 0;
  filterAnimations.forEach((animation) => animation.cancel());
  filterAnimations.clear();
  workGrid.querySelectorAll(".work-card").forEach((card) => {
    card.hidden = !cardMatchesFilter(card, renderedFilter);
    clearFilterCardStyles(card);
  });
}

function applyFilter(filter) {
  workGrid.querySelectorAll(".work-card").forEach((card) => {
    card.hidden = !cardMatchesFilter(card, filter);
    clearFilterCardStyles(card);
  });
  renderedFilter = filter;
}

function trackFilterAnimation(animation) {
  filterAnimations.add(animation);
  animation.finished.catch(() => {}).finally(() => filterAnimations.delete(animation));
}

filterButtons.forEach((button) => button.addEventListener("click", () => {
  const nextFilter = button.dataset.filter;
  filterButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });

  if (nextFilter === activeFilter && nextFilter === renderedFilter && !filterCleanupTimer && filterAnimations.size === 0) return;
  activeFilter = nextFilter;
  const token = ++filterToken;
  clearFilterAnimation();

  const cards = Array.from(workGrid.querySelectorAll(".work-card"));
  if (prefersReducedMotion() || cards.some((card) => typeof card.animate !== "function")) {
    applyFilter(nextFilter);
    return;
  }

  const gridRect = workGrid.getBoundingClientRect();
  const previousRects = new Map();
  const previouslyVisible = cards.filter((card) => !card.hidden);
  previouslyVisible.forEach((card) => previousRects.set(card, card.getBoundingClientRect()));
  const outgoingCards = previouslyVisible.filter((card) => !cardMatchesFilter(card, nextFilter));

  outgoingCards.forEach((card) => {
    const rect = previousRects.get(card);
    card.style.setProperty("position", "absolute");
    card.style.setProperty("left", `${rect.left - gridRect.left}px`);
    card.style.setProperty("top", `${rect.top - gridRect.top}px`);
    card.style.setProperty("width", `${rect.width}px`);
    card.style.setProperty("height", `${rect.height}px`);
    card.style.setProperty("z-index", "2");
    card.style.setProperty("pointer-events", "none");
    card.setAttribute("inert", "");
  });

  const nextCards = cards.filter((card) => cardMatchesFilter(card, nextFilter));
  const newlyRevealedCards = [];
  cards.forEach((card) => {
    if (cardMatchesFilter(card, nextFilter)) {
      card.hidden = false;
      card.removeAttribute("inert");
      if (!card.classList.contains("is-visible")) {
        card.classList.add("is-filter-revealing", "is-visible");
        newlyRevealedCards.push(card);
      }
    } else if (!outgoingCards.includes(card)) {
      card.hidden = true;
    }
  });
  renderedFilter = nextFilter;

  const nextRects = new Map();
  nextCards.forEach((card) => nextRects.set(card, card.getBoundingClientRect()));
  void workGrid.offsetWidth;
  newlyRevealedCards.forEach((card) => card.classList.remove("is-filter-revealing"));

  outgoingCards.forEach((card) => {
    if (!card.classList.contains("is-visible")) return;
    trackFilterAnimation(card.animate([
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-4px)" }
    ], { duration: 320, easing: "cubic-bezier(.4,0,1,1)", fill: "both" }));
  });

  nextCards.forEach((card, index) => {
    if (!card.classList.contains("is-visible")) return;
    const previousRect = previousRects.get(card);
    const nextRect = nextRects.get(card);
    const wasInViewport = previousRect && previousRect.bottom > 0 && previousRect.top < window.innerHeight;
    if (wasInViewport) {
      const deltaX = previousRect.left - nextRect.left;
      const deltaY = previousRect.top - nextRect.top;
      if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;
      trackFilterAnimation(card.animate([
        { transform: `translate3d(${deltaX}px, ${deltaY}px, 0)` },
        { transform: "translate3d(0, 0, 0)" }
      ], { duration: 340, easing: "cubic-bezier(.22,.75,.22,1)", fill: "both" }));
      return;
    }

    trackFilterAnimation(card.animate([
      { opacity: 0, transform: "translateY(6px)" },
      { opacity: 1, transform: "translateY(0)" }
    ], { duration: 320, delay: Math.min(index * 8, 24), easing: "cubic-bezier(0,0,.2,1)", fill: "both" }));
  });

  filterCleanupTimer = window.setTimeout(() => {
    if (token !== filterToken) return;
    filterAnimations.forEach((animation) => animation.cancel());
    filterAnimations.clear();
    cards.forEach((card) => {
      card.hidden = !cardMatchesFilter(card, nextFilter);
      clearFilterCardStyles(card);
    });
    filterCleanupTimer = 0;
  }, 370);
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
  [".statement-grid", ".section-head", ".work-grid", ".capability-grid", ".timeline", ".contact-cards"].forEach((selector) => {
    document.querySelectorAll(selector).forEach((group) => {
      Array.from(group.children).filter((child) => child.classList.contains("reveal")).forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index * 65, 300)}ms`);
      });
    });
  });

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
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
  }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
  elements.forEach((element) => revealObserver.observe(element));
}

function handleReducedMotionChange() {
  if (!prefersReducedMotion()) return;
  workGrid.querySelectorAll(".work-collage").forEach(resetCardTilt);
  clearFilterAnimation();
  applyFilter(activeFilter);
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  if (dialog.classList.contains("is-closing")) finishDialogClose();
  if (dialog.open) dialog.classList.remove("is-opening", "is-preparing");
}

if (typeof reducedMotion.addEventListener === "function") reducedMotion.addEventListener("change", handleReducedMotionChange);
else if (typeof reducedMotion.addListener === "function") reducedMotion.addListener(handleReducedMotionChange);

renderCards();
processTypography(document.body);
setupReveal();
