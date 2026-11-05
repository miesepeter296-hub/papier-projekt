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

## 05.11.2026 – Farbschemata, neue Inhalte und Bildauswahl
- **Ich wollte:** 10 Farbschemata plus 2 Spaß-Schemata (pink mit Einhörnern, schwarz mit Regenbogen), einen besseren Titel, 3 neue Bildvorschläge für die Startseite (das alte Bild behalten), ein Kreisdiagramm nur mit Prozentzahlen, das seine Farben an das Farbschema anpasst, verständlicher formulierte Aussagen der Lehrkräfte (Lehrkraft B meinte etwa 50 % an der ganzen Schule), Umrandungen um die Seitenüberschriften, bei „Ersparnis“ den Gesamtverbrauch und die gesparten Blätter in Klammern, Teams und OneNote in den Lösungen, mehrere Vorschläge zum Thema Ablenkung (vorhandene Sperre von 8 Uhr bis Schulende, Freigabe durch Lehrkräfte z. B. in Freistunden, alternativ strengere Konsequenzen, Oberstufe ausgenommen), Recherche, wie so ein System funktioniert, mit Beispielen, und „Vorschläge an die Schulleitung“ umbenennen in „Vorschläge an die Schule“.
- **Claude hat:**
  - ein Farbsystem mit 12 Schemata gebaut (Grün, Ozeanblau, Petrol, Lila, Bordeaux, Herbst, Graphit, Sand, Nachtmodus, Hoher Kontrast, Einhorn 🦄, Regenbogen 🌈). Die Auswahl erscheint oben über den 🎨-Knopf. Die Farbe wird nicht gespeichert, sondern nur in der Adresse weitergegeben (Datenschutz).
  - den Titel geändert zu „Digital ausgestattet, auf Papier gearbeitet“.
  - 3 neue Bilder gezeichnet (Waage, Papierturm, Tablet als Drucker) und eine Vorschau-Seite `bildauswahl.html` zum Vergleichen angelegt.
  - das Diagramm so umgebaut, dass es nur Prozente zeigt, die genauen Stimmenzahlen stehen in der aufklappbaren Tabelle. Das Diagramm übernimmt die Farben des gewählten Schemas.
  - die Aussagen der Lehrkräfte in ganzen Sätzen formuliert und die Aussage von Lehrkraft B korrigiert.
  - alle Seitenüberschriften mit einem Rahmen versehen.
  - die Ersparnis-Zeile geändert: „Verbrauch sinkt von geschätzt 235.872 auf 39.312 Blatt (196.560 Blatt gespart)“.
  - die Lösungen-Seite überarbeitet: OneNote-Kursnotizbuch und Teams-Aufgaben eingebaut (mit Microsoft-Quellen), „Vorschläge an die Schule“ und einen eigenen, gestrichelt umrandeten Themenblock „Ablenkung durch Spiele vermeiden“ mit 6 Punkten erstellt.
  - recherchiert, wie zeitgesteuerte Sperren funktionieren (Jamf School, Apple Classroom), ein Beispiel aus Singapur gefunden und alle Quellen auf der Quellen-Seite ergänzt. Den Namen der Schule in Singapur hat Claude weggelassen, weil er auf der Quellseite nicht eindeutig steht.
  - Wissen über die Schule und das Farbsystem in `CLAUDE.md` ergänzt.

## 05.11.2026 – KI-Bild für die Startseite, Farbschema „Kunterbunt“
- **Ich wollte:** einen Prompt für Gemini, um das Startseitenbild selbst zu erstellen. Dann sollte mein Gemini-Bild eingebaut werden. Außerdem sollte „(Spaß)“ bei Einhorn und Regenbogen weg, es sollte ein neues, komplett buntes Farbschema dazukommen, und ich wollte prüfen lassen, ob der neue Titel wirklich online ist.
- **Claude hat:** einen Prompt geschrieben (Flat Design, Farben der Website, kein Text, keine Personen, keine Logos). Mein Bild hat Claude von 1,5 MB auf 113 KB verkleinert (JPG, 1200 Pixel breit), auf der Startseite mit Alt-Text eingebaut und auf der Quellen-Seite als „erstellt mit Google Gemini“ gekennzeichnet. Das große Original wird nicht hochgeladen. Claude hat „(Spaß)“ entfernt und das Schema „Kunterbunt 🎉“ ergänzt (bunte Kopfzeile, verschieden farbige und leicht schräge Karten, helles Konfetti im Hintergrund). Die Vorschau-Seite und die drei nicht gewählten Zeichnungen hat Claude gelöscht. Claude hat außerdem geprüft, dass der neue Titel online ist. Dass ich noch den alten Titel gesehen habe, lag am Zwischenspeicher (Cache) des Browsers.

## 05.11.2026 – Projektname „Tablet statt Tonne“
- **Ich wollte:** Mit „Titel“ war eigentlich der Projektname „Papier-Projekt“ gemeint, nicht die Überschrift der Startseite. Die alte Überschrift sollte zurück, und Claude sollte Vorschläge für einen neuen Projektnamen machen. Ich habe „Tablet statt Tonne“ gewählt.
- **Claude hat:** die alte Startseiten-Überschrift „Digitale Schule – und trotzdem viel Papier?“ wiederhergestellt, mehrere Namensvorschläge gemacht und den Namen „Tablet statt Tonne“ überall eingesetzt: oben links auf allen Seiten, im Browser-Tab, in der Fußzeile, auf der Quellen-Seite und in der `CLAUDE.md`. Ein paar Sätze, die durch das Ersetzen grammatikalisch falsch geworden waren, hat Claude korrigiert. Damit alles auf iPad-Breite in eine Zeile passt, hat Claude die Kopfzeile etwas kompakter gemacht. Der Link (…/papier-projekt/) bleibt gleich, damit der QR-Code weiter funktioniert.
