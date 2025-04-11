
// Beim Laden der Seite prüfen, ob ein gespeichertes Thema existiert oder Systemeinstellung verwenden
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const icon = document.getElementById("darkModeIcon");

  // Fall 1: gespeicherte Einstellung
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.src = "pictures/sun.svg";
  } else if (savedTheme === "light") {
    document.body.classList.remove("dark-mode");
    icon.src = "pictures/moon.svg";
  } else if (prefersDark) {
    // Fall 2: keine gespeicherte Einstellung → Systemvorgabe übernehmen
    document.body.classList.add("dark-mode");
    icon.src = "pictures/sun.svg";
  } else {
    icon.src = "pictures/moon.svg";
  }
});

// Manuelles Umschalten via Button
function toggleDarkMode() {
  const icon = document.getElementById("darkModeIcon");
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  icon.src = isDark ? "pictures/sun.svg" : "pictures/moon.svg";
}