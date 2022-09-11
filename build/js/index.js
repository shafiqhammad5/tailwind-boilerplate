// themeSwitcher
const themeSwitcher = document.getElementById("themeSwitcher");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color0scheme: dark)").matches;

// Initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("aT");
    return;
  }
};

// Manual Theme Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("aT")) {
    document.documentElement.classList.remove("aT");
    localStorage.setItem("theme", "light");
    return;
  }

  document.documentElement.classList.add("aT");
  localStorage.setItem("theme", "dark");
};

// call theme switch on clicking buttons
themeSwitcher.addEventListener("click", () => {
  themeSwitch();
});

// invoke theme check on initial load
themeCheck();
