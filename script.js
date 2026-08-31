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

function pluralizeRussian(number, forms) {
  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return forms[2];
  if (lastDigit === 1) return forms[0];
  if (lastDigit >= 2 && lastDigit <= 4) return forms[1];
  return forms[2];
}

const aiCase = (caseIndex, resultCount, hasSource = true, sourceAspectRatio = .75) => {
  const caseNumber = String(caseIndex).padStart(2, "0");
  const directory = `assets/portfolio/ai/ai-${caseNumber}`;
  const resultLabel = `${resultCount} ${pluralizeRussian(resultCount, ["готовая работа", "готовые работы", "готовых работ"])}`;
  const coverIndexes = resultCount === 2 ? [1, 2] : [1, Math.ceil(resultCount / 2), resultCount];
  const media = [
    ...(hasSource ? [{ src: `${directory}/source.webp`, isSource: true, aspectRatio: sourceAspectRatio }] : []),
    ...assetSequence(directory, resultCount).map((src) => ({ src, isSource: false }))
  ];

  return {
    id: `ai-${caseNumber}`, number: 13 + caseIndex, category: "ai", categoryLabel: "AI-контент", type: "ai",
    title: `AI-контент ${caseNumber}`,
    intro: hasSource
      ? `Исходное изображение и ${resultLabel} собраны в одну последовательную галерею.`
      : `${resultLabel} собраны в одну последовательную галерею.`,
    description: hasSource
      ? `Исходник и ${resultLabel} в последовательной галерее AI-контента.`
      : `${resultLabel} в последовательной галерее AI-контента.`,
    color: "#9d87f5", background: "#24232b",
    coverVariant: "ai",
    coverImages: coverIndexes.map((index) => assetImage(directory, index)),
    details: [["Формат", "AI-контент"], ["Материал", hasSource ? `Исходник и ${resultLabel}` : resultLabel], ["Подача", "Последовательная галерея"]],
    hasSource,
    resultCount,
    media
  };
};

const aiCases = [
  aiCase(1, 3),
  aiCase(2, 5),
  aiCase(3, 3),
  aiCase(4, 5, false),
  aiCase(5, 3, true, 1),
  aiCase(6, 2),
  aiCase(7, 2),
  aiCase(8, 2),
  aiCase(9, 4),
  aiCase(10, 2),
  aiCase(11, 4)
];

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
  },
  ...aiCases
];

