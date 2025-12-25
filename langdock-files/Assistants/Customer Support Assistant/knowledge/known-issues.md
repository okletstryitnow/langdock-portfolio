# Known Issues

Aktuelle bekannte Probleme und deren Status. Letzte Aktualisierung: 02. Dezember 2024

---

## KI-2024-047: Time-Tracking-Widget zeigt falsche Summen bei Zeitzonenwechsel

**Status:** In Bearbeitung
**Betroffene Versionen:** v2.8.x
**Priorität:** High
**Erstmeldung:** 20. November 2024

**Beschreibung:**
Wenn ein Benutzer die Zeitzone wechselt (z.B. auf Reisen oder bei manueller Änderung in den Einstellungen), werden die Tages- und Wochensummen im Time-Tracking-Widget falsch berechnet. Die Einzeleinträge sind korrekt, aber die Aggregation berücksichtigt den Zeitzonenoffset nicht richtig.

**Betroffene Nutzer:**
- Nutzer, die während einer Tracking-Session die Zeitzone wechseln
- Nutzer mit Einträgen aus verschiedenen Zeitzonen in einer Woche

**Workaround:**
1. Zeitzone vor Beginn der Arbeit korrekt einstellen
2. Alternativ: Reports → Time Tracking nutzen – dort werden Summen korrekt berechnet
3. Bei bereits falschen Summen: Browser-Cache leeren und neu laden

**ETA Fix:** Version 2.8.2 (geplant: 15. Dezember 2024)

---

## KI-2024-046: Slack-Notifications verzögern sich um 2-3 Minuten

**Status:** Workaround verfügbar
**Betroffene Versionen:** v2.7.x, v2.8.x
**Priorität:** Medium
**Erstmeldung:** 15. November 2024

**Beschreibung:**
Slack-Benachrichtigungen für Task-Updates, Kommentare und @Mentions werden mit einer Verzögerung von 2-3 Minuten zugestellt. Real-time-Notifications funktionieren nicht wie erwartet.

**Ursache:**
Das Problem liegt an einer Queue-Optimierung, die für hohe Last ausgelegt wurde, aber auch bei niedriger Last zu Verzögerungen führt.

**Workaround:**
- Für zeitkritische Updates: In-App-Notifications oder E-Mail nutzen
- Slack-App regelmäßig aktualisieren (Pull-to-Refresh auf Mobile)

**ETA Fix:** Version 2.8.1 (geplant: 10. Dezember 2024)

---

## KI-2024-045: Export zu Excel produziert fehlerhafte Umlaute

**Status:** Geplanter Fix
**Betroffene Versionen:** v2.8.0
**Priorität:** Medium
**Erstmeldung:** 22. November 2024

**Beschreibung:**
Beim Export von Projekten oder Time-Tracking-Daten nach Excel (.xlsx) werden deutsche Umlaute (ä, ö, ü, ß) und andere Sonderzeichen falsch dargestellt. Statt "Müller" erscheint "MÃ¼ller".

**Betroffene Exporte:**
- Project Export (Excel)
- Time Tracking Export (Excel)
- Task List Export (Excel)

**Workaround:**
1. Export als CSV statt Excel wählen
2. CSV in Excel öffnen mit Encoding-Option "UTF-8"
3. Alternativ: Google Sheets für den Import nutzen

**ETA Fix:** Version 2.8.2 (geplant: 15. Dezember 2024)

---

## KI-2024-044: Mobile App – Push-Notifications funktionieren nicht auf Android 15

**Status:** In Bearbeitung
**Betroffene Versionen:** Mobile App v3.1.x auf Android 15
**Priorität:** High
**Erstmeldung:** 18. November 2024

**Beschreibung:**
Auf Geräten mit Android 15 werden Push-Notifications nicht zugestellt. Die App zeigt keine Benachrichtigungen für Task-Zuweisungen, @Mentions oder Deadline-Erinnerungen.

**Betroffene Geräte:**
- Alle Android-Geräte mit Android 15
- Pixel 8/8 Pro mit Android 15 Beta waren zuerst betroffen

**Ursache:**
Android 15 hat Änderungen an der Notification-Permission-API, die ein App-Update erfordern.

**Workaround:**
1. App-Notifications in Android-Einstellungen manuell aktivieren:
   - Einstellungen → Apps → FlowSync → Benachrichtigungen → Alle aktivieren
2. App beenden und neu starten
3. Falls weiterhin nicht funktioniert: App deinstallieren und neu installieren

**ETA Fix:** Mobile App v3.2.0 (im Play Store ab: 05. Dezember 2024)

---

## KI-2024-043: Gantt-Chart lädt nicht bei Projekten mit >500 Tasks

**Status:** Workaround verfügbar
**Betroffene Versionen:** v2.8.x
**Priorität:** Medium
**Erstmeldung:** 10. November 2024

**Beschreibung:**
Die Timeline-Ansicht (Gantt-Chart) lädt nicht oder zeigt einen weißen Bildschirm bei Projekten mit mehr als 500 Tasks. Der Browser friert teilweise ein.

**Workaround:**
1. Filter anwenden, um die Anzahl der angezeigten Tasks zu reduzieren:
   - Nur offene Tasks anzeigen
   - Zeitraum einschränken (z.B. nur nächste 30 Tage)
2. Alternativ: List-View oder Board-View für große Projekte nutzen
3. Projekt in Sub-Projekte aufteilen

**ETA Fix:** Version 2.9.0 (geplant: Januar 2025) – Virtualisiertes Rendering

---

## KI-2024-042: Jira-Sync dupliziert Kommentare gelegentlich

