# FlowSync API Documentation

**Base URL:** `https://api.flowsync.io/v2`

**API Version:** 2.0

**Last Updated:** 2024-11-25

---

## Authentication

FlowSync API supports two authentication methods:

### 1. API Key Authentication

Include your API key in the request header:

```http
Authorization: Bearer fs_live_abc123xyz789...
```

**Getting your API key:**
1. Go to Settings → Integrations → API
2. Click "Generate API Key"
3. Copy and store securely (shown only once)

### 2. OAuth 2.0

For user-authorized applications, use OAuth 2.0 Authorization Code flow.

**Authorization URL:** `https://auth.flowsync.io/oauth/authorize`
**Token URL:** `https://auth.flowsync.io/oauth/token`

**Scopes:**
| Scope | Description |
|-------|-------------|
| `read:projects` | Read project data |
| `write:projects` | Create/update projects |
| `read:tasks` | Read task data |
| `write:tasks` | Create/update/delete tasks |
| `read:time` | Read time entries |
| `write:time` | Create/update time entries |
| `read:users` | Read user data |
| `admin` | Full administrative access |

---

## Rate Limits

| Tier | Requests per Hour | Requests per Minute |
|------|-------------------|---------------------|
| Starter | 500 | 10 |
| Pro | 1,000 | 20 |
| Enterprise | 5,000 | 100 |

**Rate Limit Headers:**
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 995
X-RateLimit-Reset: 1701432000
```

When rate limited, you'll receive:
```http
HTTP/1.1 429 Too Many Requests
Retry-After: 120
```

---

## Endpoints

### Projects

#### GET /projects

List all projects accessible to the authenticated user.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | string | Filter by status: `active`, `archived`, `all` |
| `page` | integer | Page number (default: 1) |
| `per_page` | integer | Items per page (default: 20, max: 100) |

**Example Request:**
```bash
curl -X GET "https://api.flowsync.io/v2/projects?status=active&per_page=10" \
  -H "Authorization: Bearer fs_live_abc123xyz789"