const workGrid = document.querySelector("#work-grid");
const dialog = document.querySelector("#case-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogKicker = document.querySelector("#dialog-kicker");
let portfolioCards = [];
const richCases = caseItems.filter((item) => item.type === "rich");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const imagePreparationTasks = new Map();
const preparedImageSources = new Set();
const criticalImagePreparationQueue = [];
const backgroundImagePreparationQueue = [];
const imagePreparationLimit = 2;
let activeImagePreparations = 0;
let activeBackgroundImagePreparations = 0;
let portfolioInitialized = false;
let revealObserver = null;
let dialogGalleryObserver = null;
let dialogGalleryPriorityFrame = 0;
let cardCoverObserver = null;
let activeTiltBoundsUpdate = null;
const cardCoverTasks = new Map();
const criticalCardCoverQueue = [];
const backgroundCardCoverQueue = [];
const cardCoverHydrationLimit = 2;
let activeCardCoverHydrations = 0;
let activeBackgroundCardCoverHydrations = 0;

function prefersReducedMotion() {
  return reducedMotion.matches;
}

function previewImageSource(source) {
  return source.replace("assets/portfolio/", "assets/portfolio/covers/");
}

function renderPreview(item) {
  let count = `${item.products?.length ?? 0} ${pluralizeRussian(item.products?.length ?? 0, ["товар", "товара", "товаров"])}`;
  if (item.type === "video") count = "3 видео";
  if (item.type === "banners") count = "10 баннеров";
  if (item.type === "rich") count = `${item.images.length} модулей`;
  if (item.type === "ai") count = `${item.resultCount} ${pluralizeRussian(item.resultCount, ["работа", "работы", "работ"])}`;
  const height = item.type === "banners" ? 450 : 1200;
  return `<div class="work-collage work-collage-${item.type} cover-${item.coverVariant}" style="--case-bg: ${item.background}; --cover-accent: ${item.color}"><div class="cover-stage" aria-hidden="true">${item.coverImages.map((image, index) => `<span class="cover-panel cover-panel-${index + 1}"><span class="cover-image-placeholder" data-src="${previewImageSource(image)}" data-width="900" data-height="${height}"></span></span>`).join("")}</div><span class="preview-count">${count}</span></div>`;
}

function renderArrow(direction) {
  const paths = {
    upRight: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    left: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
    right: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'
  };
  return `<svg class="ui-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[direction]}</svg>`;
}

function prepareImageSource(source, { priority = "background" } = {}) {
  if (!source) return Promise.resolve();
  const existingTask = imagePreparationTasks.get(source);
  if (existingTask) {
    if (priority === "critical" && !existingTask.started && existingTask.priority !== "critical") {
      const index = backgroundImagePreparationQueue.indexOf(existingTask);
      if (index >= 0) backgroundImagePreparationQueue.splice(index, 1);
      existingTask.priority = "critical";
      criticalImagePreparationQueue.unshift(existingTask);
      runImagePreparationQueue();
    }
    return existingTask.promise;
  }

  let resolvePreparation;
  const preparation = new Promise((resolve) => { resolvePreparation = resolve; });
  const task = { source, resolve: resolvePreparation, promise: preparation, priority, started: false };
  imagePreparationTasks.set(source, task);
  (priority === "critical" ? criticalImagePreparationQueue : backgroundImagePreparationQueue).push(task);
  runImagePreparationQueue();
  return preparation;
}

function runImagePreparationQueue() {
  while (activeImagePreparations < imagePreparationLimit) {
    const task = criticalImagePreparationQueue.shift()
      ?? (activeBackgroundImagePreparations < 1 ? backgroundImagePreparationQueue.shift() : null);
    if (!task) break;
    const { source, resolve, priority } = task;
    task.started = true;
    activeImagePreparations += 1;
    if (priority === "background") activeBackgroundImagePreparations += 1;
    const image = new Image();
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      image.onload = null;
      image.onerror = null;
      preparedImageSources.add(source);
      activeImagePreparations -= 1;
      if (priority === "background") activeBackgroundImagePreparations -= 1;
      resolve();
      runImagePreparationQueue();
    };
    const decodeAndFinish = () => {
      if (typeof image.decode !== "function") return finish();
      image.decode().catch(() => {}).finally(finish);
    };
    image.decoding = "async";
    image.onload = decodeAndFinish;
    image.onerror = finish;
    image.src = source;
    if (image.complete) queueMicrotask(image.naturalWidth ? decodeAndFinish : finish);
  }
}

function renderCards(filter = activeFilter, shouldReveal = true) {
  const visibleItems = caseItems.filter((item) => filter === "all" || item.category === filter);
  workGrid.innerHTML = visibleItems.map((item) => `<article class="work-card reveal${shouldReveal ? "" : " is-visible"}" data-category="${item.category}"><button class="work-open" type="button" data-case="${item.id}" aria-label="Открыть кейс: ${item.title}">${renderPreview(item)}<div class="work-meta"><div><span>${String(item.number).padStart(2, "0")} · ${item.categoryLabel}</span><h3>${item.title}</h3></div><span class="open-arrow" aria-hidden="true">${renderArrow("upRight")}</span></div><p>${item.description}</p></button></article>`).join("");
  portfolioCards = Array.from(workGrid.children);
  processTypography(workGrid);
  if (shouldReveal) observeReveals(portfolioCards);
  setupCardImageLoading();
  setupCardTilt();
}

workGrid.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("[data-case]");
  if (!button || !workGrid.contains(button)) return;
  openCase(button.dataset.case);
});

function queueCardCoverHydration(card, priority = "background") {
  const existingTask = cardCoverTasks.get(card);
  if (existingTask) {
    if (priority === "critical" && !existingTask.started && existingTask.priority !== "critical") {
      const index = backgroundCardCoverQueue.indexOf(existingTask);
      if (index >= 0) backgroundCardCoverQueue.splice(index, 1);
      existingTask.priority = "critical";
      criticalCardCoverQueue.unshift(existingTask);
      runCardCoverHydrationQueue();
    }
    if (priority === "critical" && existingTask.started) {
      card.querySelectorAll(".cover-panel img").forEach((image) => { image.fetchPriority = "high"; });
    }
    return;
  }
  const task = { card, priority, started: false };
  cardCoverTasks.set(card, task);
  (priority === "critical" ? criticalCardCoverQueue : backgroundCardCoverQueue).push(task);
  runCardCoverHydrationQueue();
}

