/* ==========================================================
   Tablet statt Tonne – kleine Helfer für alle Seiten
   Kein Tracking, keine Cookies, nichts wird gespeichert.
   ========================================================== */

"use strict";

/* ---------- 1. Eigenes Foto automatisch einsetzen ----------
   Sobald im Ordner "bilder" eine Datei "foto.jpg" (oder .jpeg/.png) liegt,
   ersetzt sie die gezeichnete Grafik. Bis dahin bleibt die Zeichnung. */
(function fotoEinsetzen() {
  const figur = document.querySelector("[data-foto]");
  if (!figur) return;

  const bild = figur.querySelector("img");
  const unterschrift = figur.querySelector("figcaption");
  const kandidaten = ["foto.jpg", "foto.jpeg", "foto.JPG", "foto.JPEG", "foto.png", "foto.PNG"];

  function probiere(i) {
    if (i >= kandidaten.length) return;   // kein Foto da: Zeichnung bleibt
    const test = new Image();
    test.onload = function () {
      bild.src = test.src;
      bild.alt = figur.dataset.fotoAlt;
      if (unterschrift) unterschrift.textContent = figur.dataset.fotoText;
    };
    test.onerror = function () { probiere(i + 1); };
    test.src = "bilder/" + kandidaten[i];
  }
  probiere(0);
})();

/* ---------- 2. Papier-Rechner ---------- */
(function papierRechner() {
  const form = document.getElementById("rechner-form");
  if (!form) return;

  // Feste Annahmen (Quellen siehe Seite „Quellen“)
  const GRAMM_PRO_BLATT = 5;      // A4, 80 g/m²: 80 g ÷ 16 = 5 g
  const MM_PRO_BLATT = 0.1;       // Annahme: ca. 0,1 mm pro Blatt
  const BLATT_PRO_PACKUNG = 500;

  const felder = {
    blatt: form.elements["blatt"],
    wochen: form.elements["wochen"],
    jahre: form.elements["jahre"],
    personen: form.elements["personen"]
  };

  const zahl = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
  const komma = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 });

  function wert(feld) {
    const n = parseFloat(String(feld.value).replace(",", "."));
    return isFinite(n) && n > 0 ? n : 0;
  }

  function hoeheText(mm) {
    if (mm >= 1000) return komma.format(mm / 1000) + " m";
    return komma.format(mm / 10) + " cm";
  }

  function gewichtText(g) {
    if (g >= 1000000) return komma.format(g / 1000000) + " t";
    if (g >= 1000) return komma.format(g / 1000) + " kg";
    return zahl.format(g) + " g";
  }

  function rechnen() {
    const blattGesamt = wert(felder.blatt) * wert(felder.wochen) * wert(felder.jahre) * wert(felder.personen);
    document.getElementById("erg-blatt").textContent = zahl.format(blattGesamt);
    document.getElementById("erg-packungen").textContent = komma.format(blattGesamt / BLATT_PRO_PACKUNG);
    document.getElementById("erg-gewicht").textContent = gewichtText(blattGesamt * GRAMM_PRO_BLATT);
    document.getElementById("erg-hoehe").textContent = hoeheText(blattGesamt * MM_PRO_BLATT);
  }

  // Schnellauswahl-Knöpfe füllen die Felder mit Beispielwerten
  document.querySelectorAll("[data-vorlage]").forEach(function (knopf) {
    knopf.addEventListener("click", function () {
      const werte = knopf.dataset.vorlage.split(",");
      felder.blatt.value = werte[0];
      felder.wochen.value = werte[1];
      felder.jahre.value = werte[2];
      felder.personen.value = werte[3];
      document.querySelectorAll("[data-vorlage]").forEach(function (k) {
        k.setAttribute("aria-pressed", k === knopf ? "true" : "false");
      });
      rechnen();
    });
  });

  form.addEventListener("input", function () {
    document.querySelectorAll("[data-vorlage]").forEach(function (k) { k.setAttribute("aria-pressed", "false"); });
    rechnen();
  });
  form.addEventListener("submit", function (e) { e.preventDefault(); rechnen(); });

  rechnen();
})();