```

**Example Response:**
```json
{
  "data": [
    {
      "id": "proj_7xKj2mN9",
      "name": "Website Redesign",
      "description": "Q4 website overhaul project",
      "status": "active",
      "color": "#3B82F6",
      "owner_id": "user_4kLm8nP2",
      "created_at": "2024-09-15T10:30:00Z",
      "updated_at": "2024-11-20T14:22:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 10,
    "total": 47,
    "total_pages": 5
  }
}
```

---

#### POST /projects

Create a new project.

**Request Body:**
```json
{
  "name": "Mobile App Development",
  "description": "iOS and Android app for Q1 2025",
  "color": "#10B981",
  "template_id": "tmpl_agile_sprint"
}
```

**Example Response:**
```json
{
  "data": {
    "id": "proj_9xMn4pQ7",
    "name": "Mobile App Development",
    "description": "iOS and Android app for Q1 2025",
    "status": "active",
    "color": "#10B981",
    "owner_id": "user_4kLm8nP2",
    "created_at": "2024-11-28T09:15:00Z",
    "updated_at": "2024-11-28T09:15:00Z"
  }
}
```

---

### Tasks

#### GET /tasks

List tasks with optional filters.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `project_id` | string | Filter by project |
| `assignee_id` | string | Filter by assignee |
| `status` | string | `todo`, `in_progress`, `review`, `done` |
| `due_before` | date | Tasks due before date (ISO 8601) |
| `due_after` | date | Tasks due after date (ISO 8601) |
| `page` | integer | Page number |
| `per_page` | integer | Items per page |

**Example Request:**
```bash
curl -X GET "https://api.flowsync.io/v2/tasks?project_id=proj_7xKj2mN9&status=in_progress" \
  -H "Authorization: Bearer fs_live_abc123xyz789"
```

**Example Response:**
```json
{
  "data": [
    {
      "id": "task_2nKp5mL8",
      "title": "Design homepage mockup",
      "description": "Create Figma mockups for new homepage",
      "status": "in_progress",
      "priority": "high",
      "project_id": "proj_7xKj2mN9",
      "assignee_id": "user_8jHn3kM2",
      "due_date": "2024-11-30",
      "estimated_hours": 8,
      "tracked_hours": 4.5,
      "labels": ["design", "frontend"],
      "created_at": "2024-11-18T11:00:00Z",
      "updated_at": "2024-11-25T16:45:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 156,
    "total_pages": 8
  }
}
```

---

#### POST /tasks

Create a new task.

**Request Body:**
```json
{
  "title": "Implement user authentication",
  "description": "Add OAuth2 login with Google and GitHub",
  "project_id": "proj_9xMn4pQ7",
  "assignee_id": "user_8jHn3kM2",
  "status": "todo",
  "priority": "high",
  "due_date": "2024-12-15",
  "estimated_hours": 16,
  "labels": ["backend", "security"]
}
```

**Example Response:**
```json
{
  "data": {
    "id": "task_5pQr9nK3",
    "title": "Implement user authentication",
    "description": "Add OAuth2 login with Google and GitHub",
    "status": "todo",
    "priority": "high",
    "project_id": "proj_9xMn4pQ7",
    "assignee_id": "user_8jHn3kM2",
    "due_date": "2024-12-15",
    "estimated_hours": 16,
    "tracked_hours": 0,
    "labels": ["backend", "security"],
    "created_at": "2024-11-28T10:00:00Z",
    "updated_at": "2024-11-28T10:00:00Z"
  }
}
```

---

#### PATCH /tasks/{id}

Update an existing task.

**Path Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | string | Task ID |

**Request Body:**
```json
{
  "status": "in_progress",
  "assignee_id": "user_3mNp7kL9"
}
```

**Example Response:**
```json
{
  "data": {
    "id": "task_5pQr9nK3",
    "title": "Implement user authentication",
    "status": "in_progress",
    "assignee_id": "user_3mNp7kL9",
    "updated_at": "2024-11-28T14:30:00Z"
  }
}
```

---

### Time Entries

#### GET /time-entries

List time entries.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `task_id` | string | Filter by task |
| `project_id` | string | Filter by project |
| `user_id` | string | Filter by user |
| `start_date` | date | Entries from date (ISO 8601) |
| `end_date` | date | Entries until date (ISO 8601) |
| `billable` | boolean | Filter by billable status |

**Example Request:**
```bash
curl -X GET "https://api.flowsync.io/v2/time-entries?project_id=proj_7xKj2mN9&start_date=2024-11-01" \
  -H "Authorization: Bearer fs_live_abc123xyz789"
```

**Example Response:**
```json
{
  "data": [
    {
      "id": "time_8kLm2nP5",
      "task_id": "task_2nKp5mL8",
      "project_id": "proj_7xKj2mN9",
      "user_id": "user_8jHn3kM2",
      "duration_minutes": 120,
      "description": "Worked on header navigation design",
      "billable": true,
      "hourly_rate": 85.00,
      "started_at": "2024-11-25T09:00:00Z",
      "ended_at": "2024-11-25T11:00:00Z",
      "created_at": "2024-11-25T11:02:00Z"
    }
  ],
  "meta": {
    "total_minutes": 4560,
    "total_billable_minutes": 3840,
    "total_amount": 5440.00
  }
}
```

---

#### POST /time-entries

Create a new time entry.

**Request Body:**
```json
{
  "task_id": "task_2nKp5mL8",
  "duration_minutes": 90,
  "description": "Code review and feedback",
  "billable": true,
  "started_at": "2024-11-28T14:00:00Z"
}
```

---

### Users

#### GET /users

List all users in the workspace.

**Example Response:**
```json
{
  "data": [
    {
      "id": "user_4kLm8nP2",
      "email": "sarah.mueller@flowsync.io",
      "name": "Sarah Müller",
      "role": "admin",
      "avatar_url": "https://cdn.flowsync.io/avatars/sarah.jpg",
      "timezone": "Europe/Berlin",
      "created_at": "2024-01-15T10:00:00Z",
      "last_active_at": "2024-11-28T15:30:00Z"
    }
  ]
}
```

---

### Integrations

#### GET /integrations

List configured integrations.

**Example Response:**
```json
{
  "data": [
    {
      "id": "int_slack_7xKj2mN9",
      "type": "slack",
      "status": "connected",
      "workspace_name": "FlowSync Team",
      "connected_at": "2024-06-01T10:00:00Z",
      "settings": {
        "default_channel": "#general",
        "notify_on_task_complete": true,
        "notify_on_mention": true
      }
    },
    {
      "id": "int_jira_8mLn3pK4",
      "type": "jira",
      "status": "connected",
      "instance_url": "https://flowsync.atlassian.net",
      "connected_at": "2024-07-15T14:00:00Z",
      "settings": {
        "sync_direction": "bidirectional",
        "project_mapping": {
          "proj_7xKj2mN9": "FLOW"
        }
      }
    }
  ]
}
```

---

### Webhooks

#### POST /webhooks

Create a webhook subscription.

**Request Body:**
```json
{
  "url": "https://your-server.com/webhook",
  "events": ["task.created", "task.updated", "time_entry.created"],
  "secret": "your_webhook_secret_123"
}
```

**Available Events:**
| Event | Description |
|-------|-------------|
| `project.created` | New project created |
| `project.updated` | Project settings changed |
| `project.archived` | Project archived |
| `task.created` | New task created |
| `task.updated` | Task modified |
| `task.deleted` | Task deleted |
| `task.completed` | Task marked as done |
| `time_entry.created` | New time entry |
| `time_entry.updated` | Time entry modified |
| `comment.created` | New comment on task |
| `user.invited` | New user invited |

**Webhook Payload Example:**
```json
{
  "event": "task.completed",
  "timestamp": "2024-11-28T16:00:00Z",
  "data": {
    "task": {
      "id": "task_2nKp5mL8",
      "title": "Design homepage mockup",
      "completed_by": "user_8jHn3kM2"
    }
  },
  "signature": "sha256=abc123..."
}
```

---

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `invalid_request` | 400 | Malformed request body |
| `unauthorized` | 401 | Invalid or missing authentication |
| `forbidden` | 403 | Insufficient permissions |
| `not_found` | 404 | Resource does not exist |
| `rate_limited` | 429 | Rate limit exceeded |
| `internal_error` | 500 | Server error (contact support) |

**Error Response Format:**
```json
{
  "error": {
    "code": "not_found",
    "message": "Task with ID 'task_xyz' not found",
    "request_id": "req_8kLm2nP5"
  }
}
```

---

## Pagination

All list endpoints support cursor-based pagination.

**Response Meta:**
```json
{
  "meta": {
    "page": 2,
    "per_page": 20,
    "total": 156,
    "total_pages": 8,
    "next_cursor": "eyJpZCI6IjEyMyJ9",
    "prev_cursor": "eyJpZCI6IjEwMCJ9"
  }
}
```

Use `?cursor=eyJpZCI6IjEyMyJ9` for subsequent requests.

---

## SDKs & Libraries

Official SDKs:
- **JavaScript/TypeScript:** `npm install @flowsync/sdk`
- **Python:** `pip install flowsync-python`
- **Ruby:** `gem install flowsync`

Community SDKs:
- Go: github.com/community/flowsync-go
- PHP: github.com/community/flowsync-php

---

## Support

- **API Status:** status.flowsync.io
- **Developer Portal:** developers.flowsync.io
- **Support Email:** api-support@flowsync.io
- **Slack Community:** flowsync.io/slack