function runCardCoverHydrationQueue() {
  while (activeCardCoverHydrations < cardCoverHydrationLimit) {
    const task = criticalCardCoverQueue.shift()
      ?? (activeBackgroundCardCoverHydrations < 1 ? backgroundCardCoverQueue.shift() : null);
    if (!task) break;
    const { card, priority } = task;
    if (!card.isConnected) {
      cardCoverTasks.delete(card);
      continue;
    }
    task.started = true;
    activeCardCoverHydrations += 1;
    if (priority === "background") activeBackgroundCardCoverHydrations += 1;
    const placeholders = Array.from(card.querySelectorAll(".cover-image-placeholder"));
    let remaining = placeholders.length;
    const settle = () => {
      remaining -= 1;
      if (remaining > 0) return;
      card.dataset.coversReady = "true";
      cardCoverTasks.delete(card);
      activeCardCoverHydrations -= 1;
      if (priority === "background") activeBackgroundCardCoverHydrations -= 1;
      runCardCoverHydrationQueue();
    };
    if (!remaining) {
      card.dataset.coversReady = "true";
      cardCoverTasks.delete(card);
      activeCardCoverHydrations -= 1;
      if (priority === "background") activeBackgroundCardCoverHydrations -= 1;
      runCardCoverHydrationQueue();
      continue;
    }
    placeholders.forEach((placeholder) => {
      const image = document.createElement("img");
      image.src = placeholder.dataset.src;
      image.alt = "";
      image.width = Number(placeholder.dataset.width);
      image.height = Number(placeholder.dataset.height);
      image.loading = "eager";
      image.fetchPriority = priority === "critical" ? "high" : "low";
      image.decoding = "async";
      let imageSettled = false;
      const settleImage = () => {
        if (imageSettled) return;
        imageSettled = true;
        settle();
      };
      const finish = () => image.decode().catch(() => {}).finally(settleImage);
      image.addEventListener("load", finish, { once: true });
      image.addEventListener("error", settleImage, { once: true });
      placeholder.replaceWith(image);
      if (image.complete) queueMicrotask(finish);
    });
  }
}

function setupCardImageLoading() {
  cardCoverObserver?.disconnect();
  cardCoverObserver = null;
  if (!("IntersectionObserver" in window)) {
    portfolioCards.forEach((card) => queueCardCoverHydration(card, "critical"));
    return;
  }
  cardCoverObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      cardCoverObserver.unobserve(entry.target);
      const visible = entry.boundingClientRect.bottom > 0 && entry.boundingClientRect.top < window.innerHeight;
      queueCardCoverHydration(entry.target, visible ? "critical" : "background");
    });
  }, { rootMargin: "200% 0px", threshold: 0 });
  portfolioCards.forEach((card) => cardCoverObserver.observe(card));
}

function resetCardTilt(collage) {
  const stage = collage.querySelector(".cover-stage");
  if (!stage) return;
  collage.classList.remove("is-tilting");
  stage.style.setProperty("--tilt-x", "0deg");
  stage.style.setProperty("--tilt-y", "0deg");
}

function setupCardTilt() {
  if (!finePointer.matches) return;

  workGrid.querySelectorAll(".work-collage").forEach((collage) => {
    const stage = collage.querySelector(".cover-stage");
    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;
    let bounds = null;

    const paintTilt = () => {
      frameId = 0;
      if (prefersReducedMotion()) {
        resetCardTilt(collage);
        return;
      }

      collage.classList.add("is-tilting");
      stage.style.setProperty("--tilt-x", `${(-pointerY * 1.5).toFixed(2)}deg`);
      stage.style.setProperty("--tilt-y", `${(pointerX * 1.7).toFixed(2)}deg`);
    };

    const scheduleTilt = () => {
      if (!frameId) frameId = requestAnimationFrame(paintTilt);
    };

    const updateBounds = () => { bounds = collage.getBoundingClientRect(); };
    collage.addEventListener("pointerenter", () => {
      updateBounds();
      activeTiltBoundsUpdate = updateBounds;
    });
    collage.addEventListener("pointermove", (event) => {
      if (prefersReducedMotion()) return;
      if (!bounds) updateBounds();
      pointerX = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
      scheduleTilt();
    });

    collage.addEventListener("pointerleave", () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
      pointerX = 0;
      pointerY = 0;
      bounds = null;
      if (activeTiltBoundsUpdate === updateBounds) activeTiltBoundsUpdate = null;
      resetCardTilt(collage);
    });
    collage.addEventListener("pointercancel", () => {
      if (activeTiltBoundsUpdate === updateBounds) activeTiltBoundsUpdate = null;
      resetCardTilt(collage);
    });
  });
}

