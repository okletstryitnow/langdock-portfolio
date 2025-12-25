# Account Management Guide

Dieser Guide erklärt die Verwaltung von Benutzern, Rollen und Zugriffsrechten in FlowSync.

---

## Benutzer verwalten

### Benutzer hinzufügen

**Methode 1: E-Mail-Einladung**

1. Gehe zu **Settings → Users → Invite User**
2. Gib die E-Mail-Adresse(n) ein (mehrere mit Komma trennen)
3. Wähle eine Rolle (Member, Admin, Guest)
4. Optional: Wähle Teams/Projekte für sofortigen Zugriff
5. Klicke auf "Send Invitation"

Der eingeladene Benutzer erhält eine E-Mail mit einem Aktivierungslink.

**Methode 2: Link teilen**

1. Settings → Users → "Get Invite Link"
2. Wähle die Standard-Rolle für neue Benutzer
3. Teile den Link (z.B. in Slack)
4. Link ist 7 Tage gültig und kann jederzeit deaktiviert werden

**Methode 3: SCIM Provisioning (Enterprise)**

Automatische Benutzererstellung über Identity Provider. Siehe Abschnitt "SCIM" unten.

---

### Benutzer entfernen

1. Gehe zu **Settings → Users**
2. Suche den Benutzer
3. Klicke auf das Drei-Punkte-Menü → "Remove User"
4. Wähle, was mit den Daten passieren soll:
   - **Reassign Tasks:** Weise offene Tasks einem anderen Benutzer zu
   - **Keep Tasks Unassigned:** Tasks bleiben, aber ohne Assignee
   - **Archive Tasks:** Alle Tasks des Benutzers archivieren
5. Bestätige mit "Remove"

**Wichtig:**
- Entfernte Benutzer können nicht mehr auf FlowSync zugreifen
- Deren Kommentare und Time-Entries bleiben erhalten
- Für DSGVO-Löschung: Kontaktiere support@flowsync.io

---

### Benutzer deaktivieren (temporär)

Alternativ zum Entfernen:

1. Settings → Users → [Benutzer]
2. Klicke auf "Deactivate"
3. Der Benutzer kann sich nicht mehr einloggen
4. Daten und Zuweisungen bleiben erhalten
5. Kann jederzeit reaktiviert werden

**Anwendungsfälle:** Elternzeit, Sabbatical, temporäre Sperre

---

## Rollen & Berechtigungen

### Standard-Rollen

| Rolle | Beschreibung |
|-------|--------------|
| **Owner** | Voller Zugriff, kann Workspace löschen, nicht änderbar |
| **Admin** | Voller Zugriff außer Workspace-Löschung und Billing |
| **Member** | Standard-Benutzer, Zugriff auf zugewiesene Projekte |
| **Guest** | Eingeschränkter Zugriff, nur Lesen und Kommentieren |

### Berechtigungs-Matrix

| Aktion | Owner | Admin | Member | Guest |
|--------|-------|-------|--------|-------|
| Projekte erstellen | ✓ | ✓ | ✓* | ✗ |
| Projekte löschen | ✓ | ✓ | ✗ | ✗ |
| Tasks erstellen/bearbeiten | ✓ | ✓ | ✓ | ✗ |
| Tasks kommentieren | ✓ | ✓ | ✓ | ✓ |
| Dateien hochladen | ✓ | ✓ | ✓ | ✗ |
| Dateien herunterladen | ✓ | ✓ | ✓ | ✓ |
| Zeit erfassen | ✓ | ✓ | ✓ | ✗ |
| Reports einsehen | ✓ | ✓ | ✓** | ✗ |
| Benutzer einladen | ✓ | ✓ | ✗ | ✗ |
| Benutzer entfernen | ✓ | ✓ | ✗ | ✗ |
| Rollen ändern | ✓ | ✓ | ✗ | ✗ |
| Billing verwalten | ✓ | ✗ | ✗ | ✗ |
| Integrationen verwalten | ✓ | ✓ | ✗ | ✗ |
| Workspace-Einstellungen | ✓ | ✓ | ✗ | ✗ |
| Workspace löschen | ✓ | ✗ | ✗ | ✗ |

*Member können Projekte nur erstellen, wenn diese Berechtigung aktiviert ist (Settings → Permissions)

**Member sehen nur Reports für eigene Projekte

---

### Rolle ändern

1. Settings → Users → [Benutzer]
2. Klicke auf die aktuelle Rolle
3. Wähle eine neue Rolle aus dem Dropdown
4. Änderung wird sofort wirksam

**Hinweis:** Es muss immer mindestens ein Owner existieren.

---

### Custom Roles (Enterprise)

Mit Enterprise können benutzerdefinierte Rollen erstellt werden:

1. Settings → Roles → "Create Custom Role"
2. Gib einen Namen ein (z.B. "Project Manager", "External Consultant")
3. Wähle Berechtigungen aus der Liste
4. Speichern

**Verfügbare granulare Berechtigungen:**
- Projekt-Berechtigungen (Create, Read, Update, Delete, Archive)
- Task-Berechtigungen (Create, Read, Update, Delete, Assign, Complete)
- Time-Tracking (View Own, View All, Edit Own, Edit All)
- Reports (View Project Reports, View Team Reports, Export)
- User Management (Invite, Remove, Change Roles)
- Settings (View, Edit)
- Integrations (View, Configure)

---

## Team-Struktur

### Teams erstellen

Teams ermöglichen die Gruppierung von Benutzern:

