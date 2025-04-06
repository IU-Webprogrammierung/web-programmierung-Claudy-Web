# Hausmeisterservice Website

📎 [Live-Demo ansehen](https://iu-webprogrammierung.github.io/web-programmierung-Claudy-Web)

Dies ist eine zweisprachige, barrierearme und responsive Website für einen Hausmeisterservice. Die Seite informiert über Leistungen, das Unternehmen, bietet ein Kontaktformular und berücksichtigt rechtliche Anforderungen durch ein vollständiges Impressum und eine Datenschutzerklärung.

## Verwendete Technologien

- HTML5 & CSS3 (semantische Struktur, responsive Layouts)
- JavaScript (für Dark Mode, Navigation und Galerie)
- Flexbox (für Layout und Navigation)
- Media Queries für mobile Optimierung und Dark Mode
	- **Breakpoints bei 58.75rem (940px)** und **64rem (1024px)**
- ARIA-Attribute und Labels für Barrierefreiheit
- hreflang-Markierung für Suchmaschinenfreundlichkeit

## Features

- 🌐 Zweisprachigkeit: Deutsch / Englisch mit Umschalter
- 🌗 Dark Mode Toggle mit Icon
- 📱 Responsive Design: Mobilgeräte, Tablets, Desktop
- 🍔 Burger-Menü für kleine Bildschirme
- ✉️ Kontaktformular mit Validierung und Feedback
- 🖼️ Bildergalerie mit Navigation
- 🔒 DSGVO-konforme Impressums- und Datenschutzerklärungen
- 🔊 Barrierefrei durch ARIA-Labels, Tastatur-Navigation & Fokus-Indikatoren

## Nutzung

1. Projektordner lokal entpacken oder auf Webserver laden
2. `index.html` im Browser öffnen
3. Alle Funktionen laufen vollständig im Client – keine Backend-Komponenten erforderlich

> **Hinweis:**  
> Das Kontaktformular enthält einen exemplarischen „Senden“-Button ohne serverseitige Verarbeitung. Es findet keine echte Datenübertragung statt.

## Projektstruktur

- `/index.html`, `/index_en.html` – Startseite (de/en)
- `/leistungen.html`, `/leistungen_en.html` – Leistungen
- `/firma.html`, `/firma_en.html` – Über uns
- `/kontakt.html`, `/kontakt_en.html` – Kontaktseite mit Formular
- `/impressum.html`, `/impressum_en.html` – Impressum
- `/datenschutz.html`, `/datenschutz_en.html` – Datenschutz
- `/style.css` – zentrales Stylesheet
- `/javascript.js`, `/dark.js`, `/gallerie.js` – JavaScript-Funktionen
- `/pictures/` – Icons und Bilder
- `/favicon/` – Favicon-Set
- `web.config` – Konfigurationsdatei für IIS-Hosting
- `site.webmanifest` – Progressive Web App Support

## Barrierefreiheit & Optimierung

- 🏷️ Alle Formularelemente mit Labels oder ARIA-Beschriftung
- 🎛️ Sprach- und Dark-Mode-Umschalter tastaturbedienbar
- 🧭 Navigation auch mit Screenreadern nutzbar
- 🏷️ hreflang-Links für Suchmaschinenoptimierung
- 📄 Lighthouse-geprüft: gutes Ergebnis bei Accessibility und SEO

## Autor

**Claudia Walker**  
Projektarbeit im Rahmen des Moduls "Projekt: Web-Programmierung - DLBUXPWP01" bei der IU Internationalen Hochschule GmbH
Abgabe: April 2025

## Lizenz

📄 Dieses Projekt dient ausschließlich der Demonstration im Rahmen einer Prüfung.
Alle Bilder wurden KI-generiert mithilfe von firefly.adobe.com - Public Domain Mark
Keine kommerzielle Nutzung vorgesehen.