window.addEventListener("resize", () => activeTiltBoundsUpdate?.(), { passive: true });

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
    const media = variant.media ?? variant.images.map((src) => ({ src, isSource: false }));
    return {
      item,
      index,
      title: variant.title ?? item.title,
      intro: variant.intro ?? variant.description ?? item.intro,
      details: variant.details ?? item.details,
      images: media.map((mediaItem) => mediaItem.src),
      media,
      videos: null,
      galleryType: item.type,
      number: variant.number ?? item.number,
      categoryLabel: variant.categoryLabel ?? item.categoryLabel
    };
  }

  const item = state.type === "rich" ? state.variants[index] : state.rootItem;
  const media = item.media ?? (item.images ?? []).map((src) => ({ src, isSource: false }));
  return {
    item,
    index,
    title: item.title,
    intro: item.intro,
    details: item.details,
    images: media.map((mediaItem) => mediaItem.src),
    media,
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
  return view.media.map((mediaItem, index) => {
    const resultNumber = view.media.slice(0, index + 1).filter((item) => !item.isSource).length;
    const width = 900;
    const height = view.galleryType === "banners" ? 450 : Math.round(width / (mediaItem.aspectRatio ?? .75));
    const alt = `${view.title} — ${mediaItem.isSource ? "исходник" : `работа ${resultNumber}`}`;
    const loading = index < 2 ? "eager" : "lazy";
    const priority = index < 2 ? "high" : "low";
    const image = `<img src="${mediaItem.src}" alt="${alt}" width="${width}" height="${height}" loading="${loading}" fetchpriority="${priority}" decoding="async">`;
    if (!mediaItem.isSource) return image;
    return `<figure class="dialog-media-source" style="--media-ratio: ${mediaItem.aspectRatio}">${image}<figcaption class="source-badge">исходник</figcaption></figure>`;
  }).join("");
}

function hydrateDialogGallery() {
  dialogGalleryObserver?.disconnect();
  dialogGalleryObserver = null;
  if (dialogGalleryPriorityFrame) cancelAnimationFrame(dialogGalleryPriorityFrame);
  dialogGalleryPriorityFrame = 0;
  const gallery = dialogContent.querySelector(".dialog-gallery:not(.dialog-gallery-video)");
  if (!gallery) return;
  const images = Array.from(gallery.querySelectorAll("img"));
  images.slice(2, 4).forEach((image) => prepareImageSource(image.currentSrc || image.src, { priority: "background" }));
  if (!("IntersectionObserver" in window)) return;
  dialogGalleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      dialogGalleryObserver.unobserve(entry.target);
      entry.target.loading = "eager";
      entry.target.fetchPriority = "high";
      prepareImageSource(entry.target.currentSrc || entry.target.src, { priority: "critical" });
    });
  }, { root: dialog, rootMargin: "150% 0px", threshold: 0 });
  images.slice(2).forEach((image) => dialogGalleryObserver.observe(image));
  scheduleDialogGalleryPriority();
}

function prioritizeDialogGalleryImages() {
  dialogGalleryPriorityFrame = 0;
  if (!dialog.open) return;
  const gallery = dialogContent.querySelector(".dialog-gallery:not(.dialog-gallery-video)");
  if (!gallery) return;
  const dialogRect = dialog.getBoundingClientRect();
  const prefetchDistance = dialog.clientHeight * 1.5;
  const imagesToPromote = Array.from(gallery.querySelectorAll("img")).filter((image) => {
    const rect = image.getBoundingClientRect();
    return rect.bottom > dialogRect.top - prefetchDistance && rect.top < dialogRect.bottom + prefetchDistance;
  });
  imagesToPromote.forEach((image) => {
    image.loading = "eager";
    image.fetchPriority = "high";
    prepareImageSource(image.currentSrc || image.src, { priority: "critical" });
  });
}

