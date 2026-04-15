const storageKey = "portfolio-theme";
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const root = document.body;

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  themeLabel.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  themeToggle?.setAttribute("aria-pressed", String(theme === "light"));
};

const storedTheme = window.localStorage.getItem(storageKey);
applyTheme(storedTheme === "light" ? "light" : "dark");

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  window.localStorage.setItem(storageKey, nextTheme);
});
