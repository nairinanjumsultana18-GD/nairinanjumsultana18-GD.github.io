window.toggleTheme = function () {
  const body = document.body;
  const themeBtn = document.getElementById("themeToggleBtn");
  if (!body) return;

  body.classList.toggle("dark-mode");

  if (themeBtn) {
    themeBtn.textContent = body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  }
};

window.showGreeting = function () {
  const msg = document.getElementById("greetingMessage");
  if (!msg) return;

  const hour = new Date().getHours();
  let timeGreeting = "Hello";
  if (hour < 12) {
    timeGreeting = "Good morning";
  } else if (hour < 18) {
    timeGreeting = "Good afternoon";
  } else {
    timeGreeting = "Good evening";
  }

  msg.textContent = `${timeGreeting}! Welcome to Nairin Anjum Sultana's portfolio.`;
};

window.togglePortfolio = function () {
  const wrapper = document.getElementById("designWrapper");
  const btn = document.getElementById("toggleBtn");
  if (!wrapper || !btn) return;

  const isOpen = wrapper.classList.toggle("open");
  btn.classList.toggle("active", isOpen);

  const textSpan = btn.querySelector("span:first-child");
  if (textSpan) {
    textSpan.textContent = isOpen
      ? "🎨 Hide Graphics Design Portfolio"
      : "🎨 Show Graphics Design Portfolio";
  }
};

window.filterSelection = function (category, clickedBtn) {
  const cards = document.querySelectorAll(".gallery-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((b) => b.classList.remove("active"));
  if (clickedBtn) {
    clickedBtn.classList.add("active");
  }

  cards.forEach((card) => {
    const matches = category === "all" || card.classList.contains(category);
    card.classList.toggle("hide", !matches);
  });
};

window.openLightbox = function (card) {
  const img = card ? card.querySelector("img") : null;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (!img || !lightbox || !lightboxImg) return;

  lightboxImg.src = img.getAttribute("src") || img.src;
  lightboxImg.alt = img.alt || "Enlarged View";
  lightbox.classList.add("active");
};

window.closeLightbox = function () {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});