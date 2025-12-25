# FlowSync Integration Guides

Diese Dokumentation erklärt die Einrichtung und Nutzung aller verfügbaren Integrationen.

---

## Slack Integration

### Übersicht

Die Slack-Integration ermöglicht:
- Benachrichtigungen zu Task-Updates in Slack-Channels
- Erstellen von Tasks direkt aus Slack-Nachrichten
- `/flowsync`-Commands für schnelle Aktionen
- Thread-Synchronisation für Diskussionen

### Voraussetzungen

- FlowSync Pro oder Enterprise Tier
- Slack-Workspace mit Admin- oder Owner-Rechten
- Mindestens ein FlowSync-Projekt

### Einrichtung

**Schritt 1: Integration starten**
1. Gehe zu FlowSync → Settings → Integrations
2. Klicke auf "Slack" in der Liste verfügbarer Integrationen
3. Klicke auf "Connect Slack"

**Schritt 2: Slack autorisieren**
1. Du wirst zu Slack weitergeleitet
2. Wähle den Workspace aus, den du verbinden möchtest
3. Klicke auf "Allow" um FlowSync Berechtigungen zu erteilen

**Schritt 3: Channels konfigurieren**
1. Zurück in FlowSync, wähle einen Default-Channel für Notifications
2. Optional: Konfiguriere Channel-Zuordnungen pro Projekt
3. Aktiviere gewünschte Notification-Typen:
   - Task erstellt
   - Task abgeschlossen
   - Kommentar hinzugefügt
   - Due Date erreicht

**Schritt 4: Slash-Commands aktivieren**
1. In Slack: Tippe `/flowsync help` um verfügbare Commands zu sehen
2. Commands benötigen keine zusätzliche Konfiguration

**Schritt 5: Thread-Sync einrichten (optional)**
1. In FlowSync Settings → Slack → Advanced
2. Aktiviere "Sync Slack Threads to Task Comments"
3. Wähle, welche Channels synchronisiert werden sollen

### Verfügbare Slash-Commands

| Command | Beschreibung |
|---------|--------------|
| `/flowsync create [Titel]` | Erstellt neuen Task |
| `/flowsync list` | Zeigt deine offenen Tasks |
| `/flowsync search [Begriff]` | Sucht nach Tasks |
| `/flowsync timer start` | Startet Timer auf letztem Task |
| `/flowsync timer stop` | Stoppt laufenden Timer |
| `/flowsync help` | Zeigt alle Commands |

### Troubleshooting

**Problem: Notifications kommen nicht an**
1. Prüfe, ob FlowSync-App im Channel hinzugefügt ist (in Slack: `/invite @FlowSync`)
2. Kontrolliere Notification-Einstellungen in FlowSync Settings
3. Verifiziere, dass Slack-Integration "Connected" zeigt

**Problem: Commands funktionieren nicht**
1. Stelle sicher, dass du in Slack eingeloggt bist
2. Prüfe, ob du Mitglied des FlowSync-Workspaces bist
3. Versuche, die Integration zu trennen und neu zu verbinden

**Problem: Threads werden nicht synchronisiert**
1. Thread-Sync funktioniert nur für Messages in konfigurierten Channels
2. Der Task muss bereits in FlowSync existieren
3. Messages müssen mit dem Task-Link verknüpft sein

---

## Jira Integration

### Übersicht

Die Jira-Integration bietet:
- Bidirektionale Synchronisation von Issues/Tasks
- Status-Mapping zwischen FlowSync und Jira
- Automatische Verlinkung von Issues
- Sync-History für Nachverfolgung

### Voraussetzungen

- FlowSync Pro oder Enterprise Tier
- Jira Cloud (Server/Data Center nicht unterstützt)
- Jira-Admin-Rechte oder Project-Admin-Rechte

### Einrichtung

**Schritt 1: Integration starten**
1. Gehe zu FlowSync → Settings → Integrations → Jira
2. Klicke auf "Connect Jira Cloud"

**Schritt 2: Jira-Instanz verbinden**
1. Gib deine Jira-Instanz-URL ein (z.B. `yourcompany.atlassian.net`)
2. Du wirst zu Atlassian weitergeleitet
3. Melde dich an und autorisiere FlowSync

**Schritt 3: Projekt-Mapping konfigurieren**
1. Zurück in FlowSync, siehst du eine Liste deiner Jira-Projekte
2. Wähle, welche Jira-Projekte mit welchen FlowSync-Projekten verknüpft werden
3. Du kannst 1:1 oder 1:n Mappings erstellen

**Schritt 4: Status-Mapping definieren**
1. Klicke auf "Configure Status Mapping"
2. Ordne FlowSync-Status den Jira-Status zu:
   - FlowSync "To Do" → Jira "Open"
   - FlowSync "In Progress" → Jira "In Progress"
   - FlowSync "Review" → Jira "In Review"
   - FlowSync "Done" → Jira "Done"

**Schritt 5: Sync-Richtung wählen**
1. Wähle Sync-Modus:
   - **Bidirektional:** Änderungen fließen in beide Richtungen
   - **Jira → FlowSync:** Nur Import von Jira
   - **FlowSync → Jira:** Nur Export zu Jira
2. Aktiviere automatischen Sync (empfohlen) oder manuellen Sync

**Schritt 6: Field-Mapping (optional)**
1. Konfiguriere, welche Felder synchronisiert werden:
   - Titel, Beschreibung (immer synced)
   - Priority, Labels (optional)
   - Custom Fields (Pro: ausgewählte, Enterprise: alle)

### Sync-Verhalten

- **Neue Issues:** Werden automatisch als Tasks erstellt
- **Updates:** Änderungen werden innerhalb von 30 Sekunden synchronisiert
- **Konflikte:** Letzter Schreiber gewinnt (mit Changelog)
- **Gelöschte Items:** Werden als "archived" markiert, nicht gelöscht

### Troubleshooting

**Problem: Tickets werden nicht synchronisiert**
1. Prüfe, ob das Jira-Projekt im Mapping enthalten ist
2. Kontrolliere, ob der Jira-User Leserechte auf das Projekt hat
3. Überprüfe Sync-Logs unter Settings → Integrations → Jira → Logs

**Problem: Status-Mapping funktioniert nicht**
1. Stelle sicher, dass alle Jira-Workflow-Status gemappt sind
2. Prüfe, ob Workflow-Transitionen erlaubt sind

**Problem: "Unauthorized" Error**
1. Token ist möglicherweise abgelaufen
2. Trenne die Integration und verbinde neu
3. Stelle sicher, dass du Admin-Rechte in Jira hast

---

## GitHub Integration

### Übersicht

Die GitHub-Integration ermöglicht:
- Verknüpfung von Commits mit FlowSync-Tasks
- Automatisches Schließen von Tasks bei PR-Merge
- Branch-Tracking pro Task
- Commit-Aktivität in Task-Timeline

### Voraussetzungen

- FlowSync Pro oder Enterprise Tier
- GitHub-Repository (Organization oder Personal)
- Repository Admin-Rechte

### Einrichtung

**Schritt 1: GitHub App installieren**
1. Gehe zu FlowSync → Settings → Integrations → GitHub
2. Klicke auf "Install GitHub App"
3. Du wirst zu GitHub weitergeleitet

**Schritt 2: Repositories auswählen**
1. Wähle, ob alle Repositories oder nur bestimmte verbunden werden
2. Für Organisationen: Wähle die Organisation aus
3. Klicke auf "Install"

**Schritt 3: Repository-Mapping**
1. Zurück in FlowSync, siehst du verbundene Repositories
2. Verknüpfe Repositories mit FlowSync-Projekten
3. Ein Repository kann mehreren Projekten zugeordnet werden

**Schritt 4: Branch-Naming konfigurieren**
1. Definiere Branch-Naming-Convention:
   - Standard: `feature/TASK-123-beschreibung`
   - Flexibel: `*TASK-123*` matcht überall
2. FlowSync erkennt Task-IDs automatisch in Branch-Namen

**Schritt 5: Auto-Close konfigurieren**
1. Aktiviere "Close task when PR is merged"
2. Wähle, welcher Status bei Merge gesetzt wird
3. Optional: Nur wenn PR-Branch die Task-ID enthält

### Verwendung

**Commits verlinken:**
- Nutze Task-ID in Commit-Message: `Fix login bug [FLOW-123]`
- Oder: `FLOW-123: Implement feature`

**Pull Requests:**
- PRs mit Task-ID werden automatisch verknüpft
- PR-Status (open, merged, closed) wird angezeigt

### Troubleshooting

**Problem: Commits werden nicht erkannt**
1. Prüfe, ob das Repository verbunden ist
2. Stelle sicher, dass Task-ID im richtigen Format ist (FLOW-123)
3. Webhook muss aktiv sein (GitHub → Settings → Webhooks)

**Problem: Auto-linking funktioniert nicht**
1. Branch-Naming-Pattern prüfen
2. Repository muss mit dem richtigen Projekt verknüpft sein

**Problem: Webhook liefert 401**
1. GitHub App-Token ist abgelaufen
2. Reinstalliere die GitHub App
3. Prüfe Repository-Berechtigungen

---

## Google Calendar Integration

### Übersicht

Die Google Calendar-Integration bietet:
- Synchronisation von Task-Deadlines zu Google Calendar
- Erstellen von Tasks aus Kalender-Events
- Time-Blocking für geplante Arbeit
- Bidirektionale Updates

### Voraussetzungen

- FlowSync Pro oder Enterprise Tier
- Google Workspace oder persönlicher Google-Account
- Kalenderzugriff

### Einrichtung

**Schritt 1: Google-Konto verbinden**
1. Gehe zu FlowSync → Settings → Integrations → Google Calendar
2. Klicke auf "Connect Google Account"
3. Wähle dein Google-Konto aus
4. Erlaube FlowSync Zugriff auf deinen Kalender

**Schritt 2: Kalender auswählen**
1. Wähle, welcher Kalender verwendet werden soll
2. Du kannst einen bestehenden Kalender oder einen neuen "FlowSync Tasks"-Kalender nutzen

**Schritt 3: Sync-Optionen konfigurieren**
1. **Tasks → Kalender:**
   - Alle Tasks mit Due Date synchronisieren
   - Nur Tasks, die mir zugewiesen sind
   - Nur bestimmte Projekte
2. **Kalender → Tasks:**
   - Events mit bestimmtem Label als Tasks erstellen
   - Time-Entries automatisch erstellen

**Schritt 4: Event-Details konfigurieren**
1. Wähle, wie Tasks im Kalender erscheinen:
   - Titel: Task-Titel oder Projekt + Task
   - Dauer: Estimated Hours oder Standard (1h)
   - Farbe: Projektfarbe oder Status-Farbe

### Troubleshooting

**Problem: Events erscheinen nicht**
1. Prüfe, ob Task ein Due Date hat
2. Kontrolliere Sync-Filtereinstellungen
3. Kalender-Berechtigung könnte widerrufen sein

---

## Zapier Integration

### Übersicht

Die Zapier-Integration verbindet FlowSync mit 5000+ Apps ohne Code.

### Voraussetzungen

- FlowSync Starter oder höher
- Zapier-Account (Free oder Paid)

### Einrichtung

**Schritt 1: FlowSync auf Zapier finden**
1. Gehe zu zapier.com und logge dich ein
2. Suche nach "FlowSync" in der App-Suche
3. Klicke auf "Connect"

**Schritt 2: API-Key generieren**
1. In FlowSync: Settings → Integrations → API
2. Klicke auf "Generate Zapier Key"
3. Kopiere den Key und füge ihn in Zapier ein

**Schritt 3: Zap erstellen**
1. Wähle Trigger (z.B. "New Task in FlowSync")
2. Wähle Action-App (z.B. "Create Trello Card")
3. Konfiguriere Field-Mapping
4. Aktiviere den Zap

### Verfügbare Triggers

| Trigger | Beschreibung |
|---------|--------------|
| New Task | Wenn ein Task erstellt wird |
| Task Completed | Wenn ein Task abgeschlossen wird |
| New Time Entry | Wenn Zeit gebucht wird |
| New Comment | Wenn ein Kommentar hinzugefügt wird |
| Task Updated | Wenn ein Task geändert wird |

### Verfügbare Actions

| Action | Beschreibung |
|--------|--------------|
| Create Task | Neuen Task erstellen |
| Update Task | Bestehenden Task aktualisieren |
| Add Comment | Kommentar zu Task hinzufügen |
| Create Time Entry | Zeit buchen |
| Find Task | Task suchen |

### Beispiel-Zaps

- **Slack → FlowSync:** Neue Slack-Messages mit Emoji-Reaktion als Task erstellen
- **Google Forms → FlowSync:** Formular-Eingaben als Tasks anlegen
- **FlowSync → Google Sheets:** Abgeschlossene Tasks in Spreadsheet loggen
- **Email → FlowSync:** Emails mit bestimmtem Label als Tasks erstellen

---

## Allgemeine Tipps

### Performance

- Integrationen prüfen alle 30 Sekunden auf Updates
- Für Echtzeit-Updates: Webhooks nutzen
- Bei vielen Integrationen: Enterprise-Tier für höhere Rate Limits

### Sicherheit

- Alle Integrationen nutzen OAuth 2.0
- Tokens können jederzeit widerrufen werden
- Audit-Log zeigt alle Integration-Aktivitäten

### Support

Bei Problemen mit Integrationen:
- **Help Center:** help.flowsync.io/integrations
- **Email:** support@flowsync.io
- **Chat:** In-App-Chat (Pro/Enterprise)
