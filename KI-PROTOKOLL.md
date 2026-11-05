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
