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

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }