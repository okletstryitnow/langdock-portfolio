# Troubleshooting: Integrationen

Diese Dokumentation hilft bei der Lösung häufiger Probleme mit FlowSync-Integrationen.

---

## Slack-Integration

### Problem: Notifications kommen nicht an

**Symptome:**
- Task-Updates lösen keine Slack-Nachrichten aus
- @Mentions werden nicht in Slack gepostet
- Keine Benachrichtigungen bei Task-Completion

**Mögliche Ursachen:**

1. **FlowSync-App nicht im Channel**
2. **Webhook-URL veraltet**
3. **Notification-Events deaktiviert**
4. **Slack-App-Berechtigungen fehlen**

**Schritt-für-Schritt-Lösung:**

**Schritt 1:** FlowSync-App zum Channel hinzufügen
- Öffne den gewünschten Slack-Channel
- Tippe `/invite @FlowSync` und drücke Enter
- Bestätige die Einladung

**Schritt 2:** Integration neu verbinden
- Gehe zu FlowSync → Settings → Integrations → Slack
- Klicke auf "Reconnect Slack"
- Autorisiere die App erneut in Slack
- Warte 60 Sekunden, bis die neue Verbindung aktiv ist

**Schritt 3:** Notification-Einstellungen prüfen
- In FlowSync: Settings → Integrations → Slack → Notification Settings
- Aktiviere mindestens: "Task assigned to me", "Task completed", "Mentioned in comment"

**Schritt 4:** Test-Notification senden
- Klicke auf "Send Test Notification"
- Prüfe, ob die Nachricht im konfigurierten Channel erscheint

**Noch nicht gelöst?**
Kontaktiere support@flowsync.io mit:
- Screenshot der Slack-Integration-Seite
- Name des betroffenen Channels
- Beispiel eines Events, das keine Notification ausgelöst hat

---

### Problem: Slash-Commands funktionieren nicht (/flowsync)

**Symptome:**
- `/flowsync` wird nicht erkannt
- Fehlermeldung "This slash command failed to run"
- Command wird als normale Nachricht gepostet

**Mögliche Ursachen:**

1. **FlowSync-App nicht installiert**
2. **Workspace hat Slash-Commands eingeschränkt**
3. **Benutzer nicht mit FlowSync verknüpft**
4. **App-Token abgelaufen**

**Schritt-für-Schritt-Lösung:**

**Schritt 1:** App-Installation prüfen
- Gehe zu Slack → Apps → FlowSync
- Falls nicht gefunden: Gehe zu FlowSync → Settings → Integrations → Slack → Connect

**Schritt 2:** Slash-Commands in Slack-Admin prüfen (für Workspace-Admins)
- Slack Admin → Apps → Manage → FlowSync
- Prüfe unter "Permissions", ob Slash-Commands erlaubt sind

**Schritt 3:** FlowSync-Account verknüpfen
- Tippe `/flowsync connect` in Slack
- Folge dem Autorisierungs-Link
- Melde dich in FlowSync an, um die Konten zu verknüpfen

**Schritt 4:** Token erneuern
- In FlowSync: Settings → Integrations → Slack → Disconnect
- Warte 30 Sekunden
- Klicke auf "Connect Slack" und autorisiere neu

**Noch nicht gelöst?**
Kontaktiere support@flowsync.io mit der genauen Fehlermeldung.

---

### Problem: Threads werden nicht synchronisiert

**Symptome:**
- Diskussionen in Slack-Threads erscheinen nicht als Task-Kommentare
- Thread-Sync scheint nicht zu funktionieren
- Nur manche Threads werden synchronisiert

**Mögliche Ursachen:**

1. **Thread-Sync für Channel nicht aktiviert**
2. **Task nicht korrekt verlinkt**
3. **Thread-Sync nur für neue Nachrichten**
4. **Enterprise-Feature**

**Schritt-für-Schritt-Lösung:**

**Schritt 1:** Thread-Sync ist Enterprise-Feature
- Prüfe, ob dein Account Enterprise-Tier hat
- Thread-Sync ist nicht in Starter oder Pro verfügbar

**Schritt 2:** Channel für Thread-Sync aktivieren
- Gehe zu FlowSync → Settings → Integrations → Slack → Advanced
- Aktiviere "Sync Slack Threads to Task Comments"
- Wähle die Channels, die synchronisiert werden sollen

**Schritt 3:** Task korrekt verlinken
- Thread-Sync funktioniert nur, wenn:
  - Die ursprüngliche Nachricht einen FlowSync-Task-Link enthält ODER
  - Die Nachricht von FlowSync als Notification gepostet wurde

**Schritt 4:** Neue Threads testen
- Erstelle einen neuen Task in FlowSync
- Teile den Task-Link in einem konfigurierten Slack-Channel
- Antworte im Thread
- Prüfe, ob der Kommentar im FlowSync-Task erscheint (kann bis zu 2 Minuten dauern)

**Noch nicht gelöst?**
Kontaktiere support@flowsync.io mit Channel-Name und Task-ID.

---