function scheduleDialogGalleryPriority() {
  if (dialogGalleryPriorityFrame) return;
  dialogGalleryPriorityFrame = requestAnimationFrame(prioritizeDialogGalleryImages);
}

dialog.addEventListener("scroll", scheduleDialogGalleryPriority, { passive: true });

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
let activeCaseTargetIndex = null;
let queuedCaseIndex = null;
let casePreloadGeneration = 0;
const caseSwitchAnimations = new Set();

function setCaseBusy(busy, direction = 0) {
  const navigation = dialogContent.querySelector(".case-variant-navigation");
  const viewport = dialogContent.querySelector(".case-variant-viewport");
  navigation?.classList.toggle("is-busy", busy);
  navigation?.setAttribute("aria-busy", String(busy));
  viewport?.setAttribute("aria-busy", String(busy));
  if (busy && direction) navigation?.setAttribute("data-busy-direction", String(direction));
  else navigation?.removeAttribute("data-busy-direction");
}

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
  hydrateDialogGallery();
  updateCaseNavigation();
  return view;
}

function getCriticalCaseImageSource(view) {
  if (!view.images.length) return null;
  const currentImages = Array.from(dialogContent.querySelectorAll(".case-variant-content .dialog-gallery img"));
  const dialogRect = dialog.getBoundingClientRect();
  const firstVisibleIndex = currentImages.findIndex((image) => {
    const rect = image.getBoundingClientRect();
    return rect.bottom > dialogRect.top && rect.top < dialogRect.bottom;
  });
  const startIndex = firstVisibleIndex >= 0 ? firstVisibleIndex : 0;
  return view.images[startIndex] ?? view.images[0];
}

function buildCaseVariantFragment(view) {
  const template = document.createElement("template");
  template.innerHTML = renderCaseVariant(view);
  processTypography(template.content);
  return template.content;
}

function cancelCasePreload() {
  casePreloadGeneration += 1;
}

function preloadAdjacentCaseVariant(direction = 1) {
  cancelCasePreload();
  if (!currentCaseState || currentCaseState.variants.length < 2 || !dialog.open) return;
  const preferredIndex = currentCaseState.index + direction;
  const fallbackIndex = currentCaseState.index - direction;
  const targetIndex = preferredIndex >= 0 && preferredIndex < currentCaseState.variants.length
    ? preferredIndex
    : fallbackIndex;
  if (targetIndex < 0 || targetIndex >= currentCaseState.variants.length) return;
  const generation = casePreloadGeneration;
  const source = getCaseVariantView(currentCaseState, targetIndex).images[0];
  if (!source) return;
  prepareImageSource(source, { priority: "background" }).then(() => {
    if (generation !== casePreloadGeneration || !dialog.open) return;
  });
}

function finishCaseSwitch(direction) {
  caseSwitching = false;
  activeCaseTargetIndex = null;
  const nextQueuedIndex = queuedCaseIndex;
  queuedCaseIndex = null;
  if (dialog.open && currentCaseState && nextQueuedIndex !== null && nextQueuedIndex !== currentCaseState.index) {
    switchCaseVariant(nextQueuedIndex, nextQueuedIndex > currentCaseState.index ? 1 : -1);
    return;
  }
  setCaseBusy(false);
  preloadAdjacentCaseVariant(direction);
}

function cancelContentSwitch() {
  caseSwitchToken += 1;
  cancelCasePreload();
  caseSwitchAnimations.forEach((animation) => animation.cancel());
  caseSwitchAnimations.clear();
  caseSwitching = false;
  activeCaseTargetIndex = null;
  queuedCaseIndex = null;
  setCaseBusy(false);
  const variableContent = dialogContent.querySelector(".case-variant-content");
  variableContent?.style.removeProperty("transform");
  dialogGalleryObserver?.disconnect();
  dialogGalleryObserver = null;
  if (dialogGalleryPriorityFrame) cancelAnimationFrame(dialogGalleryPriorityFrame);
  dialogGalleryPriorityFrame = 0;
}

