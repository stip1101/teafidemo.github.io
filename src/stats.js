import './style.css'

// API Configuration - ваш PebbleHost сервер
const API_BASE_URL = 'http://194.213.3.158:8104/api';
const CACHE_DURATION = 5 * 60 * 1000; // 5 минут

// Кеширование
let statsCache = null;
let cacheTimestamp = null;

// Функция для получения статистики Discord
async function fetchDiscordStats() {
  // Проверяем кеш
  if (statsCache && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION)) {
    return statsCache;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/all-stats`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    if (data.success) {
      statsCache = data.data;
      cacheTimestamp = Date.now();
      return data.data;
    } else {
      throw new Error(data.error || 'Failed to fetch stats');
    }
  } catch (error) {
    console.error('Error fetching Discord stats:', error);
    
    // Возвращаем моковые данные при ошибке
    const mockData = {
      roleMembers: [
        {
          id: "123456789012345678",
          username: "demo_user",
          displayName: "Demo User",
          avatarURL: "https://cdn.discordapp.com/embed/avatars/0.png",
          roles: ["Tea-OG"],
          joinedAt: new Date().toISOString()
        }
      ],
      channelStats: {
        channelId: "1397171466960634028",
        messageCount: 100,
        note: "Demo data - API not available",
        lastChecked: new Date().toISOString()
      },
      programUptime: {
        startDate: "2025-07-24",
        currentDate: new Date().toISOString().split('T')[0],
        totalDays: Math.floor((Date.now() - new Date('2025-07-24')) / (1000 * 60 * 60 * 24)),
        formatted: "1 month 4 days",
        milliseconds: Date.now() - new Date('2025-07-24').getTime()
      },
      lastUpdated: new Date().toISOString()
    };
    
    return mockData;
  }
}

// Функция для форматирования даты
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Функция для получения цвета роли
function getRoleColor(role) {
  const colors = {
    'Tea-OG': '#FF007A',
    'Tea Fan': '#FF4DA6',
    'Tea Enjoyer': '#FFB3D9',
    'Tea Chad': '#E6006E',
    'Ambassador': '#FF007A'
  };
  return colors[role] || '#FF007A';
}

// Функция для рендеринга участников
function renderMembers(members) {
  if (!members || members.length === 0) {
    return '<div class="no-data">No members data available</div>';
  }

  return members.map(member => `
    <div class="member-card modern">
      <div class="member-avatar">
        <img src="${member.avatarURL}" alt="${member.displayName}" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
      </div>
      <div class="member-info">
        <h3 class="member-name">${member.displayName}</h3>
        <p class="member-username">@${member.username}</p>
        <div class="member-roles">
          ${member.roles.map(role => `
            <span class="role-badge" style="background-color: ${getRoleColor(role)}20; border-color: ${getRoleColor(role)}50; color: ${getRoleColor(role)}">${role}</span>
          `).join('')}
        </div>
        <p class="member-joined">Joined: ${formatDate(member.joinedAt)}</p>
      </div>
    </div>
  `).join('');
}

// Функция для рендеринга статистики
function renderStats(stats) {
  const roleStats = {};
  
  // Подсчитываем количество участников по ролям
  if (stats.roleMembers) {
    stats.roleMembers.forEach(member => {
      member.roles.forEach(role => {
        roleStats[role] = (roleStats[role] || 0) + 1;
      });
    });
  }

  return `
    <div class="stats-grid">
      <div class="stat-card modern">
        <div class="stat-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">${stats.roleMembers?.length || 0}</h3>
          <p class="stat-label">Total Members</p>
        </div>
      </div>
      
      <div class="stat-card modern">
        <div class="stat-icon">
          <i class="fas fa-messages"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">${stats.channelStats?.messageCount || 0}</h3>
          <p class="stat-label">Channel Messages</p>
        </div>
      </div>
      
      <div class="stat-card modern">
        <div class="stat-icon">
          <i class="fas fa-clock"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">${stats.programUptime?.totalDays || 0}</h3>
          <p class="stat-label">Days Running</p>
        </div>
      </div>
      
      <div class="stat-card modern">
        <div class="stat-icon">
          <i class="fas fa-crown"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">${Object.keys(roleStats).length}</h3>
          <p class="stat-label">Active Roles</p>
        </div>
      </div>
    </div>

    <div class="role-distribution">
      <h3 class="section-subtitle">Role Distribution</h3>
      <div class="role-stats-grid">
        ${Object.entries(roleStats).map(([role, count]) => `
          <div class="role-stat-card">
            <div class="role-stat-header">
              <span class="role-badge" style="background-color: ${getRoleColor(role)}20; border-color: ${getRoleColor(role)}50; color: ${getRoleColor(role)}">${role}</span>
              <span class="role-count">${count}</span>
            </div>
            <div class="role-progress">
              <div class="role-progress-bar" style="width: ${(count / (stats.roleMembers?.length || 1)) * 100}%; background-color: ${getRoleColor(role)}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Основная функция инициализации
async function initStatsPage() {
  document.querySelector('#app').innerHTML = `
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-left">
          <div class="nav-logo">
            <img src="/whitesvg.svg" alt="TeaFi Logo" class="logo-img" />
          </div>
          <span class="nav-brand">Tea-Fi Community Stats</span>
        </div>
        
        <div class="nav-center">
          <div class="nav-links">
            <a href="/" class="nav-link">Home</a>
            <a href="#members" class="nav-link">Members</a>
            <a href="#stats" class="nav-link">Statistics</a>
          </div>
        </div>
        
        <div class="nav-right">
          <a href="https://discord.com/invite/DUVua49zrf" class="nav-cta" target="_blank">Join Discord</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero stats-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Tea-Fi <span class="gradient-text">Community Stats</span>
          </h1>
          <h2 class="hero-subtitle">
            Real-time Discord community statistics and member insights
          </h2>
          <p class="hero-description">
            Track our growing community of Tea-Fi ambassadors and contributors
          </p>
        </div>
        
        <div class="hero-visual">
          <div class="stats-visual">
            <div class="loading-spinner">
              <div class="spinner"></div>
              <p>Loading community stats...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="statistics-section" id="stats">
      <div class="container">
        <h2 class="section-title">Community <span class="gradient-text">Overview</span></h2>
        <div class="stats-container">
          <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading statistics...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Members Section -->
    <section class="members-section" id="members">
      <div class="container">
        <h2 class="section-title">Our <span class="gradient-text">Members</span></h2>
        <div class="members-container">
          <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading members...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Info Section -->
    <section class="program-info">
      <div class="container">
        <div class="program-card modern">
          <h3>About Tea-Fi Ambassador Program</h3>
          <p>Our community has been growing since <span class="highlight" id="program-start-date">July 24, 2025</span>.</p>
          <p>Join our Discord to become part of the Tea-Fi ecosystem and earn your ambassador roles.</p>
          <div class="program-actions">
            <a href="/" class="cta-button primary">Learn More</a>
            <a href="https://discord.com/invite/DUVua49zrf" class="cta-button secondary" target="_blank">Join Discord</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="collaboration-logos">
              <div class="collaboration-logo">
                <img src="/teaficolab.svg" alt="TeaFi Colab" class="colab-logo" />
              </div>
              <div class="collaboration-connector">
                <span class="connector-text">X</span>
              </div>
              <div class="collaboration-logo">
                <img src="/solus.svg" alt="Solus" class="solus-logo" />
              </div>
            </div>
            <p class="footer-tagline">Building the future of Web3, one cup at a time.</p>
          </div>
          
          <div class="footer-social">
            <h3 class="social-title">Join Our Community</h3>
            <div class="social-links">
              <a href="https://github.com/Tea-Fi" class="social-link" target="_blank" rel="noopener">
                <i class="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="https://t.me/TeaFi_Official" class="social-link" target="_blank" rel="noopener">
                <i class="fab fa-telegram"></i>
                <span>Telegram</span>
              </a>
              <a href="https://medium.com/@teaFi" class="social-link" target="_blank" rel="noopener">
                <i class="fab fa-medium"></i>
                <span>Medium</span>
              </a>
              <a href="https://x.com/TeaFi_Official" class="social-link" target="_blank" rel="noopener">
                <i class="fab fa-x-twitter"></i>
                <span>Twitter</span>
              </a>
              <a href="https://discord.com/invite/DUVua49zrf" class="social-link" target="_blank" rel="noopener">
                <i class="fab fa-discord"></i>
                <span>Discord</span>
              </a>
            </div>
            <a href="https://t.me/StanislavSolus" class="dev-contact" target="_blank" rel="noopener">
              Stay in touch with the Ambassador Program development team
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Загружаем статистику
  try {
    const stats = await fetchDiscordStats();
    
    // Обновляем статистику
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      statsContainer.innerHTML = renderStats(stats);
    }

    // Обновляем участников
    const membersContainer = document.querySelector('.members-container');
    if (membersContainer) {
      membersContainer.innerHTML = `
        <div class="members-grid">
          ${renderMembers(stats.roleMembers)}
        </div>
      `;
    }

    // Обновляем информацию о программе
    const programStartDate = document.querySelector('#program-start-date');
    if (programStartDate && stats.programUptime) {
      programStartDate.textContent = formatDate(stats.programUptime.startDate);
    }

    // Скрываем loading в hero
    const heroSpinner = document.querySelector('.stats-visual .loading-spinner');
    if (heroSpinner) {
      heroSpinner.style.display = 'none';
    }

    console.log('Stats loaded successfully:', stats);
  } catch (error) {
    console.error('Failed to load stats:', error);
    
    // Показываем ошибку пользователю
    const containers = [
      document.querySelector('.stats-container'),
      document.querySelector('.members-container')
    ];
    
    containers.forEach(container => {
      if (container) {
        container.innerHTML = `
          <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>Unable to load community stats</h3>
            <p>Please check that the Discord bot API is running on localhost:3001</p>
            <button onclick="window.location.reload()" class="cta-button primary">Retry</button>
          </div>
        `;
      }
    });
  }

  // Добавляем smooth scroll для навигации
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = 80;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Автообновление каждые 5 минут
  setInterval(async () => {
    try {
      const stats = await fetchDiscordStats();
      
      // Обновляем только контент, не перерисовывая всю страницу
      const statsContainer = document.querySelector('.stats-container');
      if (statsContainer && !statsContainer.querySelector('.loading-spinner')) {
        statsContainer.innerHTML = renderStats(stats);
      }

      const membersContainer = document.querySelector('.members-container .members-grid');
      if (membersContainer) {
        membersContainer.innerHTML = renderMembers(stats.roleMembers);
      }
      
      console.log('Stats updated automatically');
    } catch (error) {
      console.error('Auto-update failed:', error);
    }
  }, 5 * 60 * 1000); // 5 минут
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', initStatsPage);

// Инициализация сразу
setTimeout(initStatsPage, 100);