## Jira-Integration

### Problem: Tickets werden nicht synchronisiert

**Symptome:**
- Neue Jira-Issues erscheinen nicht in FlowSync
- Änderungen in FlowSync werden nicht nach Jira übertragen
- Sync scheint "stuck" zu sein

**Mögliche Ursachen:**

1. **Jira-Projekt nicht gemappt**
2. **Sync-Richtung falsch konfiguriert**
3. **Webhook-Problem in Jira**
4. **Rate-Limit erreicht**

**Schritt-für-Schritt-Lösung:**

**Schritt 1:** Projekt-Mapping prüfen
- Gehe zu FlowSync → Settings → Integrations → Jira
- Überprüfe, ob das Jira-Projekt mit einem FlowSync-Projekt verknüpft ist
- Falls nicht: Klicke auf "Configure Mappings" und erstelle ein Mapping

**Schritt 2:** Sync-Richtung prüfen
- Unter Jira-Settings: Prüfe die konfigurierte Sync-Richtung
- **Bidirektional:** Änderungen fließen in beide Richtungen
- **Jira → FlowSync:** Nur Import
- **FlowSync → Jira:** Nur Export

**Schritt 3:** Manuellen Sync auslösen
- Klicke auf "Sync Now" in den Jira-Settings
- Warte bis zu 5 Minuten
- Prüfe die Sync-Logs auf Fehler

**Schritt 4:** Jira-Webhook prüfen
- In Jira: Administration → System → WebHooks
- Prüfe, ob ein FlowSync-Webhook existiert und aktiv ist
- Falls rot/inaktiv: Lösche den Webhook und reconnecte in FlowSync

**Noch nicht gelöst?**
Kontaktiere support@flowsync.io mit:
- Screenshot der Jira-Mapping-Konfiguration
- Sync-Log-Auszug (Settings → Jira → Logs)
- Beispiel-Issue-Key, der nicht synchronisiert wird

---

### Problem: Status-Mapping funktioniert nicht

**Symptome:**
- Status-Änderungen in Jira werden in FlowSync nicht reflektiert
- Status-Änderungen in FlowSync werden nicht nach Jira übertragen
- Falscher Status wird gesetzt

**Mögliche Ursachen:**

1. **Status nicht gemappt**
2. **Jira-Workflow erlaubt Transition nicht**
3. **Nicht alle Status in Mapping enthalten**
4. **Multiple Workflows in Jira**

**Schritt-für-Schritt-Lösung:**

**Schritt 1:** Status-Mapping prüfen
- FlowSync → Settings → Integrations → Jira → Status Mapping
- Prüfe, ob alle FlowSync-Status einem Jira-Status zugeordnet sind:
  - To Do → (z.B. Open, Backlog)
  - In Progress → (z.B. In Progress, In Development)
  - Review → (z.B. In Review, Testing)
  - Done → (z.B. Done, Closed, Resolved)

**Schritt 2:** Jira-Workflow prüfen
- In Jira: Projekt-Settings → Workflows
- Stelle sicher, dass die Transitionen zwischen den gemappten Status erlaubt sind
- Beispiel: Transition von "In Progress" zu "Done" muss möglich sein

**Schritt 3:** Alle Workflows mappen
- Falls das Jira-Projekt mehrere Issue-Types mit verschiedenen Workflows hat:
- Jeder Workflow-Status muss gemappt werden

**Schritt 4:** Re-Sync erzwingen
- Ändere einen Status manuell in beiden Systemen zum gleichen Wert
- Warte 2 Minuten
- Teste eine neue Status-Änderung

**Noch nicht gelöst?**
Kontaktiere support@flowsync.io mit Jira-Projekt-Key und Issue-Type.

---

### Problem: "Unauthorized" Error

**Symptome:**
- Fehlermeldung "Unauthorized" oder "401" in Sync-Logs
- Integration zeigt "Connection Error"
- Sync funktionierte vorher, jetzt nicht mehr

**Mögliche Ursachen:**

1. **API-Token abgelaufen**
2. **Passwort geändert**
3. **Jira-Berechtigungen entzogen**
4. **Atlassian-Account-Änderungen**

**Schritt-für-Schritt-Lösung:**

**Schritt 1:** Integration trennen und neu verbinden
- FlowSync → Settings → Integrations → Jira → Disconnect
- Warte 60 Sekunden
- Klicke auf "Connect Jira Cloud"
- Autorisiere mit einem Account, der Admin-Rechte im Jira-Projekt hat

**Schritt 2:** API-Token erneuern (falls verwendet)
- Gehe zu id.atlassian.com → Security → API tokens
- Erstelle ein neues Token
- Trage das neue Token in FlowSync ein

**Schritt 3:** Berechtigungen prüfen
- Der verbundene Atlassian-Account muss:
  - Projekt-Admin oder höher sein
  - Leserechte auf alle zu synchronisierenden Projekte haben
  - Browse-Berechtigung für Issues haben

**Noch nicht gelöst?**
Kontaktiere support@flowsync.io mit dem Jira-Benutzernamen, der für die Integration verwendet wird.

