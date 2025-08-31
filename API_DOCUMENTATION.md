# TeaFame Bot API Documentation

## Overview
REST API для получения статистики Discord сервера Tea-Fi для интеграции с Next.js веб-сайтом.

**Base URL:** `http://localhost:3001` (в разработке)

## Endpoints

### Health Check
**GET** `/api/health`

Проверка работоспособности API.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-08-27T18:46:43.583Z",
  "uptime": 15.889116
}
```

### Role Members
**GET** `/api/role-members`

Получение пользователей с определенными ролями.

**Tracked Roles:**
- Tea-OG (1397158661054398527)
- Tea Fan (1397161141503000626)
- Tea Enjoyer (1397161342837854312)
- Tea Chad (1397161465257005097)
- Ambassador (1397162310157471856)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1168159146890244169",
      "username": "equantish",
      "displayName": "Elsavadore De Equantish",
      "avatarURL": "https://cdn.discordapp.com/avatars/1168159146890244169/c7274621886903b077b502a3424041a1.webp?size=256",
      "roles": ["Tea-OG", "Tea Fan"],
      "joinedAt": "2025-07-17T09:28:04.209Z"
    }
  ]
}
```

### Channel Statistics
**GET** `/api/channel-stats`

Статистика контента канала (1397171466960634028).

**Response:**
```json
{
  "success": true,
  "data": {
    "channelId": "1397171466960634028",
    "messageCount": 100,
    "note": "Message count is estimated based on recent activity",
    "lastChecked": "2025-08-27T18:50:44.711Z"
  }
}
```

### Program Uptime
**GET** `/api/program-uptime`

Время работы программы с 24 июля 2025 года.

**Response:**
```json
{
  "success": true,
  "data": {
    "startDate": "2025-07-24",
    "currentDate": "2025-08-27",
    "totalDays": 34,
    "formatted": "1 months 4 days",
    "milliseconds": 3005213702
  }
}
```

### All Statistics
**GET** `/api/all-stats`

Все данные в одном запросе для оптимизации.

**Response:**
```json
{
  "success": true,
  "data": {
    "roleMembers": [...], // массив пользователей
    "channelStats": {...}, // статистика канала
    "programUptime": {...}, // время работы
    "lastUpdated": "2025-08-27T18:51:10.862Z"
  }
}
```

## Caching

- **Cache Duration:** 5 минут
- **Cache Keys:** `roleMembers`, `channelStats`
- **Auto-refresh:** Данные обновляются автоматически при истечении кеша

## CORS Configuration

**Development:**
- `http://localhost:3000`
- `http://localhost:3001`

**Production:**
- Добавить домен Vercel в `src/api/server.js`

## Usage in Next.js

### API Route (рекомендуется)
```javascript
// pages/api/discord-stats.js или app/api/discord-stats/route.js
export default async function handler(req, res) {
  try {
    const response = await fetch('http://localhost:3001/api/all-stats');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Discord stats' });
  }
}
```

### React Hook
```javascript
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

export function useDiscordStats() {
  const { data, error } = useSWR('/api/discord-stats', fetcher, {
    refreshInterval: 300000 // 5 минут
  });

  return {
    stats: data?.data,
    isLoading: !error && !data,
    error
  };
}
```

### Component Example
```jsx
import { useDiscordStats } from '../hooks/useDiscordStats';

export default function DiscordStatsComponent() {
  const { stats, isLoading, error } = useDiscordStats();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading stats</div>;

  return (
    <div>
      <h2>Tea-Fi Community</h2>
      <p>Program running for: {stats?.programUptime.formatted}</p>
      <p>Total members with roles: {stats?.roleMembers.length}</p>
      <p>Channel messages: {stats?.channelStats.messageCount}</p>
      
      <div className="members-grid">
        {stats?.roleMembers.map(member => (
          <div key={member.id} className="member-card">
            <img src={member.avatarURL} alt={member.displayName} />
            <h3>{member.displayName}</h3>
            <p>@{member.username}</p>
            <div className="roles">
              {member.roles.map(role => (
                <span key={role} className="role-badge">{role}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Configuration

Добавить в `.env`:
```env
API_PORT=3001
NODE_ENV=production # для production CORS
```

## Security Notes

- API не требует аутентификации (публичные данные)
- Rate limiting не реализован (рекомендуется для production)
- Кеширование уменьшает нагрузку на Discord API
- CORS настроен для безопасности

## Error Handling

Все endpoints возвращают стандартную структуру:
```json
{
  "success": false,
  "error": "Error message"
}
```

HTTP Status Codes:
- `200` - Success
- `404` - Endpoint not found
- `500` - Server error