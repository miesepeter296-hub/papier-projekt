# Projektregeln: Papier-Projekt

Diese Datei liest Claude zu Beginn jeder Sitzung. Hier stehen die festen Regeln für das Projekt.

## Worum geht es?
- Schulprojekt: eine Website zum Thema Papierverbrauch an unserer Schule.
- Die Schule präsentiert sich als sehr digital, verbraucht aber trotzdem viel Papier. Die Website macht darauf aufmerksam und zeigt konkrete Vorschläge zum Papiersparen.
- Zielgruppe: Schülerinnen und Schüler, Lehrkräfte, Schulleitung.
- Sprache: Deutsch, locker, aber nicht belehrend.

## Über die Person, mit der Claude arbeitet
- Anfänger, arbeitet unter Windows 11.
- Jeden Schritt kurz und einfach erklären.
- Bei unklaren Aussagen nachfragen statt raten.
- Vor jeder Installation fragen.
- In kleinen Schritten arbeiten. Nach jedem fertigen Schritt einen Git-Commit mit verständlicher deutscher Nachricht machen und erklären, wie man sich das Ergebnis im Browser ansieht.

## Technik
- Nur HTML, CSS und JavaScript, ohne Framework und ohne Build-Schritt.
- Hosting: GitHub Pages (Repository `papier-projekt`, Account `miesepeter296-hub`).
- Alles muss kostenlos sein.

## Darstellung und Barrierefreiheit
- Die Seite wird in der Schule auf iPads (Safari) gezeigt. Sie muss auf Tablet und Handy gut aussehen (responsive).
- Gut lesbar: ausreichende Kontraste (mindestens WCAG AA), sinnvolle Alt-Texte für alle Bilder, gut bedienbar per Touch.

## Datenschutz
- Keine Cookies, kein Tracking, keine Analyse-Tools.
- Keine Schriften, Skripte, Bilder oder sonstigen Dateien von fremden Servern (kein CDN, keine Google Fonts). Alles liegt im Repository selbst.
- Keine personenbezogenen Daten.

## Inhalte und Fakten
- **Keine Zahlen über unsere Schule erfinden.** Wo echte Daten fehlen, einen gut sichtbaren Platzhalter wie `[ZAHL FEHLT]` setzen.
- Allgemeine Fakten nur mit Quellenangabe.
- Bilder nur selbst erstellt (z. B. als SVG) oder mit freier Lizenz und Quellenangabe.

## Dokumentation
- Nach jedem Arbeitsschritt einen kurzen Eintrag in `KI-PROTOKOLL.md`: Datum, was gewünscht war, was Claude gemacht hat.
- Git-Identität: Name `miesepeter`, E-Mail ist die anonyme GitHub-Adresse (keine echten Namen oder E-Mails ins Repository schreiben).