---

## GitHub-Integration

### Problem: Commits werden nicht erkannt

**Symptome:**
- Commits mit Task-ID erscheinen nicht in FlowSync
- Commit-Activity fehlt im Task
- Linking funktioniert nicht

**Mögliche Ursachen:**

1. **Task-ID-Format falsch**
2. **Repository nicht verbunden**
3. **Webhook nicht aktiv**
4. **Branch nicht synchronisiert**

**Schritt-für-Schritt-Lösung:**

**Schritt 1:** Task-ID-Format prüfen
- Das korrekte Format ist: `FLOW-123` oder `[FLOW-123]`
- Beispiel gültige Commit-Messages:
  - `Fix login bug FLOW-123`
  - `[FLOW-123] Implement feature`
  - `FLOW-123: Update documentation`

**Schritt 2:** Repository-Verbindung prüfen
- FlowSync → Settings → Integrations → GitHub
- Prüfe, ob das Repository in der Liste erscheint
- Falls nicht: Klicke auf "Add Repository" und wähle das Repo aus

**Schritt 3:** Webhook prüfen
- GitHub → Repository → Settings → Webhooks
- Prüfe, ob ein FlowSync-Webhook existiert
- Status sollte grün sein (Recent Deliveries: 200 OK)

**Schritt 4:** Push nach Webhook-Setup
- Commits vor dem Webhook-Setup werden nicht erkannt
- Erstelle einen neuen Commit mit Task-ID nach der Integration

**Noch nicht gelöst?**
Kontaktiere support@flowsync.io mit Repository-URL und Commit-SHA.

---

### Problem: Auto-linking funktioniert nicht

**Symptome:**
- Pull Requests werden nicht mit Tasks verknüpft
- Branch-Namen werden nicht erkannt
- Kein Auto-Close bei Merge

**Mögliche Ursachen:**

1. **Branch-Naming-Convention nicht eingehalten**
2. **Auto-Close deaktiviert**
3. **PR-Branch enthält keine Task-ID**
4. **GitHub-App-Berechtigungen unzureichend**

**Schritt-für-Schritt-Lösung:**

**Schritt 1:** Branch-Naming prüfen
- Standard-Convention: `feature/FLOW-123-description`
- Alternativ: Task-ID irgendwo im Branch-Namen

**Schritt 2:** Auto-Close aktivieren
- FlowSync → Settings → Integrations → GitHub → Auto-Close
- Aktiviere "Close task when PR is merged"
- Wähle den Status, der bei Merge gesetzt werden soll

**Schritt 3:** PR-Titel/Description prüfen
- Falls Branch-Name keine Task-ID enthält:
- Task-ID im PR-Titel oder Description einfügen

**Noch nicht gelöst?**
Kontaktiere support@flowsync.io mit PR-Link.

---

### Problem: Webhook liefert 401

**Symptome:**
- GitHub-Webhook zeigt "401 Unauthorized" in Recent Deliveries
- Keine Events werden an FlowSync gesendet
- Integration war zuvor funktionsfähig

**Mögliche Ursachen:**

1. **GitHub-App-Token abgelaufen**
2. **App-Installation entfernt**
3. **Repository-Berechtigungen geändert**
4. **Secret-Key-Mismatch**

**Schritt-für-Schritt-Lösung:**

**Schritt 1:** GitHub-App neu installieren
- Gehe zu github.com → Settings → Applications → FlowSync
- Klicke auf "Configure" und dann "Uninstall"
- In FlowSync: Settings → Integrations → GitHub → "Install GitHub App"
- Installiere erneut und wähle die Repositories

**Schritt 2:** Webhook manuell löschen und neu erstellen
- GitHub → Repository → Settings → Webhooks
- Lösche den FlowSync-Webhook
- In FlowSync: Trenne und verbinde die GitHub-Integration neu

**Schritt 3:** Repository-Berechtigungen prüfen
- Die GitHub-App benötigt:
  - Read access: Code, Metadata
  - Write access: Pull Requests, Issues

**Noch nicht gelöst?**
Kontaktiere support@flowsync.io mit Webhook-Delivery-ID und Response-Body.

---

## Allgemeine Tipps

### Integration komplett zurücksetzen

Bei hartnäckigen Problemen:

1. **In FlowSync:** Settings → Integrations → [Integration] → Disconnect
2. **Im externen Tool:** App/Integration entfernen
3. **30 Sekunden warten**
4. **Neu verbinden** in FlowSync

### Logs prüfen

Alle Integrationen haben ein Log:
- Settings → Integrations → [Integration] → Logs
- Zeigt erfolgreiche und fehlgeschlagene Sync-Vorgänge
- Enthält Fehlermeldungen zur Diagnose

### Support kontaktieren

Bei anhaltenden Problemen: support@flowsync.io

Bitte immer angeben:
- Welche Integration
- Seit wann das Problem besteht
- Was bereits versucht wurde
- Screenshots von Fehlermeldungen
- Betroffene Task-/Issue-IDs
