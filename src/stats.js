import './style.css'

// MetaMask conflict prevention
if (typeof window !== 'undefined' && window.ethereum && Object.getOwnPropertyDescriptor(window, 'ethereum')) {
  // Store the original ethereum object and delete it temporarily
  const originalEthereum = window.ethereum;
  try {
    delete window.ethereum;
    // Re-assign it as a non-configurable property
    Object.defineProperty(window, 'ethereum', {
      value: originalEthereum,
      writable: false,
      configurable: false
    });
  } catch (e) {
    // If we can't redefine it, just leave it as is
    console.warn('MetaMask ethereum object could not be redefined:', e);
  }
}

// API Configuration - HTTPS через reverse proxy
const API_BASE_URL = 'https://api.tea-fi-ambassadors.com/api';
const CACHE_DURATION = 5 * 60 * 1000; // 5 минут

// Кеширование
let statsCache = null;
let cacheTimestamp = null;
let sugarCubesCache = null;
let sugarCubesTimestamp = null;

// Пагинация
let isShowingAll = false;
let currentPage = 1;
const MEMBERS_PER_PAGE = 20;

// Функция для получения Sugar Cubes статистики
async function fetchSugarCubes() {
  // Проверяем кеш
  if (sugarCubesCache && sugarCubesTimestamp && (Date.now() - sugarCubesTimestamp < CACHE_DURATION)) {
    return sugarCubesCache;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/engage-cubes`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    if (data.success) {
      sugarCubesCache = data.data;
      sugarCubesTimestamp = Date.now();
      return data.data;
    } else {
      throw new Error(data.error || 'Failed to fetch sugar cubes');
    }
  } catch (error) {
    console.error('Error fetching sugar cubes:', error);
    
    // Возвращаем статичные данные при ошибке
    return { amount: 150750 };
  }
}

// Функция для получения статистики Discord
async function fetchDiscordStats() {
  // Проверяем кеш
  if (statsCache && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION)) {
    return statsCache;
  }

  try {
    console.log(`Trying HTTPS API endpoint: ${API_BASE_URL}`);
    const response = await fetch(`${API_BASE_URL}/all-stats`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      console.log(`✅ Successfully fetched data from ${API_BASE_URL}`);
      statsCache = data.data;
      cacheTimestamp = Date.now();
      return data.data;
    } else {
      throw new Error(data.error || 'Failed to fetch stats');
    }
  } catch (error) {
    console.error('API request failed:', error);
    
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
    'Tea Master': '#FFB3D9',
    'Tea Chad': '#E6006E',
    'Trainee': '#4A90E2',
    'Ambassador': '#FF007A'
  };
  return colors[role] || '#FF007A';
}

// Функция для получения приоритета роли (чем выше число, тем выше роль)
function getRolePriority(role) {
  const priorities = {
    'Tea-OG': 1,      // Базовая роль
    'Tea Fan': 2,
    'Tea Master': 3,
    'Tea Chad': 4,
    'Trainee': 5,
    'Ambassador': 6   // Высшая роль
  };
  return priorities[role] || 0;
}

// Функция для получения высшей роли участника
function getHighestRole(roles) {
  if (!roles || roles.length === 0) return null;
  
  return roles.reduce((highest, current) => {
    return getRolePriority(current) > getRolePriority(highest) ? current : highest;
  });
}

// Функция для показа всех участников с пагинацией
function showAllMembers() {
  isShowingAll = true;
  currentPage = 1;
  
  const membersContainer = document.querySelector('.members-container');
  if (membersContainer && statsCache?.roleMembers) {
    membersContainer.innerHTML = renderMembers(statsCache.roleMembers);
  }
}

// Функция для смены страницы
function changePage(page) {
  currentPage = page;
  
  const membersContainer = document.querySelector('.members-container');
  if (membersContainer && statsCache?.roleMembers) {
    membersContainer.innerHTML = renderMembers(statsCache.roleMembers);
  }
}

// Функция для рендеринга участников с поддержкой пагинации
function renderMembers(members) {
  if (!members || members.length === 0) {
    return '<div class="no-data">No members data available</div>';
  }

  // Сортируем участников по высшей роли (по убыванию приоритета)
  const sortedMembers = [...members].sort((a, b) => {
    const aHighestRole = getHighestRole(a.roles);
    const bHighestRole = getHighestRole(b.roles);
    const aPriority = getRolePriority(aHighestRole);
    const bPriority = getRolePriority(bHighestRole);
    
    // Если приоритеты ролей равны, сортируем по дате присоединения (раньше = выше в рейтинге)
    if (aPriority === bPriority) {
      return new Date(a.joinedAt) - new Date(b.joinedAt);
    }
    
    return bPriority - aPriority;
  });

  let displayMembers;
  let showPagination = false;
  
  if (isShowingAll) {
    // Показываем с пагинацией
    const startIndex = (currentPage - 1) * MEMBERS_PER_PAGE;
    const endIndex = startIndex + MEMBERS_PER_PAGE;
    displayMembers = sortedMembers.slice(startIndex, endIndex);
    showPagination = sortedMembers.length > MEMBERS_PER_PAGE;
  } else {
    // Показываем только топ-10
    displayMembers = sortedMembers.slice(0, 10);
  }

  const renderMembersList = () => {
    return displayMembers.map((member, index) => {
      const position = isShowingAll ? (currentPage - 1) * MEMBERS_PER_PAGE + index + 1 : index + 1;
      const highestRole = getHighestRole(member.roles);
      
      return `
        <div class="ranking-item" data-position="${position}">
          <div class="ranking-position">
            <span class="position-number">#${position}</span>
          </div>
          
          <div class="ranking-avatar">
            <img src="${member.avatarURL}" alt="${member.displayName}" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
            <div class="avatar-border" style="border-color: ${getRoleColor(highestRole)}"></div>
          </div>
          
          <div class="ranking-info">
            <div class="ranking-main">
              <h3 class="ranking-name">${member.displayName}</h3>
              <p class="ranking-username">@${member.username}</p>
            </div>
            
            <div class="ranking-roles">
              ${member.roles
                .sort((a, b) => getRolePriority(b) - getRolePriority(a)) // Сортируем роли по приоритету
                .map(role => `
                  <span class="role-badge ${role === highestRole ? 'highest-role' : ''}" 
                        style="background-color: ${getRoleColor(role)}20; border-color: ${getRoleColor(role)}50; color: ${getRoleColor(role)}">
                    ${role}
                  </span>
                `).join('')}
            </div>
          </div>
          
          <div class="ranking-stats">
            <span class="join-date">Joined ${formatDate(member.joinedAt)}</span>
          </div>
        </div>
      `;
    }).join('');
  };

  const renderPagination = () => {
    if (!showPagination) return '';
    
    const totalPages = Math.ceil(sortedMembers.length / MEMBERS_PER_PAGE);
    let paginationHTML = '<div class="pagination">';
    
    // Previous button
    if (currentPage > 1) {
      paginationHTML += `<button class="pagination-btn" onclick="changePage(${currentPage - 1})">
        <i class="fas fa-chevron-left"></i>
      </button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        paginationHTML += `<button class="pagination-btn active">${i}</button>`;
      } else if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        paginationHTML += `<button class="pagination-btn" onclick="changePage(${i})">${i}</button>`;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        paginationHTML += `<span class="pagination-dots">...</span>`;
      }
    }
    
    // Next button
    if (currentPage < totalPages) {
      paginationHTML += `<button class="pagination-btn" onclick="changePage(${currentPage + 1})">
        <i class="fas fa-chevron-right"></i>
      </button>`;
    }
    
    paginationHTML += '</div>';
    return paginationHTML;
  };

  const showAllButton = !isShowingAll && sortedMembers.length > 10 ? `
    <div class="show-all-container">
      <button class="show-all-btn" onclick="showAllMembers()">
        <i class="fas fa-users"></i>
        Show All Members (${sortedMembers.length})
      </button>
    </div>
  ` : '';

  return `
    <div class="ranking-list">
      ${renderMembersList()}
    </div>
    ${showAllButton}
    ${renderPagination()}
  `;
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

  // Подсчет участников с ролью Ambassador
  const ambassadorCount = stats.roleMembers ? stats.roleMembers.filter(member => 
    member.roles && member.roles.includes('Ambassador')).length : 0;

  // Сортируем роли по приоритету (по убыванию: Ambassador первый)
  const sortedRoleStats = Object.entries(roleStats).sort(([roleA], [roleB]) => {
    return getRolePriority(roleB) - getRolePriority(roleA);
  });

  return `
    <div class="stats-grid">
      <div class="stat-card modern">
        <div class="stat-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">${stats.roleMembers?.length || 0}</h3>
          <p class="stat-label">Total Participants</p>
        </div>
      </div>
      
      <div class="stat-card modern">
        <div class="stat-icon">
          <i class="fas fa-hands-helping"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">${stats.channelStats?.messageCount || 0}</h3>
          <p class="stat-label">Total Contributions</p>
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
    </div>

    <!-- Sugar Cubes Special Card -->
    <div class="sugar-cubes-card">
      <div class="sugar-cubes-content">
        <div class="sugar-cubes-icon">
          <i class="fas fa-cube"></i>
        </div>
        <div class="sugar-cubes-info">
          <h3 class="sugar-cubes-number" id="stats-sugar-cubes">150,750</h3>
          <p class="sugar-cubes-label">Total Sugar Cubes Earned</p>
        </div>
        <div class="sugar-cubes-decoration">
          <div class="cube-particle cube-1"></div>
          <div class="cube-particle cube-2"></div>
          <div class="cube-particle cube-3"></div>
        </div>
      </div>
    </div>

    <div class="role-distribution">
      <h3 class="section-subtitle role-distribution-title"><span class="role-red">Role</span> <span class="distribution-white">Distribution</span></h3>
      <div class="role-stats-grid">
        ${sortedRoleStats.map(([role, count]) => `
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
          <span class="nav-brand">Tea-Fi Ambassador Community Stats</span>
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
            Tea-Fi <span class="gradient-text">Ambassador Community Stats</span>
          </h1>
          <h2 class="hero-subtitle">
            Real-time Ambassador community statistics and member insights
          </h2>
          <p class="hero-description">
            Track our growing community of Tea-Fi ambassadors and contributors
          </p>
        </div>
        
        <div class="hero-visual">
          <div class="stats-visual">
            <div class="logo-showcase">
              <img src="/ambassador.webp" alt="Tea Ambassador" class="hero-logo" />
              <div class="logo-glow"></div>
              <div class="logo-particles">
                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
                <div class="particle particle-4"></div>
                <div class="particle particle-5"></div>
                <div class="particle particle-6"></div>
              </div>
              <div class="floating-minimal">
                <div class="float-dot dot-1"></div>
                <div class="float-dot dot-2"></div>
                <div class="float-dot dot-3"></div>
                <div class="float-line line-1"></div>
                <div class="float-line line-2"></div>
              </div>
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
        <h2 class="section-title">Top <span class="gradient-text">Members</span></h2>
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
    const [stats, sugarCubes] = await Promise.all([
      fetchDiscordStats(),
      fetchSugarCubes()
    ]);
    
    // Обновляем статистику
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      statsContainer.innerHTML = renderStats(stats);
      
      // Обновляем Sugar Cubes после рендеринга статистики
      const sugarCubesElement = document.getElementById('stats-sugar-cubes');
      if (sugarCubesElement && sugarCubes) {
        const formattedAmount = (sugarCubes.amount || 150750).toLocaleString();
        sugarCubesElement.textContent = formattedAmount;
      }
    }

    // Обновляем участников
    const membersContainer = document.querySelector('.members-container');
    if (membersContainer) {
      membersContainer.innerHTML = renderMembers(stats.roleMembers);
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
      const [stats, sugarCubes] = await Promise.all([
        fetchDiscordStats(),
        fetchSugarCubes()
      ]);
      
      // Обновляем только контент, не перерисовывая всю страницу
      const statsContainer = document.querySelector('.stats-container');
      if (statsContainer && !statsContainer.querySelector('.loading-spinner')) {
        statsContainer.innerHTML = renderStats(stats);
        
        // Обновляем Sugar Cubes после рендеринга статистики
        const sugarCubesElement = document.getElementById('stats-sugar-cubes');
        if (sugarCubesElement && sugarCubes) {
          const formattedAmount = (sugarCubes.amount || 150750).toLocaleString();
          sugarCubesElement.textContent = formattedAmount;
        }
      }

      const membersContainer = document.querySelector('.members-container');
      if (membersContainer && !membersContainer.querySelector('.loading-spinner')) {
        membersContainer.innerHTML = renderMembers(stats.roleMembers);
      }
      
      console.log('Stats updated automatically:', { stats, sugarCubes });
    } catch (error) {
      console.error('Auto-update failed:', error);
    }
  }, 5 * 60 * 1000); // 5 минут
}

// Делаем функции доступными глобально для onclick handlers
window.showAllMembers = showAllMembers;
window.changePage = changePage;

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', initStatsPage);

// Инициализация сразу
setTimeout(initStatsPage, 100);