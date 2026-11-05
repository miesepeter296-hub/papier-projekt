# KI-Protokoll

Hier steht nach jedem Arbeitsschritt kurz, was ich wollte und was die KI (Claude Code) gemacht hat.

---

## 05.11.2026 – Schritt 1: Werkzeuge prüfen
- **Ich wollte:** prüfen lassen, ob git und gh auf meinem PC funktionieren.
- **Claude hat:** die Versionen abgefragt. git 2.56 und gh 2.103 waren schon installiert, also war keine Installation nötig.

## 05.11.2026 – Schritt 2: Git einrichten und bei GitHub anmelden
- **Ich wollte:** Git einrichten und mich mit GitHub verbinden.
- **Claude hat:** erklärt, dass Name und E-Mail in einem öffentlichen Repository für alle sichtbar sind, und deshalb einen Spitznamen und die anonyme GitHub-E-Mail (noreply) empfohlen. Danach hat Claude Git mit dem Namen „miesepeter“ und dieser E-Mail eingerichtet. Die Anmeldung mit `gh auth login` habe ich selbst gemacht, Claude hat mir die Antworten auf die Fragen erklärt.

## 05.11.2026 – Schritt 3 und 4: Projektregeln und Protokoll
- **Ich wollte:** eine Datei mit den Projektregeln, damit die KI sie in jeder Sitzung kennt, und dieses Protokoll.
- **Claude hat:** die Dateien `CLAUDE.md` (Regeln zu Technik, Datenschutz, Barrierefreiheit und Fakten) und `KI-PROTOKOLL.md` angelegt, den Ordner zu einem Git-Repository gemacht und den ersten Commit erstellt.

## 05.11.2026 – Sprachstil geändert
- **Ich wollte:** dass die Website nicht locker, sondern sachlich und informativ formuliert ist.
- **Claude hat:** die Regel zur Sprache in `CLAUDE.md` von „locker, aber nicht belehrend“ zu „sachlich und informativ, nicht belehrend“ geändert.

## 05.11.2026 – Eigene Struktur und Umfrage-Daten besprochen
- **Ich wollte:** dass Claude meine eigene Seitenstruktur (mit Gemini erarbeitet, plus handschriftliche Notizen) und unsere Umfrage-Ergebnisse versteht und übernimmt.
- **Claude hat:** die Notizen und den Umfrage-Screenshot gelesen und zusammengefasst, Rückfragen zur Papier-Rechnung gestellt und die Rechnung neu aufgestellt. Claude hat Zahlen von Gemini markiert, die nicht belegt waren (z. B. „12–15 Tonnen pro Jahr“). Weil auf den Notizen Namen von Lehrkräften stehen, hat Claude eine `.gitignore` angelegt, damit diese Bilder nicht hochgeladen werden. Auf der Website werden keine Namen genannt.

## 05.11.2026 – Schritt 5: Erste Version der Website
- **Ich wollte:** eine Website mit 4 Hauptseiten (Start, Das Problem, Zahlen & Fakten, Lösungen) nach meiner Struktur, ein Kuchendiagramm zur Umfrage, eine neue Rechnung zum Papierverbrauch (6 Blatt/Woche, 39 Wochen, Klasse 5–10, 6 Klassen à 28) und die Möglichkeit, morgen ein Foto vom iPad aus hochzuladen.
- **Claude hat:**
  - die Umweltfakten recherchiert und nur Angaben mit Quelle übernommen (Umweltbundesamt, Wikipedia „Papierformat“). Die Gemini-Angabe „12–15 Tonnen pro Jahr“ wurde nicht übernommen.
  - die Rechnung neu aufgestellt: 234 Blatt pro Kind und Jahr, 1.404 Blatt von Klasse 5–10, 235.872 Blatt pro Jahr für die ganze Schule (1.008 Schüler). Zum Vergleich mit 1 Blatt pro Woche bei digitaler Nutzung.
  - 5 Seiten gebaut: `index.html`, `problem.html`, `zahlen.html`, `loesungen.html`, `quellen.html`, dazu `css/style.css` und `js/script.js`.
  - ein Kuchendiagramm (selbst als SVG gezeichnet), einen Papier-Rechner und selbst gezeichnete Grafiken (Tablet mit Papierstapel, Papiercontainer) erstellt.
  - die Seite so gebaut, dass ein Foto namens `foto.jpg` im Ordner `bilder` automatisch die Container-Zeichnung ersetzt.
  - fehlende Infos als gelbe Platzhalter markiert (z. B. [ZAHL FEHLT], [DATUM FEHLT]).
  - das Aussehen auf iPad- und Handy-Breite mit Testbildern geprüft und einen Fehler bei langen Platzhaltern behoben.

## 05.11.2026 – Schritt 6: Veröffentlichung
- **Ich wollte:** die Website öffentlich auf GitHub Pages stellen und einen QR-Code dazu.
- **Claude hat:** das öffentliche Repository `papier-projekt` angelegt, alles hochgeladen und GitHub Pages eingeschaltet. Die Seite ist erreichbar unter https://miesepeter296-hub.github.io/papier-projekt/ und Claude hat geprüft, dass alle Seiten laden. Beim QR-Code wurde das Ausführen eines heruntergeladenen Programms aus Sicherheitsgründen blockiert. Claude hat mir deshalb erklärt, wie ich den QR-Code selbst mit dem Edge-Browser erstelle. Außerdem hat Claude mir erklärt, wie ich morgen ein Foto vom iPad aus hochlade.

## 05.11.2026 – Platzhalter gefüllt
- **Ich wollte:** die offenen Platzhalter füllen. Umfragedatum ist heute, als Zitat und Quelle soll die Seite „Digitales & Kulturelles Lernen“ unserer Schule dienen. Kosten und andere unbekannte Zahlen sollen weg, ein Impressum ist nicht nötig. Bei Lehrkraft A waren Klassenarbeiten gemeint.
- **Claude hat:** die Schul-Website gelesen und die Zitate im Originaltext wörtlich überprüft. Dann hat Claude die Selbstbeschreibung der Schule als Zitat mit Quelle auf der Seite „Das Problem“ eingebaut, das Datum 05.11.2026 eingetragen und „Klassenarbeiten“ korrigiert. Die Platzhalter für Kosten, Kopien, Recyclingpapier, iPad-Anzahl, Lernplattform und Impressum hat Claude entfernt und die Schulseite in die Quellenliste aufgenommen. Jetzt gibt es keine Platzhalter mehr.
