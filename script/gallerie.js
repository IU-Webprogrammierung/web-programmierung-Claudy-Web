// Funktion zur Überprüfung und Rückgabe der entsprechenden Galerie-Elemente basierend auf der Galerie-ID
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

// Zeigt die Bilder der Galerie an, beginnend mit dem ersten Bild
showDivs(slideIndex);

// Funktion zum Anzeigen der Bilder in der Galerie
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
    captions[slideIndex - 1].style.display = "block"; // Anzeigen der aktuellen Bezeichnung
  }
}

// Initialisiert die Galerien beim Laden des Dokuments
document.addEventListener("DOMContentLoaded", function () {
  initGalleries();
});

const galleryIndices = {}; // Speichert die aktuellen Indizes für jede Galerie separat

// Funktion zur Initialisierung der Galerien
function initGalleries() {
  const galleries = document.querySelectorAll(".gallerie");

  galleries.forEach(gallery => {
      const galleryId = gallery.id;
      const figures = gallery.querySelectorAll("figure");

      // Sicherstellen, dass der Index für jede Galerie existiert
      galleryIndices[galleryId] = 0;

      figures.forEach((figure, index) => {
          figure.style.display = index === 0 ? "block" : "none";
      });
  });
}

// Funktion zum Wechseln der Bilder in der Galerie
function plusDivs(n, galleryId) {
  let gallery = document.getElementById(galleryId);
  let figures = gallery.querySelectorAll("figure");

  let currentIndex = galleryIndices[galleryId];

  // Berechnung des neuen Index
  let newIndex = (currentIndex + n + figures.length) % figures.length;

  // Aktuelles Bild ausblenden
  figures[currentIndex].style.display = "none";

  // Neues Bild anzeigen
  figures[newIndex].style.display = "block";

  // Index aktualisieren
  galleryIndices[galleryId] = newIndex;
}

// Funktion zum Zurücksetzen der Galerie auf das erste Bild
function resetGallery(galleryId) {
  let gallery = document.getElementById(galleryId);
  let figures = gallery.querySelectorAll("figure");

  // Setzt die Galerie wieder auf das erste Bild
  figures.forEach((figure, index) => {
      figure.style.display = index === 0 ? "block" : "none";
  });

  // Index zurücksetzen
  galleryIndices[galleryId] = 0;
}

// Event-Listener für Tab-Buttons, um die Galerie zurückzusetzen
document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", function () {
      const targetGallery = this.getAttribute("data-target"); // Annahme: Button hat data-target mit der ID der Galerie
      resetGallery(targetGallery);
  });
});