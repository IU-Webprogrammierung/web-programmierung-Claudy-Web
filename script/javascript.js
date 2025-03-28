document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

window.onscroll = function() {
    const scrollTopButton = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  };

  // Nach oben springen
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Sprachenwechsel
  function switchLanguage() {
    var languageSwitcher = document.getElementById('language-switcher');
    var selectedValue = languageSwitcher.value;
    window.location.href = selectedValue;
}