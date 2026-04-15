const storageKey = "portfolio-theme";
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileLinks = document.querySelectorAll("[data-mobile-link]");
const root = document.body;

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  }
  themeToggle?.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );
  themeToggle?.setAttribute("aria-pressed", String(theme === "light"));
};

const storedTheme = window.localStorage.getItem(storageKey);
applyTheme(storedTheme === "light" ? "light" : "dark");

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  window.localStorage.setItem(storageKey, nextTheme);
});

const closeMobileMenu = () => {
  if (!menuToggle || !mobileMenu) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  mobileMenu.dataset.open = "false";
  mobileMenu.setAttribute("aria-hidden", "true");
};

menuToggle?.addEventListener("click", () => {
  if (!mobileMenu) {
    return;
  }

  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  mobileMenu.dataset.open = String(!isOpen);
  mobileMenu.setAttribute("aria-hidden", String(isOpen));
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
