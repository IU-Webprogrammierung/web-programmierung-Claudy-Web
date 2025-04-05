// Funktion zum Anwenden des ausgewählten Themas (dunkel oder hell)
function applyTheme(theme) {
  const body = document.body;
  const icon = document.getElementById('darkModeIcon');
  const telefonIcon = document.getElementById('telefonIcon');
  const mailIcon = document.getElementById('mailIcon');
  const hausIcon = document.getElementById('hausIcon');

    // Wenn das Thema 'dark' ist, wende den Dunkelmodus an und ändere die Icons
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    if (icon) icon.src = 'pictures/sun.svg';
    if (telefonIcon) telefonIcon.src = 'pictures/Telefon-weiß.svg';
    if (mailIcon) mailIcon.src = 'pictures/Mail-weiß.svg';
    if (hausIcon) hausIcon.src = 'pictures/Haus-weiß.svg';
  } else {
    // Andernfalls entferne den Dunkelmodus und setze die Icons zurück
    body.classList.remove('dark-mode');
    if (icon) icon.src = 'pictures/moon.svg';
    if (telefonIcon) telefonIcon.src = 'pictures/Telefon-schwarz.svg';
    if (mailIcon) mailIcon.src = 'pictures/Mail-schwarz.svg';
    if (hausIcon) hausIcon.src = 'pictures/Haus-schwarz.svg';
  }
}

// Funktion zum Abrufen des bevorzugten Themas
function getPreferredTheme() {
  // Zuerst das Thema aus der Sitzung prüfen
  const sessionTheme = sessionStorage.getItem('theme');
  if (sessionTheme) return sessionTheme;

  // Dann die Browser-Einstellung prüfen
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

// Funktion zum Umschalten zwischen Dunkel- und Hellmodus
function toggleDarkMode() {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  applyTheme(newTheme);

  // Speichere das neue Thema nur für die aktuelle Browsersitzung
  sessionStorage.setItem('theme', newTheme);
}

// Event-Listener, der beim Laden des Dokuments das bevorzugte Thema anwendet
document.addEventListener('DOMContentLoaded', () => {
  const theme = getPreferredTheme();
  applyTheme(theme);
});