1. Settings → Teams → "Create Team"
2. Gib einen Team-Namen ein (z.B. "Engineering", "Sales")
3. Füge Mitglieder hinzu
4. Optional: Wähle einen Team-Lead
5. Speichern

### Team-Berechtigungen

- Teams können Projekten zugeordnet werden
- Alle Team-Mitglieder erhalten automatisch Zugriff
- Team-Leads können Team-Mitglieder verwalten

### Beispiel-Struktur

```
FlowSync GmbH (Workspace)
├── Engineering
│   ├── Backend Team
│   └── Frontend Team
├── Product
├── Sales
├── Customer Success
└── Marketing
```

---

## SSO-Setup (Enterprise)

### SAML 2.0 Konfiguration

FlowSync unterstützt SAML 2.0 Single Sign-On mit:
- Okta
- Azure Active Directory
- OneLogin
- Google Workspace
- Andere SAML 2.0-kompatible IdPs

**Voraussetzungen:**
- Enterprise-Tier
- Admin-Zugriff auf den Identity Provider
- Verifizierte Domain

**Setup-Schritte:**

**Schritt 1:** Domain verifizieren
1. Settings → Security → Domain Verification
2. Füge einen TXT-Record zu deiner DNS-Konfiguration hinzu
3. Klicke auf "Verify"

**Schritt 2:** SAML konfigurieren
1. Settings → Security → SAML SSO
2. Klicke auf "Configure SAML"
3. Kopiere die FlowSync-Werte:
   - **Entity ID:** `https://auth.flowsync.io/saml/[workspace-id]`
   - **ACS URL:** `https://auth.flowsync.io/saml/[workspace-id]/acs`
   - **Logout URL:** `https://auth.flowsync.io/saml/[workspace-id]/slo`

**Schritt 3:** Identity Provider konfigurieren
- Erstelle eine neue SAML-App im IdP
- Trage die FlowSync-URLs ein
- Konfiguriere Attribute-Mapping:
  - `email` → User Email
  - `firstName` → First Name
  - `lastName` → Last Name

**Schritt 4:** IdP-Metadaten in FlowSync eintragen
1. Kopiere die IdP-Metadaten-URL oder XML
2. Füge sie in FlowSync ein
3. Klicke auf "Save & Test"

**Schritt 5:** SSO aktivieren
1. Teste den Login mit einem Admin-Account
2. Aktiviere "Enforce SSO for all users"
3. Optional: Erlaube Passwort-Login als Backup

---

### Okta-spezifische Anleitung

1. Okta Admin → Applications → Create App Integration
2. Wähle "SAML 2.0"
3. Gib App-Name ein: "FlowSync"
4. Single sign-on URL: `https://auth.flowsync.io/saml/[workspace-id]/acs`
5. Audience URI: `https://auth.flowsync.io/saml/[workspace-id]`
6. Attribute Statements:
   - email → user.email
   - firstName → user.firstName
   - lastName → user.lastName
7. Fertigstellen und Metadaten-URL kopieren
8. In FlowSync einfügen

---

### Azure AD-spezifische Anleitung

1. Azure Portal → Azure Active Directory → Enterprise Applications
2. "New Application" → "Create your own application"
3. Name: "FlowSync", Typ: "Integrate any other application"
4. Single sign-on → SAML
5. Basic SAML Configuration:
   - Identifier: `https://auth.flowsync.io/saml/[workspace-id]`
   - Reply URL: `https://auth.flowsync.io/saml/[workspace-id]/acs`
6. Attributes & Claims: Standardwerte beibehalten
7. SAML Signing Certificate → Federation Metadata XML herunterladen
8. In FlowSync hochladen

---

## SCIM Provisioning (Enterprise)

SCIM ermöglicht automatische Benutzerverwaltung:

- Benutzer automatisch erstellen bei IdP-Zuweisung
- Benutzer automatisch deaktivieren bei IdP-Entzug
- Gruppen/Teams synchronisieren

### SCIM aktivieren

1. Settings → Security → SCIM Provisioning
2. Klicke auf "Enable SCIM"
3. Kopiere:
   - **SCIM Base URL:** `https://api.flowsync.io/scim/v2`
   - **Bearer Token:** (einmalig angezeigt – sicher speichern!)

### SCIM im IdP konfigurieren

**Okta:**
1. App-Einstellungen → Provisioning → Configure API Integration
2. SCIM connector base URL und API Token eintragen
3. Provisioning-Optionen aktivieren:
   - Create Users
   - Update User Attributes
   - Deactivate Users

**Azure AD:**
1. Enterprise Application → Provisioning
2. Provisioning Mode: Automatic
3. Admin Credentials: Tenant URL und Secret Token eintragen
4. Mappings konfigurieren
5. Provisioning starten

---

## Häufige Fragen

### Kann ich mehrere Workspaces haben?

Ja, aber jeder Workspace benötigt ein eigenes Abonnement. Ein Benutzer kann Mitglied in mehreren Workspaces sein.

### Was passiert bei Überschreitung des User-Limits?

- Starter: Automatisches Upgrade auf Pro nach 15 Usern
- Pro: Keine User-Limits
- Überschreitung wird zum nächsten Billing-Zyklus berechnet

### Kann ich Owner-Rechte übertragen?

Ja, unter Settings → Workspace → Transfer Ownership. Es kann nur einen Owner geben.

---

## Kontakt

Bei Fragen zur Benutzerverwaltung:
- **E-Mail:** support@flowsync.io
- **Enterprise-Support:** enterprise-support@flowsync.io
- **Dokumentation:** help.flowsync.io/admin