**Status:** In Bearbeitung
**Betroffene Versionen:** v2.7.x, v2.8.x (Enterprise)
**Priorität:** Medium
**Erstmeldung:** 05. November 2024

**Beschreibung:**
Bei bidirektionalem Jira-Sync werden Kommentare gelegentlich dupliziert. Ein Kommentar erscheint dann 2-3 Mal im Task.

**Ursache:**
Race Condition bei simultanen Updates in beiden Systemen.

**Betroffene Konfigurationen:**
- Bidirektionaler Sync aktiviert
- Kommentar-Sync aktiviert
- Hohe Aktivität auf dem Issue/Task

**Workaround:**
1. Duplikate manuell löschen
2. Bei häufigem Auftreten: Sync-Richtung temporär auf "Jira → FlowSync" ändern
3. Kommentar-Sync deaktivieren (nur Felder synchronisieren)

**ETA Fix:** Version 2.8.2 (geplant: 15. Dezember 2024)

---

## KI-2024-041: Dashboard lädt langsam bei >50 Projekten

**Status:** Geplanter Fix
**Betroffene Versionen:** v2.8.x
**Priorität:** Low
**Erstmeldung:** 01. November 2024

**Beschreibung:**
Das Haupt-Dashboard lädt bei Workspaces mit mehr als 50 aktiven Projekten langsam (>5 Sekunden). Bei >100 Projekten kann es zu Timeouts kommen.

**Workaround:**
1. Archiviere inaktive Projekte, um die Anzahl aktiver Projekte zu reduzieren
2. Dashboard-Widgets reduzieren (Settings → Dashboard → Widgets)
3. Direkten Projekt-Zugriff über Sidebar nutzen statt Dashboard

**ETA Fix:** Version 2.9.0 (geplant: Januar 2025) – Dashboard-Optimierung

---

## KI-2024-040: Keyboard-Shortcut Konflikte in Safari

**Status:** Workaround verfügbar
**Betroffene Versionen:** v2.8.x
**Priorität:** Low
**Erstmeldung:** 28. Oktober 2024

**Beschreibung:**
Einige FlowSync-Keyboard-Shortcuts funktionieren in Safari nicht oder lösen Browser-Funktionen aus:
- `Cmd+K` öffnet Safari-Downloads statt FlowSync-Suche
- `Cmd+D` fügt Bookmark hinzu statt Task zu duplizieren

**Workaround:**
1. Chrome oder Firefox verwenden (vollständige Shortcut-Unterstützung)
2. Shortcuts über das `?`-Menü anzeigen und alternative Shortcuts nutzen
3. Shortcuts über Click-Aktionen ausführen

**ETA Fix:** Version 2.9.0 (geplant: Januar 2025) – Safari-spezifische Shortcuts

---

## KI-2024-039: Datei-Uploads >20MB scheitern sporadisch

**Status:** Workaround verfügbar
**Betroffene Versionen:** v2.7.x, v2.8.x
**Priorität:** Medium
**Erstmeldung:** 25. Oktober 2024

**Beschreibung:**
Datei-Uploads zwischen 20MB und 25MB (dem Limit für Pro-Tier) scheitern sporadisch mit der Fehlermeldung "Upload failed. Please try again."

**Ursache:**
Timeout bei langsamen Verbindungen während des Upload-Prozesses.

**Workaround:**
1. Datei komprimieren (ZIP) und erneut hochladen
2. Upload zu Zeiten mit besserer Netzwerkverbindung wiederholen
3. Datei extern hosten (Google Drive, Dropbox) und Link einfügen

**ETA Fix:** Version 2.8.2 (geplant: 15. Dezember 2024) – Chunked Upload

---

## KI-2024-038: SSO-Logout synchronisiert nicht sofort

**Status:** In Bearbeitung
**Betroffene Versionen:** v2.8.x (Enterprise mit SAML SSO)
**Priorität:** High
**Erstmeldung:** 20. Oktober 2024

**Beschreibung:**
Bei Logout über den Identity Provider (Okta, Azure AD, OneLogin) bleibt die FlowSync-Session für bis zu 15 Minuten aktiv. Single-Logout (SLO) propagiert nicht sofort.

**Sicherheitsimplikation:**
Benutzer, die über IdP deaktiviert werden, können kurzfristig noch Zugriff haben.

**Workaround:**
1. Session-Timeout in FlowSync auf 15 Minuten reduzieren (Enterprise Admin-Panel)
2. Bei sicherheitskritischen Deaktivierungen: Admin kann Session manuell beenden unter Users → [User] → "End All Sessions"

**ETA Fix:** Version 2.8.1 (geplant: 10. Dezember 2024)

---

## Behobene Issues (letzte 30 Tage)

| ID | Beschreibung | Behoben in |
|----|--------------|------------|
| KI-2024-037 | Filter-Presets werden nicht gespeichert | v2.8.0 |
| KI-2024-036 | Falsches Datum bei Recurring Tasks (Monatsende) | v2.8.0 |
| KI-2024-035 | Mobile App Crash bei großen Projekten | Mobile v3.1.2 |
| KI-2024-034 | API Rate Limit Counter Reset-Bug | v2.7.3 |

---

## Issue melden

Neues Problem gefunden? Melde es uns:

- **E-Mail:** support@flowsync.io
- **In-App:** Hilfe → Problem melden
- **Status-Page:** status.flowsync.io

Bitte angeben:
- FlowSync-Version (Settings → About)
- Browser und Version
- Schritte zur Reproduktion
- Screenshots/Screenrecording wenn möglich
