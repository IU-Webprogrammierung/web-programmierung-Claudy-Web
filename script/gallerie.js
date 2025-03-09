function checkGalleries(gallerieId) {
  switch (gallerieId) {
    case 'start':
      return document.getElementsByClassName("gallerie-bilder");
    case 'winter':
      return document.getElementsByClassName("gallerie-bilder-winter");
    case 'garten':
      return document.getElementsByClassName("gallerie-bilder-garten");
    case 'objekt':
      return document.getElementsByClassName("gallerie-bilder-objekt");
    default:
      return [];
  }
}

var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n, gallerieId) {
  showDivs(slideIndex += n, gallerieId);
}

function showDivs(n, gallerieId) {
  var i;
  var x = checkGalleries(gallerieId);
  var captions = document.querySelectorAll(`.gallerie-${gallerieId} figcaption`);

  if (x.length === 0) {
    return; // Beenden, wenn keine Bilder in der Galerie vorhanden sind
  }

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    if (captions[i]) {
      captions[i].style.display = "none"; // Ausblenden der Bezeichnung
    }
  }

  x[slideIndex - 1].style.display = "block";
  if (captions[slideIndex - 1]) {
    captions[slideIndex - 1].style.display = "block"; // Anzeigen der aktuelle Bezeichnung
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let galleries = document.querySelectorAll(".gallerie");

  galleries.forEach(gallery => {
      let figures = gallery.querySelectorAll("figure");

      // Alle Bilder und figcaption verstecken außer dem ersten
      figures.forEach((figure, index) => {
          if (index !== 0) {
              figure.style.display = "none";
          }
      });

      // Funktion für den Bildwechsel
      let currentIndex = 0;
      let totalFigures = figures.length;

      function showImage(index) {
          figures.forEach((figure, i) => {
              figure.style.display = i === index ? "block" : "none";
          });
      }

      // Buttons für die Galerie-Steuerung
      let prevButton = gallery.querySelector(".button-links");
      let nextButton = gallery.querySelector(".button-rechts");

      prevButton.addEventListener("click", function () {
          currentIndex = (currentIndex - 1 + totalFigures) % totalFigures;
          showImage(currentIndex);
      });

      nextButton.addEventListener("click", function () {
          currentIndex = (currentIndex + 1) % totalFigures;
          showImage(currentIndex);
      });
  });
});