function trackCaseSwitchAnimation(animation) {
  caseSwitchAnimations.add(animation);
  animation.finished.catch(() => {}).finally(() => caseSwitchAnimations.delete(animation));
  return animation;
}

function renderCase(item) {
  currentCaseState = createCaseState(item);
  dialogContent.innerHTML = `${renderCaseNavigation(currentCaseState)}<div class="case-variant-viewport" aria-busy="false"><div class="case-variant-content"></div></div>`;
  applyCaseVariant(currentCaseState.index);
  dialogContent.querySelectorAll("[data-case-step]").forEach((button) => button.addEventListener("click", () => {
    if (!currentCaseState) return;
    const direction = Number(button.dataset.caseStep);
    const baseIndex = caseSwitching ? (queuedCaseIndex ?? activeCaseTargetIndex ?? currentCaseState.index) : currentCaseState.index;
    const nextIndex = baseIndex + direction;
    if (nextIndex < 0 || nextIndex >= currentCaseState.variants.length) return;
    if (caseSwitching) {
      queuedCaseIndex = nextIndex;
      return;
    }
    switchCaseVariant(nextIndex, direction);
  }));
}

async function switchCaseVariant(nextIndex, direction) {
  if (!currentCaseState || caseSwitching) return;
  caseSwitching = true;
  activeCaseTargetIndex = nextIndex;
  setCaseBusy(true, direction);
  cancelCasePreload();
  clearTimeout(dialogOpenTimer);
  dialogOpenTimer = 0;
  dialog.classList.remove("is-opening", "is-preparing");
  const token = ++caseSwitchToken;
  const nextView = getCaseVariantView(currentCaseState, nextIndex);
  const criticalSource = getCriticalCaseImageSource(nextView);
  if (criticalSource && !preparedImageSources.has(criticalSource)) prepareImageSource(criticalSource, { priority: "critical" });
  if (token !== caseSwitchToken || !dialog.open) return;

  const variableContent = dialogContent.querySelector(".case-variant-content");
  if (!variableContent) {
    finishCaseSwitch(direction);
    return;
  }
  const previousScroll = dialog.scrollTop;

  if (prefersReducedMotion() || typeof variableContent.animate !== "function") {
    dialog.querySelectorAll("video").forEach((video) => video.pause());
    applyCaseVariant(nextIndex);
    dialog.scrollTop = Math.min(previousScroll, Math.max(0, dialog.scrollHeight - dialog.clientHeight));
    finishCaseSwitch(direction);
    return;
  }

  const nextFragment = buildCaseVariantFragment(nextView);
  const distance = 28;
  const outgoingAnimation = trackCaseSwitchAnimation(variableContent.animate([
    { transform: "translate3d(0,0,0)" },
    { transform: `translate3d(${-direction * distance}px,0,0)` }
  ], { duration: 100, easing: "cubic-bezier(.4,0,.8,.4)", fill: "both" }));
  await outgoingAnimation.finished.catch(() => {});
  if (token !== caseSwitchToken || !dialog.open) return;

  outgoingAnimation.cancel();
  dialog.querySelectorAll("video").forEach((video) => video.pause());
  variableContent.replaceChildren(nextFragment);
  currentCaseState.index = nextIndex;
  dialogKicker.textContent = `Кейс ${String(nextView.number).padStart(2, "0")} · ${nextView.categoryLabel}`;
  hydrateDialogGallery();
  updateCaseNavigation();
  requestAnimationFrame(() => {
    if (token !== caseSwitchToken || !dialog.open) return;
    dialog.scrollTop = Math.min(previousScroll, Math.max(0, dialog.scrollHeight - dialog.clientHeight));
  });

  const incomingAnimation = trackCaseSwitchAnimation(variableContent.animate([
    { transform: `translate3d(${direction * distance}px,0,0)` },
    { transform: "translate3d(0,0,0)" }
  ], { duration: 155, easing: "cubic-bezier(.2,.75,.2,1)", fill: "both" }));
  await incomingAnimation.finished.catch(() => {});
  if (token !== caseSwitchToken || !dialog.open) return;
  incomingAnimation.cancel();
  finishCaseSwitch(direction);
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
  scheduleDialogGalleryPriority();
  preloadAdjacentCaseVariant(1);

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
let renderedFilter = "all";
let activeFilterAnimation = null;

function clearFilterTransition() {
  activeFilterAnimation?.cancel();
  activeFilterAnimation = null;
}

function prefetchFilterCovers(filter, count = 2) {
  caseItems
    .filter((item) => filter === "all" || item.category === filter)
    .slice(0, count)
    .map((item) => previewImageSource(item.coverImages[0]))
    .forEach((source) => prepareImageSource(source, { priority: "critical" }));
}

function ensurePortfolioRendered() {
  if (portfolioInitialized) return;
  portfolioInitialized = true;
  renderCards(activeFilter);
  const schedulePrefetch = window.requestIdleCallback
    ? (callback) => window.requestIdleCallback(callback, { timeout: 900 })
    : (callback) => window.setTimeout(callback, 180);
  schedulePrefetch(() => prefetchFilterCovers(activeFilter));
}

function scheduleCoverWarmup() {
  const sources = Array.from(new Set(caseItems.flatMap((item) => item.coverImages.map(previewImageSource))));
  let index = 0;
  const schedule = (callback) => window.requestIdleCallback
    ? window.requestIdleCallback(callback, { timeout: 700 })
    : window.setTimeout(callback, 120);
  const prepareBatch = (deadline) => {
    let prepared = 0;
    while (index < sources.length && (prepared < 4 || deadline?.timeRemaining?.() > 6)) {
      prepareImageSource(sources[index], { priority: "background" });
      index += 1;
      prepared += 1;
    }
    if (index < sources.length) schedule(prepareBatch);
  };
  const start = () => schedule(prepareBatch);
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}

filterButtons.forEach((button, buttonIndex) => button.addEventListener("click", () => {
  const nextFilter = button.dataset.filter;
  if (nextFilter === activeFilter && renderedFilter === nextFilter) return;
  const currentButtonIndex = Array.from(filterButtons).findIndex((item) => item.dataset.filter === renderedFilter);
  const direction = buttonIndex > currentButtonIndex ? 1 : -1;
  activeFilter = nextFilter;
  filterButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });

  ensurePortfolioRendered();
  clearFilterTransition();
  prefetchFilterCovers(nextFilter);
  renderCards(nextFilter, false);
  renderedFilter = nextFilter;
  if (prefersReducedMotion() || typeof workGrid.animate !== "function") return;
  const nextAnimation = workGrid.animate([
    { opacity: 0, transform: `translate3d(${direction * 24}px,0,0)` },
    { opacity: 1, transform: "translate3d(0,0,0)" }
  ], { duration: 165, easing: "cubic-bezier(.2,.75,.2,1)", fill: "both" });
  activeFilterAnimation = nextAnimation;
  nextAnimation.finished.catch(() => {}).finally(() => {
    if (activeFilterAnimation !== nextAnimation) return;
    nextAnimation.cancel();
    activeFilterAnimation = null;
  });
}));

