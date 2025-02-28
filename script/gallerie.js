var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("gallerie-bilder");
  var captions = document.querySelectorAll('.gallerie figcaption');

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    if (captions[i]) {
      captions[i].style.display = "none"; // Hide all captions
    }
  }

  x[slideIndex - 1].style.display = "block";
  if (captions[slideIndex - 1]) {
    captions[slideIndex - 1].style.display = "block"; // Show the caption for the current image
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const figures = document.querySelectorAll('.gallerie figure');

  figures.forEach(figure => {
    const img = figure.querySelector('img');
    const captionText = img.getAttribute('data-caption');

    if (captionText) {
      const caption = document.createElement('figcaption');
      caption.textContent = captionText;
      caption.style.display = "none"; // Initially hide all captions
      figure.appendChild(caption);
    }
  });
});