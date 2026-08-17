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
let portfolioCards = [];
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
    upRight: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    left: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
    right: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'
  };
  return `<svg class="ui-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[direction]}</svg>`;
}

function prepareImageSource(source) {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;
    const timeout = window.setTimeout(finish, 2500);

    function finish() {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      image.onload = null;
      image.onerror = null;
      resolve();
    }

    function decodeAndFinish() {
      if (typeof image.decode !== "function") {
        finish();
        return;
      }
      image.decode().catch(() => {}).finally(finish);
    }

    image.decoding = "async";
    image.onload = decodeAndFinish;
    image.onerror = finish;
    image.src = source;
    if (image.complete) queueMicrotask(image.naturalWidth ? decodeAndFinish : finish);
  });
}

function prepareImages(sources) {
  return Promise.all(Array.from(new Set(sources)).map(prepareImageSource));
}

function renderCards() {
  workGrid.innerHTML = caseItems.map((item) => `<article class="work-card reveal" data-category="${item.category}"><button class="work-open" type="button" data-case="${item.id}" aria-label="Открыть кейс: ${item.title}">${renderPreview(item)}<div class="work-meta"><div><span>${String(item.number).padStart(2, "0")} · ${item.categoryLabel}</span><h3>${item.title}</h3></div><span class="open-arrow" aria-hidden="true">${renderArrow("upRight")}</span></div><p>${item.description}</p></button></article>`).join("");
  portfolioCards = Array.from(workGrid.children);
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

function createCaseState(item) {
  if (item.type === "infographic") {
    return { type: "product", rootItem: item, variants: item.products, index: 0 };
  }
  if (item.type === "rich") {
    return { type: "rich", rootItem: item, variants: richCases, index: item.richIndex ?? richCases.indexOf(item) };
  }
  return { type: "single", rootItem: item, variants: [item], index: 0 };
}

function getCaseVariantView(state, index = state.index) {
  if (state.type === "product") {
    const variant = state.variants[index];
    const item = state.rootItem;
    return {
      item,
      index,
      title: variant.title ?? item.title,
      intro: variant.intro ?? variant.description ?? item.intro,
      details: variant.details ?? item.details,
      images: variant.images,
      videos: null,
      galleryType: item.type,
      number: variant.number ?? item.number,
      categoryLabel: variant.categoryLabel ?? item.categoryLabel
    };
  }

  const item = state.type === "rich" ? state.variants[index] : state.rootItem;
  return {
    item,
    index,
    title: item.title,
    intro: item.intro,
    details: item.details,
    images: item.images ?? [],
    videos: item.videos ?? null,
    galleryType: item.type,
    number: item.number,
    categoryLabel: item.categoryLabel
  };
}

function renderVariantGallery(view) {
  if (view.videos) {
    return view.videos.map((video, index) => `<figure class="dialog-video"><video src="${video.src}" poster="${video.poster}" controls muted loop playsinline preload="metadata" aria-label="Видеообложка ${index + 1}"></video><figcaption>Видеообложка ${String(index + 1).padStart(2, "0")}</figcaption></figure>`).join("");
  }
  return view.images.map((image, index) => `<img src="${image}" alt="${view.title} — слайд ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async">`).join("");
}

function renderCaseVariant(view, titleId = "dialog-title") {
  return `<header class="dialog-heading"><h2 id="${titleId}">${view.title}</h2><p class="dialog-intro">${view.intro}</p></header><div class="dialog-details">${view.details.map(([label, text]) => `<div><span>${label}</span><strong>${text}</strong></div>`).join("")}</div><div class="dialog-gallery dialog-gallery-${view.galleryType}">${renderVariantGallery(view)}</div>`;
}

function renderCaseNavigation(state) {
  if (state.variants.length < 2) return "";
  const itemName = state.type === "product" ? "товар" : "Rich-кейс";
  return `<div class="case-variant-navigation" role="group" aria-label="Навигация между вариантами"><button class="case-variant-arrow" type="button" data-case-step="-1" aria-label="Предыдущий ${itemName}">${renderArrow("left")}</button><span class="case-variant-label" aria-live="polite"></span><button class="case-variant-arrow" type="button" data-case-step="1" aria-label="Следующий ${itemName}">${renderArrow("right")}</button></div>`;
}

let dialogOpenTimer = 0;
let dialogCloseTimer = 0;
let currentCaseState = null;
let caseSwitchToken = 0;
let caseSwitching = false;
const caseSwitchAnimations = new Set();

function updateCaseNavigation() {
  const navigation = dialogContent.querySelector(".case-variant-navigation");
  if (!navigation || !currentCaseState) return;
  const { index, variants, type } = currentCaseState;
  const focusedStep = document.activeElement?.dataset.caseStep;
  const previousButton = navigation.querySelector('[data-case-step="-1"]');
  const nextButton = navigation.querySelector('[data-case-step="1"]');
  previousButton.disabled = index === 0;
  nextButton.disabled = index === variants.length - 1;
  navigation.querySelector(".case-variant-label").textContent = type === "product"
    ? `Товар ${index + 1} из ${variants.length}`
    : `Rich-кейс ${index + 1} из ${variants.length}`;
  if (focusedStep === "-1" && previousButton.disabled) nextButton.focus({ preventScroll: true });
  if (focusedStep === "1" && nextButton.disabled) previousButton.focus({ preventScroll: true });
}

function applyCaseVariant(index) {
  if (!currentCaseState) return null;
  currentCaseState.index = index;
  const view = getCaseVariantView(currentCaseState, index);
  dialogKicker.textContent = `Кейс ${String(view.number).padStart(2, "0")} · ${view.categoryLabel}`;
  const variableContent = dialogContent.querySelector(".case-variant-content");
  variableContent.innerHTML = renderCaseVariant(view);
  processTypography(variableContent);
  updateCaseNavigation();
  return view;
}

function cancelContentSwitch() {
  caseSwitchToken += 1;
  caseSwitchAnimations.forEach((animation) => animation.cancel());
  caseSwitchAnimations.clear();
  caseSwitching = false;
  const track = dialogContent.querySelector(".case-variant-track");
  track?.querySelectorAll(".case-variant-content.is-pending").forEach((content) => content.remove());
  track?.style.removeProperty("transform");
  track?.style.removeProperty("will-change");
}

function trackCaseSwitchAnimation(animation) {
  caseSwitchAnimations.add(animation);
  animation.finished.catch(() => {}).finally(() => caseSwitchAnimations.delete(animation));
  return animation;
}

function renderCase(item) {
  currentCaseState = createCaseState(item);
  dialogContent.innerHTML = `${renderCaseNavigation(currentCaseState)}<div class="case-variant-viewport"><div class="case-variant-track"><div class="case-variant-content"></div></div></div>`;
  applyCaseVariant(currentCaseState.index);
  dialogContent.querySelectorAll("[data-case-step]").forEach((button) => button.addEventListener("click", () => {
    if (caseSwitching || !currentCaseState) return;
    const direction = Number(button.dataset.caseStep);
    const nextIndex = currentCaseState.index + direction;
    if (nextIndex < 0 || nextIndex >= currentCaseState.variants.length) return;
    switchCaseVariant(nextIndex, direction);
  }));
}

async function switchCaseVariant(nextIndex, direction) {
  if (!currentCaseState || caseSwitching) return;
  caseSwitching = true;
  clearTimeout(dialogOpenTimer);
  dialogOpenTimer = 0;
  dialog.classList.remove("is-opening", "is-preparing");
  const token = ++caseSwitchToken;
  const nextView = getCaseVariantView(currentCaseState, nextIndex);
  await prepareImages(nextView.images);
  if (token !== caseSwitchToken || !dialog.open) return;

  const track = dialogContent.querySelector(".case-variant-track");
  const variableContent = track?.querySelector(".case-variant-content");
  if (!track || !variableContent) return;
  const previousScroll = dialog.scrollTop;

  if (prefersReducedMotion() || typeof track.animate !== "function") {
    dialog.querySelectorAll("video").forEach((video) => video.pause());
    applyCaseVariant(nextIndex);
    dialog.scrollTop = Math.min(previousScroll, Math.max(0, dialog.scrollHeight - dialog.clientHeight));
    caseSwitching = false;
    return;
  }

  const nextContent = document.createElement("div");
  nextContent.className = "case-variant-content is-pending";
  nextContent.setAttribute("aria-hidden", "true");
  nextContent.setAttribute("inert", "");
  nextContent.innerHTML = renderCaseVariant(nextView, "dialog-title-next");
  processTypography(nextContent);
  if (direction > 0) track.appendChild(nextContent);
  else track.insertBefore(nextContent, variableContent);
  track.style.setProperty("will-change", "transform");

  const startPosition = direction > 0 ? "translate3d(0,0,0)" : "translate3d(-100%,0,0)";
  const endPosition = direction > 0 ? "translate3d(-100%,0,0)" : "translate3d(0,0,0)";
  const slideAnimation = trackCaseSwitchAnimation(track.animate([
    { transform: startPosition },
    { transform: endPosition }
  ], { duration: 420, easing: "cubic-bezier(.22,.72,.22,1)", fill: "forwards" }));
  await slideAnimation.finished.catch(() => {});
  if (token !== caseSwitchToken || !dialog.open) return;

  slideAnimation.cancel();
  dialog.querySelectorAll("video").forEach((video) => video.pause());
  track.replaceChildren(nextContent);
  nextContent.classList.remove("is-pending");
  nextContent.removeAttribute("aria-hidden");
  nextContent.removeAttribute("inert");
  nextContent.querySelector("#dialog-title-next")?.setAttribute("id", "dialog-title");
  track.style.removeProperty("will-change");
  track.style.removeProperty("transform");
  currentCaseState.index = nextIndex;
  dialogKicker.textContent = `Кейс ${String(nextView.number).padStart(2, "0")} · ${nextView.categoryLabel}`;
  updateCaseNavigation();
  dialog.scrollTop = Math.min(previousScroll, Math.max(0, dialog.scrollHeight - dialog.clientHeight));
  caseSwitching = false;
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
  currentCaseState = null;
  dialog.classList.remove("is-opening", "is-closing", "is-preparing");
  document.body.classList.remove("dialog-open");
});

const filterButtons = document.querySelectorAll("[data-filter]");
let activeFilter = "all";
let filterToken = 0;
const filterTransitionAnimations = new Set();
let filterTransitionLayers = [];
let filterCleanupFrame = 0;

function cardMatchesFilter(card, filter) {
  return filter === "all" || card.dataset.category === filter;
}

function getPortfolioCards() {
  return portfolioCards;
}

function clearFilterTransition() {
  filterTransitionAnimations.forEach((animation) => animation.cancel());
  filterTransitionAnimations.clear();
  cancelAnimationFrame(filterCleanupFrame);
  filterCleanupFrame = 0;
  filterTransitionLayers.forEach((layer) => layer.remove());
  filterTransitionLayers = [];
  getPortfolioCards().forEach((card) => card.style.removeProperty("visibility"));
  workGrid.classList.remove("is-filter-transitioning");
  workGrid.style.removeProperty("min-height");
}

function applyFilter(filter) {
  const insertionPoint = filterTransitionLayers.find((layer) => layer.parentElement === workGrid) ?? null;
  Array.from(workGrid.children).filter((element) => element.classList.contains("work-card")).forEach((card) => card.remove());
  getPortfolioCards().filter((card) => cardMatchesFilter(card, filter)).forEach((card) => {
    card.hidden = false;
    card.classList.add("is-visible");
    workGrid.insertBefore(card, insertionPoint);
  });
}

