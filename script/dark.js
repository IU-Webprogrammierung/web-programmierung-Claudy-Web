function applyTheme(theme) {
  const body = document.body;
  const icon = document.getElementById('darkModeIcon');
  const telefonIcon = document.getElementById('telefonIcon');
  const mailIcon = document.getElementById('mailIcon');
  const hausIcon = document.getElementById('hausIcon');

  if (theme === 'dark') {
    body.classList.add('dark-mode');
    if (icon) icon.src = 'pictures/sun.svg';
    if (telefonIcon) telefonIcon.src = 'pictures/Telefon-weiß.svg';
    if (mailIcon) mailIcon.src = 'pictures/Mail-weiß.svg';
    if (hausIcon) hausIcon.src = 'pictures/Haus-weiß.svg';
  } else {
    body.classList.remove('dark-mode');
    if (icon) icon.src = 'pictures/moon.svg';
    if (telefonIcon) telefonIcon.src = 'pictures/Telefon-schwarz.svg';
    if (mailIcon) mailIcon.src = 'pictures/Mail-schwarz.svg';
    if (hausIcon) hausIcon.src = 'pictures/Haus-schwarz.svg';
  }
}

function getPreferredTheme() {
  // Sitzungsthema zuerst prüfen
  const sessionTheme = sessionStorage.getItem('theme');
  if (sessionTheme) return sessionTheme;

  // Dann die Browser-Einstellung
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function toggleDarkMode() {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  applyTheme(newTheme);

  // Nur für die Browser-Sitzung speichern
  sessionStorage.setItem('theme', newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  const theme = getPreferredTheme();
  applyTheme(theme);
});