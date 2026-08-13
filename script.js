const cases = {
  moto: {
    kicker: "Кейс 01 · E-commerce",
    title: "Линейка мотохимии LAVR",
    intro: "Система карточек для линейки средств по уходу за мотоциклом: от вариантов первого слайда до последовательной презентации свойств продукта.",
    details: [
      ["Задача", "Собрать узнаваемую линейку и быстро объяснить различия продуктов"],
      ["Работа", "Референсы, цветовая концепция, варианты обложек, серия слайдов"],
      ["Проверка", "A/B-тестирование вариантов первого слайда"]
    ],
    images: ["moto-01.jpg", "moto-02.jpg", "moto-03.jpg"],
    alt: ["Обложка очистителя цепи", "Слайд с рекомендациями", "Слайд о защите цепи"]
  },
  gun: {
    kicker: "Кейс 02 · E-commerce",
    title: "Химия для ухода за оружием",
    intro: "Визуальная система для технической линейки: преимущества продукта, совместимость, сценарии использования и инструкции собраны в читаемую последовательность.",
    details: [
      ["Задача", "Показать назначение сложного продукта без перегрузки"],
      ["Работа", "Иерархия тезисов, визуальные сценарии, продуктовые слайды"],
      ["Результат", "Единая серия карточек для нескольких средств линейки"]
    ],
    images: ["gun-01.jpg", "gun-02.jpg", "gun-03.jpg"],
    alt: ["Оружейное масло", "Профессиональный уход", "Сферы применения"]
  },
  shampoo: {
    kicker: "Кейс 03 · E-commerce",
    title: "Линейка автошампуней",
    intro: "Яркие обложки и продуктовые слайды для автошампуней с разными свойствами. Визуал помогает различить варианты и понять способ применения.",
    details: [
      ["Задача", "Развести продукты линейки и усилить читаемость обложки"],
      ["Работа", "Три концепции обложек и структура серии"],
      ["Результат", "Последовательная подача преимуществ и инструкции"]
    ],
    images: ["shampoo-01.jpg", "shampoo-02.jpg", "shampoo-03.jpg"],
    alt: ["Обложка автошампуня", "Вариант обложки", "Слайд о нанесении"]
  },
  parts: {
    kicker: "Кейс 04 · E-commerce",
    title: "Автокомпоненты двух брендов",
    intro: "Карточки товаров в одной категории для BBC и LECAR. Каждая серия сохраняет характер своего бренда и при этом понятно раскрывает характеристики продукта.",
    details: [
      ["Задача", "Оформить одну категорию в двух разных бренд-системах"],
      ["Работа", "Обложки, преимущества, совместимость и инструкции"],
      ["Результат", "Две визуально различимые серии карточек"]
    ],
    images: ["parts-01.jpg", "parts-02.jpg", "parts-03.jpg"],
    alt: ["Обложка BBC", "Слайд о продукте", "Обложка LECAR"]
  },
  chem: {
    kicker: "Кейс 05 · E-commerce",
    title: "Автохимия и автокосметика",
    intro: "Серия карточек для разных продуктов: полироли, масла, средства для салона и техники. В каждом проекте акцент сделан на сценарии применения и ключевых свойствах.",
    details: [
      ["Задача", "Адаптировать подачу под разные товары одной категории"],
      ["Работа", "Обложки, характеристики, преимущества, инструкции"],
      ["Результат", "Масштабируемый подход к товарной линейке"]
    ],
    images: ["chem-01.jpg", "chem-02.jpg", "chem-03.jpg"],
    alt: ["Полироль пластика", "Слайд о применении", "Слайд с инструкцией"]
  },
  goods: {
    kicker: "Кейс 06 · Разные категории",
    title: "Товары для разных аудиторий",
    intro: "Примеры инфографики для бытовых товаров, маркеров и косметических аксессуаров. Разные категории требуют разной интонации, но одинаково ясной структуры.",
    details: [
      ["Категории", "Товары для дома, канцелярия, косметические аксессуары"],
      ["Работа", "Композиция, ретушь, иерархия и адаптация стилистики"],
      ["Результат", "Разные визуальные решения под задачу и аудиторию"]
    ],
    images: ["goods-01.jpg", "goods-02.jpg", "goods-03.jpg"],
    alt: ["Металлическая губка", "Маркеры", "Ватные диски"]
  }
};

const subfilters = document.querySelectorAll("[data-group]");
const cards = document.querySelectorAll(".work-card");

subfilters.forEach((button) => {
  button.addEventListener("click", () => {
    subfilters.forEach((item) => item.classList.toggle("is-active", item === button));
    const group = button.dataset.group;
    cards.forEach((card) => {
      card.hidden = group !== "all" && !card.dataset.groups.split(" ").includes(group);
    });
  });
});

const dialog = document.querySelector("#case-dialog");
const dialogContent = document.querySelector("#dialog-content");

document.querySelectorAll("[data-case]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = cases[button.dataset.case];
    dialogContent.innerHTML = `
      <span class="dialog-kicker">${item.kicker}</span>
      <h2>${item.title}</h2>
      <p class="dialog-intro">${item.intro}</p>
      <div class="dialog-details">
        ${item.details.map(([label, text]) => `<div><span>${label}</span><strong>${text}</strong></div>`).join("")}
      </div>
      <div class="dialog-gallery">
        ${item.images.map((image, index) => `<img src="assets/${image}" alt="${item.alt[index]}" loading="lazy" decoding="async">`).join("")}
      </div>
      <p class="dialog-note">В полной версии кейса можно добавить исходную задачу, этапы работы, варианты до/после и подтверждённые метрики.</p>
    `;
    dialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

function closeDialog() {
  dialog.close();
  document.body.classList.remove("dialog-open");
}

document.querySelector(".dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

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

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}
