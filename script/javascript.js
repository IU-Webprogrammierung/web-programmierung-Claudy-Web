// Entfernt die 'no-js' Klasse und fügt die 'js' Klasse hinzu, um anzuzeigen, dass JavaScript aktiviert ist
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

// Funktion, die beim Scrollen des Fensters ausgeführt wird
window.onscroll = function() {
  const scrollTopButton = document.getElementById("scrollTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

// Funktion zum sanften Scrollen nach oben
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Funktion zum Wechseln der Sprache der Webseite
function switchLanguage() {
  var languageSwitcher = document.getElementById('language-switcher');
  var selectedValue = languageSwitcher.value;
  var currentPath = window.location.pathname;

  // Wechselt die URL basierend auf der ausgewählten Sprache
  if (currentPath.includes('_en')) {
      window.location.href = currentPath.replace('_en', '');
  } else {
      window.location.href = currentPath.replace('.html', '_en.html');
  }
}