filterButtons.forEach((button) => {
  const prefetch = () => prefetchFilterCovers(button.dataset.filter, 1);
  button.addEventListener("pointerenter", prefetch, { passive: true });
  button.addEventListener("focus", prefetch);
});

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
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealing");
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
        entry.target.addEventListener("transitionend", () => entry.target.classList.remove("is-revealing"), { once: true });
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
  elements.forEach((element) => revealObserver.observe(element));
}

function observeReveals(elements) {
  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 65, 300)}ms`);
    if (prefersReducedMotion() || !revealObserver) element.classList.add("is-visible");
    else revealObserver.observe(element);
  });
}

function handleReducedMotionChange() {
  if (!prefersReducedMotion()) return;
  workGrid.querySelectorAll(".work-collage").forEach(resetCardTilt);
  clearFilterTransition();
  if (portfolioInitialized) {
    renderCards(activeFilter, false);
    renderedFilter = activeFilter;
  }
  cancelContentSwitch();
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  if (dialog.classList.contains("is-closing")) finishDialogClose();
  if (dialog.open) dialog.classList.remove("is-opening", "is-preparing");
}

if (typeof reducedMotion.addEventListener === "function") reducedMotion.addEventListener("change", handleReducedMotionChange);
else if (typeof reducedMotion.addListener === "function") reducedMotion.addListener(handleReducedMotionChange);

processTypography(document.body);
setupReveal();
portfolioInitialized = true;
renderCards(activeFilter, false);
scheduleCoverWarmup();
