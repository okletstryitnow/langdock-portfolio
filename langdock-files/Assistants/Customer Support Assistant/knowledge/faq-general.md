# FlowSync FAQ – Häufig gestellte Fragen

**Letzte Aktualisierung:** 28. November 2024

---

## Login & Zugang

### Ich habe mein Passwort vergessen. Was kann ich tun?

1. Gehe zu [flowsync.io/login](https://flowsync.io/login)
2. Klicke auf "Passwort vergessen?"
3. Gib deine E-Mail-Adresse ein
4. Du erhältst innerhalb von 5 Minuten eine E-Mail mit einem Reset-Link
5. Klicke auf den Link und vergib ein neues Passwort

**Hinweis:** Der Reset-Link ist 24 Stunden gültig. Prüfe auch deinen Spam-Ordner, falls keine E-Mail ankommt.

---

### Ich kann mich nicht einloggen, obwohl mein Passwort korrekt ist.

Mögliche Ursachen und Lösungen:

1. **Browser-Cache:** Lösche Cookies und Cache für flowsync.io
   - Chrome: Einstellungen → Datenschutz → Browserdaten löschen
   - Firefox: Einstellungen → Datenschutz → Cookies und Website-Daten

2. **Caps Lock:** Überprüfe, ob Caps Lock aktiviert ist

3. **Anderer Browser:** Versuche, dich mit einem anderen Browser anzumelden

4. **2FA-Probleme:** Falls 2FA aktiviert ist, stelle sicher, dass deine Authenticator-App die aktuelle Zeit synchronisiert hat

5. **Account gesperrt:** Nach 5 Fehlversuchen wird dein Account für 15 Minuten gesperrt

Wenn das Problem weiterhin besteht, kontaktiere support@flowsync.io.

---

### Wie aktiviere ich 2FA (Zwei-Faktor-Authentifizierung)?

1. Gehe zu **Settings → Security → Two-Factor Authentication**
2. Klicke auf "Enable 2FA"
3. Scanne den QR-Code mit deiner Authenticator-App (z.B. Google Authenticator, Authy, 1Password)
4. Gib den 6-stelligen Code zur Bestätigung ein
5. **Wichtig:** Speichere die angezeigten Backup-Codes sicher ab

**Empfehlung:** Wir empfehlen allen Nutzern, 2FA zu aktivieren. Für Enterprise-Accounts kann 2FA von Admins erzwungen werden.

---

## Billing & Subscriptions

### Wie upgrade ich von Starter zu Pro?

1. Gehe zu **Settings → Billing → Subscription**
2. Klicke auf "Upgrade Plan"
3. Wähle "Pro" aus
4. Bestätige die Zahlungsmethode
5. Das Upgrade ist sofort aktiv

**Prorated Billing:** Du zahlst nur den anteiligen Differenzbetrag für den Rest des aktuellen Abrechnungszeitraums.

---

### Wo finde ich meine Rechnungen?

Alle Rechnungen findest du unter:

**Settings → Billing → Invoice History**

Von dort kannst du:
- Alle vergangenen Rechnungen als PDF herunterladen
- Rechnungsdaten (Adresse, USt-IdNr.) ändern
- Automatische Rechnungszustellung per E-Mail konfigurieren

**Hinweis:** Rechnungen werden automatisch am ersten Werktag nach jeder Abrechnung per E-Mail versendet.

---

### Kann ich monatlich kündigen?

Ja, du kannst jederzeit zum Ende des aktuellen Abrechnungszeitraums kündigen:

1. Gehe zu **Settings → Billing → Subscription**
2. Klicke auf "Cancel Subscription"
3. Wähle einen Kündigungsgrund (hilft uns, besser zu werden)
4. Bestätige die Kündigung

**Wichtig:**
- Bei monatlicher Zahlung: Kündigung zum Monatsende
- Bei jährlicher Zahlung: Kündigung zum Ende des Jahres (keine anteilige Erstattung)
- Deine Daten bleiben 90 Tage nach Kündigung erhalten (für Re-Aktivierung)

---

### Was passiert mit meinen Daten nach Kündigung?

Nach Kündigung deines Accounts:

| Zeitraum | Zustand |
|----------|---------|
| Sofort nach Kündigung | Lesezugriff auf alle Daten |
| Nach 30 Tagen | Kein Login mehr möglich, Daten gespeichert |
| Nach 90 Tagen | Daten werden dauerhaft gelöscht |

**Datenexport:** Du kannst jederzeit vor der Löschung alle Daten exportieren unter Settings → Data → Export All Data.

---

## Features & Funktionen

### Wie erstelle ich ein neues Projekt?

1. Klicke auf das **"+" Symbol** in der linken Sidebar oder
2. Gehe zu **Projects → New Project**
3. Gib einen Projektnamen ein
4. Optional: Wähle eine Farbe und ein Icon
5. Optional: Nutze ein Template für vordefinierte Spalten und Tasks
6. Klicke auf "Create Project"

**Tipp:** Nutze Projekt-Templates für schnelleres Setup. Wir bieten vorgefertigte Templates für Agile, Marketing, Kundenprojekte und mehr.

---

### Kann ich Tasks anderen Usern zuweisen?

Ja, es gibt mehrere Wege:

**Methode 1: Im Task**
1. Öffne den Task
2. Klicke auf das Avatar-Symbol neben "Assignee"
3. Wähle einen Benutzer aus dem Dropdown

**Methode 2: Drag & Drop**
- In der Board-Ansicht: Ziehe den Task auf den Avatar eines Teammitglieds in der Sidebar

**Methode 3: Tastenkürzel**
- Im geöffneten Task: Drücke `A` und tippe den Namen

**Hinweis:** Der zugewiesene Benutzer erhält automatisch eine Benachrichtigung (sofern nicht deaktiviert).

---

### Wie funktioniert die Zeiterfassung?

FlowSync bietet integrierte Zeiterfassung:

**Timer starten:**
1. Öffne einen Task
2. Klicke auf das Uhr-Symbol oder den "Start Timer" Button
3. Der Timer läuft, bis du auf "Stop" klickst

**Manuelle Zeiterfassung:**
1. Öffne einen Task
2. Klicke auf "Add Time Entry"
3. Gib Datum, Dauer und optional eine Beschreibung ein

**Zeiten einsehen:**
- Im Task: Alle Zeiteinträge sind unter dem Task sichtbar
- Übersicht: Gehe zu **Reports → Time Tracking** für Wochen-/Monatsansichten
- Export: Zeitdaten können als CSV oder Excel exportiert werden

---

### Kann ich wiederkehrende Tasks anlegen?

Ja, diese Funktion ist ab dem **Pro-Tier** verfügbar:

1. Erstelle oder öffne einen Task
2. Klicke auf das Kalender-Symbol oder "Set Recurrence"
3. Wähle die Frequenz:
   - Täglich
   - Wöchentlich (mit Tagesauswahl)
   - Alle 2 Wochen
   - Monatlich (Datum oder Wochentag)
   - Jährlich
   - Benutzerdefiniert
4. Setze optional ein Enddatum oder maximale Anzahl
5. Speichern

**Verhalten:** Ein neuer Task wird automatisch erstellt, sobald der vorherige abgeschlossen wird oder zum definierten Zeitpunkt.

---

### Wie exportiere ich meine Daten?

FlowSync bietet verschiedene Export-Optionen:

**Einzelne Projekte:**
1. Öffne das Projekt
2. Klicke auf das Zahnrad-Symbol → Export
3. Wähle Format: CSV, Excel oder JSON

**Time-Tracking-Daten:**
1. Gehe zu Reports → Time Tracking
2. Wähle den Zeitraum
3. Klicke auf "Export" → CSV oder Excel

**Vollständiger Datenexport:**
1. Gehe zu Settings → Data → Export All Data
2. Wähle, welche Daten exportiert werden sollen
3. Du erhältst einen Download-Link per E-Mail (kann bis zu 24h dauern bei großen Datenmengen)

---

## Integrationen

### Welche Tools unterstützt FlowSync?

FlowSync bietet native Integrationen mit:

| Tool | Funktionen |
|------|------------|
| **Slack** | Notifications, /flowsync Commands, Thread-Sync |
| **Jira** | Bidirektionale Synchronisation (Enterprise) |
| **GitHub** | Commit-Tracking, PR-Verlinkung, Auto-Close |
| **Google Calendar** | Deadline-Sync, Time-Blocking |
| **Zapier** | 1000+ App-Verbindungen |

Über **Zapier** kannst du FlowSync mit praktisch jedem Tool verbinden.

**API:** Für Custom-Integrationen steht eine REST-API zur Verfügung (Pro und Enterprise).

---

### Wie verbinde ich Slack?

1. Gehe zu **Settings → Integrations → Slack**
2. Klicke auf "Connect Slack"
3. Du wirst zu Slack weitergeleitet
4. Wähle deinen Workspace und klicke "Allow"
5. Zurück in FlowSync: Wähle einen Default-Channel für Notifications
6. Konfiguriere, welche Events Notifications auslösen sollen

**Empfohlene Einstellungen:**
- Notifications für: Task assigned, Task completed, @Mentions
- Slash-Commands aktivieren
- Thread-Sync für ausgewählte Channels

---

### Warum kommen keine Notifications in Slack an?

Überprüfe folgende Punkte:

1. **FlowSync-App im Channel:** Die FlowSync-App muss zum Channel hinzugefügt sein
   - Tippe `/invite @FlowSync` im gewünschten Channel

2. **Notification-Einstellungen:** Prüfe unter Settings → Integrations → Slack, ob Notifications aktiviert sind

3. **Event-Typen:** Stelle sicher, dass der gewünschte Event-Typ (z.B. "Task completed") aktiviert ist

4. **Reconnect:** Trenne die Integration und verbinde neu:
   - Settings → Integrations → Slack → Disconnect
   - Warte 30 Sekunden
   - Connect erneut

5. **Known Issue:** Aktuell gibt es ein bekanntes Problem mit Verzögerungen von 2-3 Minuten. Wir arbeiten daran (siehe Known Issues).

Falls das Problem weiterhin besteht, kontaktiere support@flowsync.io mit einem Screenshot deiner Slack-Integration-Seite.

---

## Noch Fragen?

Wenn deine Frage hier nicht beantwortet wurde:

- **Help Center:** help.flowsync.io
- **E-Mail:** support@flowsync.io
- **In-App-Chat:** Klicke auf das Chat-Symbol (Pro & Enterprise)
- **Community:** community.flowsync.io

**Response-Zeiten:**
| Tier | E-Mail | Chat |
|------|--------|------|
| Starter | 48h | – |
| Pro | 24h | Echtzeit (Mo-Fr, 9-18 Uhr) |
| Enterprise | 4h | Echtzeit + Telefon |
