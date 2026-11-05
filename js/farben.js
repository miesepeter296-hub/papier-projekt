/* ==========================================================
   Tablet statt Tonne – Farbschemata
   Die gewählte Farbe wird NICHT gespeichert (keine Cookies,
   kein localStorage). Sie wird nur in der Adresse (?farbe=…)
   an die nächste Seite weitergegeben.
   ========================================================== */

"use strict";

var FARBSCHEMATA = [
  { id: "gruen",      name: "Grün (Standard)", a: "#1e6b47", b: "#1d4f8c" },
  { id: "blau",       name: "Ozeanblau",       a: "#1d4f8c", b: "#0f6466" },
  { id: "petrol",     name: "Petrol",          a: "#0f6466", b: "#8a3b12" },
  { id: "lila",       name: "Lila",            a: "#5b3a99", b: "#1d4f8c" },
  { id: "rot",        name: "Bordeaux",        a: "#9b1c31", b: "#1d4f8c" },
  { id: "orange",     name: "Herbst",          a: "#a64b00", b: "#1d4f8c" },
  { id: "graphit",    name: "Graphit",         a: "#3d4650", b: "#1d4f8c" },
  { id: "sand",       name: "Sand",            a: "#6b4e16", b: "#1d4f8c" },
  { id: "nacht",      name: "Nachtmodus",      a: "#12161a", b: "#8fd3ae" },
  { id: "kontrast",   name: "Hoher Kontrast",  a: "#000000", b: "#ffffff" },
  { id: "einhorn",    name: "Einhorn 🦄",    a: "#ff8fc8", b: "#c2187a" },
  { id: "regenbogen", name: "Regenbogen 🌈", a: "#000000", b: "linear-gradient(90deg,#ff4d4d,#ffa53d,#ffe14d,#4dd97a,#4db8ff,#a77bff)" },
  { id: "bunt",       name: "Kunterbunt 🎉", a: "#000000", b: "conic-gradient(#e53935,#fdd835,#43a047,#1e88e5,#8e24aa,#ff6d00,#00acc1,#e53935)" }
];

function gueltigeFarbe(id) {
  for (var i = 0; i < FARBSCHEMATA.length; i++) if (FARBSCHEMATA[i].id === id) return id;
  return "gruen";
}

/* 1. Sofort beim Laden: Farbe aus der Adresse übernehmen (verhindert Aufblitzen) */
var aktuelleFarbe = gueltigeFarbe(new URLSearchParams(location.search).get("farbe"));
document.documentElement.setAttribute("data-farbe", aktuelleFarbe);

/* 2. Interne Links so anpassen, dass die Farbe mitgenommen wird */
function linksAnpassen() {
  document.querySelectorAll('a[href$=".html"], a[href*=".html#"]').forEach(function (a) {
    var href = a.getAttribute("href");
    if (/^https?:/.test(href)) return;               // externe Links nicht ändern
    var teile = href.split("#");
    var pfad = teile[0].split("?")[0];
    var neu = aktuelleFarbe === "gruen" ? pfad : pfad + "?farbe=" + aktuelleFarbe;
    a.setAttribute("href", neu + (teile[1] ? "#" + teile[1] : ""));
  });
}

function farbeSetzen(id) {
  aktuelleFarbe = gueltigeFarbe(id);
  document.documentElement.setAttribute("data-farbe", aktuelleFarbe);
  var url = new URL(location.href);
  if (aktuelleFarbe === "gruen") url.searchParams.delete("farbe");
  else url.searchParams.set("farbe", aktuelleFarbe);
  history.replaceState(null, "", url);
  linksAnpassen();
  document.querySelectorAll(".farb-knopf").forEach(function (k) {
    k.setAttribute("aria-pressed", k.dataset.farbe === aktuelleFarbe ? "true" : "false");
  });
}

/* 3. Farbauswahl in die Kopfzeile einbauen */
document.addEventListener("DOMContentLoaded", function () {
  linksAnpassen();
  var kopf = document.querySelector(".kopf .inhalt-breite");
  if (!kopf) return;

  var huelle = document.createElement("div");
  huelle.className = "farbwahl";

  var schalter = document.createElement("button");
  schalter.type = "button";
  schalter.className = "farbwahl-schalter";
  schalter.setAttribute("aria-expanded", "false");
  schalter.setAttribute("aria-controls", "farb-panel");
  schalter.innerHTML = '<span aria-hidden="true">🎨</span><span class="farb-wort"> Farben</span>';

  var panel = document.createElement("div");
  panel.id = "farb-panel";
  panel.className = "farb-panel";
  panel.hidden = true;
  panel.innerHTML = '<p class="farb-titel">Farbschema wählen</p>';

  var liste = document.createElement("div");
  liste.className = "farb-liste";
  FARBSCHEMATA.forEach(function (f) {
    var k = document.createElement("button");
    k.type = "button";
    k.className = "farb-knopf";
    k.dataset.farbe = f.id;
    k.setAttribute("aria-pressed", f.id === aktuelleFarbe ? "true" : "false");
    k.innerHTML = '<span class="farb-muster" aria-hidden="true" style="background:' +
      (f.b.indexOf("gradient") > -1 ? f.b : "linear-gradient(135deg," + f.a + " 50%," + f.b + " 50%)") +
      '"></span><span>' + f.name + "</span>";
    k.addEventListener("click", function () { farbeSetzen(f.id); });
    liste.appendChild(k);
  });
  panel.appendChild(liste);

  schalter.addEventListener("click", function () {
    var offen = schalter.getAttribute("aria-expanded") === "true";
    schalter.setAttribute("aria-expanded", offen ? "false" : "true");
    panel.hidden = offen;
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) { panel.hidden = true; schalter.setAttribute("aria-expanded", "false"); schalter.focus(); }
  });
  document.addEventListener("click", function (e) {
    if (!huelle.contains(e.target) && !panel.hidden) { panel.hidden = true; schalter.setAttribute("aria-expanded", "false"); }
  });

  huelle.appendChild(schalter);
  huelle.appendChild(panel);
  kopf.appendChild(huelle);
});