function createFilterTransitionLayer(cards, className) {
  const layer = document.createElement("div");
  layer.className = `work-grid work-grid-transition-layer ${className}`;
  layer.setAttribute("aria-hidden", "true");
  layer.setAttribute("inert", "");
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.hidden = false;
    clone.classList.add("is-visible");
    clone.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
    clone.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach((element) => element.setAttribute("tabindex", "-1"));
    clone.querySelectorAll("img").forEach((image) => { image.loading = "eager"; });
    layer.appendChild(clone);
  });
  return layer;
}

filterButtons.forEach((button, buttonIndex) => button.addEventListener("click", async () => {
  const nextFilter = button.dataset.filter;
  if (nextFilter === activeFilter) return;
  const currentButtonIndex = Array.from(filterButtons).findIndex((item) => item.dataset.filter === activeFilter);
  const direction = buttonIndex > currentButtonIndex ? 1 : -1;
  activeFilter = nextFilter;
  filterButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });

  const token = ++filterToken;
  clearFilterTransition();

  const cards = getPortfolioCards();
  const nextCards = cards.filter((card) => cardMatchesFilter(card, nextFilter));
  await prepareImages(nextCards.flatMap((card) => Array.from(card.querySelectorAll("img"), (image) => image.currentSrc || image.src)));
  if (token !== filterToken) return;

  if (prefersReducedMotion() || typeof workGrid.animate !== "function") {
    applyFilter(nextFilter);
    return;
  }

  const currentCards = Array.from(workGrid.children).filter((element) => element.classList.contains("work-card"));
  const oldLayer = createFilterTransitionLayer(currentCards, "is-leaving");
  const nextLayer = createFilterTransitionLayer(nextCards, "is-entering");
  oldLayer.style.visibility = "hidden";
  nextLayer.style.visibility = "hidden";
  workGrid.append(oldLayer, nextLayer);
  const oldHeight = Math.ceil(workGrid.getBoundingClientRect().height);
  const newHeight = Math.ceil(nextLayer.getBoundingClientRect().height);
  const stableHeight = Math.max(oldHeight, newHeight);
  workGrid.style.setProperty("min-height", `${stableHeight}px`);
  oldLayer.style.setProperty("min-height", `${stableHeight}px`);
  nextLayer.style.setProperty("min-height", `${stableHeight}px`);
  currentCards.forEach((card) => card.style.setProperty("visibility", "hidden"));
  workGrid.classList.add("is-filter-transitioning");
  oldLayer.style.removeProperty("visibility");
  nextLayer.style.removeProperty("visibility");
  filterTransitionLayers = [oldLayer, nextLayer];

  const animationOptions = { duration: 460, easing: "cubic-bezier(.22,.72,.22,1)", fill: "both" };
  const oldAnimation = oldLayer.animate([
    { transform: "translate3d(0,0,0)" },
    { transform: `translate3d(${-direction * 100}%,0,0)` }
  ], animationOptions);
  const nextAnimation = nextLayer.animate([
    { transform: `translate3d(${direction * 100}%,0,0)` },
    { transform: "translate3d(0,0,0)" }
  ], animationOptions);
  filterTransitionAnimations.add(oldAnimation);
  filterTransitionAnimations.add(nextAnimation);
  await Promise.all([oldAnimation.finished.catch(() => {}), nextAnimation.finished.catch(() => {})]);
  if (token !== filterToken) return;

  applyFilter(nextFilter);
  filterCleanupFrame = requestAnimationFrame(() => {
    if (token !== filterToken) return;
    clearFilterTransition();
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
  filterToken += 1;
  clearFilterTransition();
  applyFilter(activeFilter);
  cancelContentSwitch();
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  if (dialog.classList.contains("is-closing")) finishDialogClose();
  if (dialog.open) dialog.classList.remove("is-opening", "is-preparing");
}

if (typeof reducedMotion.addEventListener === "function") reducedMotion.addEventListener("change", handleReducedMotionChange);
else if (typeof reducedMotion.addListener === "function") reducedMotion.addListener(handleReducedMotionChange);

renderCards();
processTypography(document.body);
setupReveal();
