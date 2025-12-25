# FlowSync Release Notes 2024

---

## v2.8.0 – November 20, 2024

### New Features

**Recurring Tasks**
- Create tasks that automatically repeat on a schedule
- Supported frequencies: daily, weekly, bi-weekly, monthly, custom
- Recurrence rules with end date or occurrence limit
- Automatic assignee inheritance from parent task

**Enhanced Mobile App**
- Complete time tracking on mobile (iOS & Android)
- Offline mode with automatic sync
- Push notifications for @mentions and due dates
- Dark mode support

**Bulk Task Operations**
- Select multiple tasks and apply bulk actions
- Bulk update: status, assignee, due date, labels
- Bulk move to different project
- Bulk delete with confirmation

**API Webhooks v2**
- New webhook event types: `task.completed`, `comment.created`
- Retry logic with exponential backoff
- Webhook signature verification (HMAC SHA-256)
- Webhook logs in admin panel

### Bug Fixes

- Fixed: Tasks occasionally duplicating when moved between columns
- Fixed: Time zone display incorrect for users in Asia/Pacific regions
- Fixed: Slack notifications showing wrong task title after rename
- Fixed: Export to Excel cutting off long descriptions

### Performance Improvements

- Dashboard load time reduced by 40%
- Improved search indexing for large workspaces (10,000+ tasks)

### Migration Notes

- Webhook endpoints now require signature verification (can be disabled in settings)
- Mobile app version 3.0+ required for new features

---

## v2.7.0 – October 15, 2024

### New Features

**Guest Access**
- Invite external collaborators with limited permissions
- Guests can view and comment on specific projects
- No access to time tracking or billing data
- Guest seats don't count against license

**Advanced Filters**
- Save custom filter presets
- Combine multiple filters with AND/OR logic
- Filter by custom fields
- Share filters with team

**Project Templates v2**
- Duplicate projects including tasks and subtasks
- Template library with pre-built workflows
- Community templates (Scrum, Kanban, GTD, etc.)

**Time Tracking Improvements**
- Weekly timesheet view
- Manager approval workflow for time entries
- Overtime alerts and notifications

### Bug Fixes

- Fixed: Comments not loading for tasks with 100+ comments
- Fixed: Calendar integration missing recurring events
- Fixed: File attachments failing for files >20MB
- Fixed: Keyboard shortcuts conflicting with browser shortcuts

### Performance Improvements

- Real-time sync latency reduced to <100ms
- Improved memory usage for long browser sessions

---

## v2.6.0 – September 5, 2024

### New Features

**Jira Bidirectional Sync**
- Two-way synchronization with Jira Cloud
- Status mapping configuration
- Field mapping (priority, labels, custom fields)
- Sync history and conflict resolution

**Custom Fields**
- Create text, number, date, dropdown, or multi-select fields
- Fields apply per project
- Display in list and board views
- Filter and group by custom fields

**Activity Timeline**
- Visual timeline of all changes to a task
- Filter by activity type (comments, status changes, assignee)
- Export activity log to CSV

### Bug Fixes

- Fixed: Gantt chart not updating after task date change
- Fixed: Notification preferences resetting on logout
- Fixed: SSO logout not properly clearing session
- Fixed: API rate limit counter not resetting at hour boundary

### Performance Improvements

- Reduced API response times by 25%
- Optimized database queries for large projects

### Migration Notes

- Custom fields require Pro tier or above
- Jira sync requires reconnection after update

---

## v2.5.0 – August 1, 2024

### New Features

**GitHub Integration**
- Link commits and PRs to FlowSync tasks
- Auto-close tasks when PR is merged
- Branch naming convention support
- Commit activity visible in task timeline

**Reports Dashboard**
- Visual charts for time tracked, tasks completed, velocity
- Date range picker with presets
- Filter by project, team, or individual
- Export reports to PDF

**Subtasks Improvements**
- Unlimited nesting levels (previously limited to 2)
- Progress indicator based on subtask completion
- Convert subtasks to standalone tasks
- Bulk create subtasks from checklist

### Bug Fixes

- Fixed: Timer not stopping when browser is closed
- Fixed: Drag and drop glitchy on Firefox
- Fixed: Due date reminders sending at wrong time
- Fixed: Project archive not working for large projects

### Performance Improvements

- Initial page load time reduced by 35%
- Improved caching for frequently accessed data

---

## v2.4.0 – July 1, 2024

### New Features

**Google Calendar Integration**
- Sync task due dates to Google Calendar
- Create tasks from calendar events
- Time blocking for scheduled work
- Bidirectional updates

**Workspace Audit Log**
- Track all admin actions
- User login/logout history
- Permission changes
- Data export requests

**Keyboard Shortcuts**
- Global shortcuts for common actions
- Customizable key bindings
- Shortcut cheat sheet (press `?`)

### Bug Fixes

- Fixed: Mentions not working in task descriptions
- Fixed: Incorrect user count in billing
- Fixed: Template tasks keeping old assignees
- Fixed: Search not finding tasks with special characters

### Performance Improvements

- Reduced bundle size by 20%
- Lazy loading for less-used features

### Migration Notes

- Google Calendar requires OAuth re-authorization

---

## v2.3.0 – June 1, 2024

### New Features

**SAML SSO (Enterprise)**
- Single Sign-On with Okta, Azure AD, OneLogin
- Just-in-time user provisioning
- Enforce SSO for all workspace members
- SSO bypass for admin accounts

**Zapier Integration**
- 1000+ app connections via Zapier
- Triggers: task created, completed, commented
- Actions: create task, update status, add comment
- Multi-step Zaps supported

**Dark Mode**
- System-preference auto-detection
- Manual toggle in settings
- Consistent across web and mobile

### Bug Fixes

- Fixed: Email notifications delayed by up to 30 minutes
- Fixed: Labels not displaying correct colors
- Fixed: Import from Asana missing task descriptions
- Fixed: Project colors not saving

### Performance Improvements

- WebSocket connection stability improved
- Reduced memory footprint by 15%

### Migration Notes

- SSO requires Enterprise tier
- Legacy API endpoints deprecated (will be removed in v3.0)

---

## Upgrade Path

| Current Version | Upgrade To | Notes |
|-----------------|------------|-------|
| v2.7.x | v2.8.0 | No breaking changes |
| v2.6.x | v2.8.0 | Review custom field permissions |
| v2.5.x | v2.8.0 | Re-authorize Jira integration |
| v2.4.x or earlier | v2.8.0 | Contact support for migration assistance |

---

## Support

For upgrade assistance or issues, contact:
- **Email:** support@flowsync.io
- **Status:** status.flowsync.io
- **Changelog:** flowsync.io/changelog
