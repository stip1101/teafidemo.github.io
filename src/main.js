import './style.css'

// API Configuration
const API_BASE_URL = 'https://api.tea-fi-ambassadors.com/api';
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
    
    // Возвращаем статичные данные при ошибке
    return {
      roleMembers: [],
      channelStats: { messageCount: 1838 },
      programUptime: { totalDays: 138 }
    };
  }
}

// Initialize the app
document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="nav">
    <div class="nav-container">
      <div class="nav-left">
        <div class="nav-logo">
          <img src="/whitesvg.svg" alt="TeaFi Logo" class="logo-img" />
        </div>
        <span class="nav-brand">Tea-Fi Ambassadors</span>
      </div>
      
      <div class="nav-center">
        <div class="nav-links">
          <a href="#roles" class="nav-link">Roles</a>
          <a href="#progression" class="nav-link">Progression</a>
          <a href="#faq" class="nav-link">FAQ</a>
          <a href="stats.html" class="nav-link">Stats</a>
        </div>
      </div>
      
      <div class="nav-right">
        <a href="https://discord.com/invite/DUVua49zrf" class="nav-cta" target="_blank">Join Discord</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          Become a <span class="gradient-text">Tea-Fi Ambassador</span>
        </h1>
        <h2 class="hero-subtitle">
          Farm your status. Build your influence. Shape Tea-Fi.
        </h2>
        <p class="hero-description">
          It starts simple. It can go big.
        </p>
      </div>
      
              <div class="hero-visual">
          <div class="logo-showcase">
            <img src="/whitesvg.svg" alt="TeaFi Logo" class="hero-logo" />
            <div class="logo-glow"></div>
            <div class="logo-particles">
              <div class="particle particle-1"></div>
              <div class="particle particle-2"></div>
              <div class="particle particle-3"></div>
              <div class="particle particle-4"></div>
              <div class="particle particle-5"></div>
              <div class="particle particle-6"></div>
            </div>
          </div>
        
        <!-- Minimal floating elements -->
        <div class="floating-minimal">
          <div class="float-dot dot-1"></div>
          <div class="float-dot dot-2"></div>
          <div class="float-dot dot-3"></div>
          <div class="float-line line-1"></div>
          <div class="float-line line-2"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Getting Started Section -->
  <section class="getting-started">
    <div class="getting-started-container">
      <div class="getting-started-content">
        <h2 class="section-title">Program <span class="gradient-text">Stats</span></h2>
        
        <!-- Statistics Plaque -->
        <div class="main-stats-plaque">
          <div class="main-stats-content">
            <div class="main-stat-item">
              <div class="main-stat-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="main-stat-info">
                <h3 class="main-stat-number" id="total-participants">76</h3>
                <p class="main-stat-label">Total Participants</p>
              </div>
            </div>
            
            <div class="main-stat-divider"></div>
            
            <div class="main-stat-item">
              <div class="main-stat-icon">
                <i class="fas fa-hands-helping"></i>
              </div>
              <div class="main-stat-info">
                <h3 class="main-stat-number" id="total-contributions">1,838</h3>
                <p class="main-stat-label">Total Contributions</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sugar Cubes Special Card -->
        <div class="main-sugar-cubes-card">
          <div class="main-sugar-cubes-content">
            <div class="main-sugar-cubes-icon">
              <i class="fas fa-cube"></i>
            </div>
            <div class="main-sugar-cubes-info">
              <h3 class="main-sugar-cubes-number">150,750</h3>
              <p class="main-sugar-cubes-label">Total Sugar Cubes Earned</p>
            </div>
            <div class="main-sugar-cubes-decoration">
              <div class="main-cube-particle main-cube-1"></div>
              <div class="main-cube-particle main-cube-2"></div>
              <div class="main-cube-particle main-cube-3"></div>
            </div>
          </div>
        </div>
        
        <h2 class="getting-started-title">Ready to Start Your Journey?</h2>
        
        <div class="first-task-highlight">
          <div class="task-highlight-header">
            <div class="task-highlight-badge">FIRST TASK</div>
            <div class="task-highlight-timer">⏱️ Takes 10 minutes</div>
          </div>
          <h3 class="task-highlight-title">Create a post about Tea-Fi Web App and making a swap</h3>
          <p class="task-highlight-description">Share your experience with the community and help others discover Tea-Fi</p>
          
          <div class="brand-guide-link">
            <a href="https://drive.google.com/drive/folders/1yeiiS8_3-fZr5knD9egqCZE-QdQDNQpe" target="_blank" rel="noopener">
              Use our Brand Guide for content creation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="task-highlight-cta">
            <button class="cta-button-hero" id="getStartedBtn">
              <span>Get Your First Role Now</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="steps-plaque">
          <div class="steps-plaque-content">
            <div class="steps-plaque-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="steps-plaque-text">
              <h3>Follow these simple steps to earn your first role</h3>
            </div>
          </div>
        </div>
        
        <div class="task-flow-modern">
          <div class="flow-step">
            <div class="flow-number">1</div>
            <div class="flow-content">
              <h3>Complete 1 Simple Task</h3>
              <p>Create a post about Tea-Fi Web App and making a swap</p>
            </div>
          </div>
          
          <div class="flow-arrow">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <path d="M28 4L36 12L28 20M36 12H4" stroke="#FF007A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <div class="flow-step" onclick="window.open('https://discord.gg/DC6dz5ZapU', '_blank')" style="cursor: pointer;">
            <div class="flow-badge">Tea-OG</div>
            <div class="flow-content">
              <h3>Get Your Tea-OG Role</h3>
              <p>Become an official community member</p>
            </div>
          </div>
          
          <div class="flow-arrow">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <path d="M28 4L36 12L28 20M36 12H4" stroke="#FF007A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <div class="flow-step">
            <div class="flow-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#FF007A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="rgba(255, 0, 122, 0.1)"/>
              </svg>
            </div>
            <div class="flow-content">
              <h3>Start Your Journey</h3>
              <p>Unlock endless possibilities in Tea-Fi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Progression System -->
  <section class="progression">
    <div class="container">
      <h2 class="section-title">How Deep Can You <span class="gradient-text">Go?</span></h2>
      <div class="progression-track">
        <div class="role-card modern" data-role="tea-og">
          <div class="role-icon-modern">
            <img src="/tea-og.webp" alt="Tea-OG" style="width: 48px; height: 48px;" />
          </div>
          <h3>Tea-OG</h3>
          <p>Entry role for anyone who makes the first public contribution. The first step into the ecosystem.</p>
        </div>
        
        <div class="progression-arrow-modern">
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
            <path d="M28 4L36 12L28 20M36 12H4" stroke="#FF007A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        
        <div class="role-card modern" data-role="tea-fan">
          <div class="role-icon-modern">
            <img src="/tea-fan.webp" alt="Tea Fan" style="width: 48px; height: 48px;" />
          </div>
          <h3>Tea Fan</h3>
          <p>Active contributor in content creation, community support and feedback activities.</p>
        </div>
        
        <div class="progression-arrow-modern">
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
            <path d="M28 4L36 12L28 20M36 12H4" stroke="#FF007A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        
        <div class="role-card modern" data-role="tea-enjoyer">
          <div class="role-icon-modern">
            <img src="/tea-enjoyer.webp" alt="Tea Enjoyer" style="width: 48px; height: 48px;" />
          </div>
          <h3>Tea Enjoyer</h3>
          <p>Deeper involvement in events, organizational activities and community building.</p>
        </div>
        
        <div class="progression-arrow-modern">
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
            <path d="M28 4L36 12L28 20M36 12H4" stroke="#FF007A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        
        <div class="role-card modern" data-role="tea-chad">
          <div class="role-icon-modern">
            <img src="/tea-chad.webp" alt="Tea Chad" style="width: 48px; height: 48px;" />
          </div>
          <h3>Tea Chad</h3>
          <p>Community leaders who shape culture, attract members and guide product direction.</p>
        </div>
      </div>
      
      <div class="ambassador-track">
        <div class="ambassador-card modern">
          <div class="role-icon-modern special">
            <img src="/trainee.webp" alt="Trainee" style="width: 48px; height: 48px;" />
          </div>
          <h3>Trainee</h3>
          <p>Available to creators and influencers with 5000+ audience. Perfect entry point for content creators who want to grow with Tea-Fi.</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSetOpT35aFvFX5a6iBseEGTwraiqWUrTMxD9a3iccAM8pN6zQ/viewform" target="_blank" class="trainee-form-link">Apply via Form</a>
        </div>
        
        <div class="ambassador-card modern">
          <div class="role-icon-modern special">
            <img src="/ambassador.webp" alt="Ambassador" style="width: 48px; height: 48px;" />
          </div>
          <h3>Ambassador</h3>
          <p>KOLs, public partners, and external network builders. Highly visible extension of Tea-Fi's external communication.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contributor Check Section -->
  <section class="contributor-check">
    <div class="container">
      <h2 class="section-title">Are You <span class="gradient-text">Contributor Material?</span></h2>
      
      <div class="brand-guide-notice">
        <div class="brand-guide-notice-content">
          <h3>Use our Brand Guide to create professional content</h3>
          <p>Access logos, colors, fonts for consistent Tea-Fi branding</p>
          <a href="https://drive.google.com/drive/folders/1yeiiS8_3-fZr5knD9egqCZE-QdQDNQpe" class="brand-guide-btn" target="_blank" rel="noopener">
            Access Brand Guide
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div class="contributor-types">
        <div class="contributor-card modern">
          <div class="contributor-icon-modern">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2Z" stroke="#FF007A" stroke-width="2" fill="none"/>
              <path d="M14 2V8H20" stroke="#FF007A" stroke-width="2" fill="none"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="#FF007A" stroke-width="2"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="#FF007A" stroke-width="2"/>
              <line x1="10" y1="9" x2="8" y2="9" stroke="#FF007A" stroke-width="2"/>
            </svg>
          </div>
          <h3>Content Creators</h3>
          <p>Making the product approachable through tutorials, guides, and educational content</p>
        </div>
        
        <div class="contributor-card modern">
          <div class="contributor-icon-modern">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#FF007A" stroke-width="2" fill="none"/>
              <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="#FF007A" stroke-width="2" fill="none"/>
              <line x1="9" y1="9" x2="9.01" y2="9" stroke="#FF007A" stroke-width="2"/>
              <line x1="15" y1="9" x2="15.01" y2="9" stroke="#FF007A" stroke-width="2"/>
            </svg>
          </div>
          <h3>Meme Creators</h3>
          <p>Driving hype and engagement through creative and viral content</p>
        </div>
        
        <div class="contributor-card modern">
          <div class="contributor-icon-modern">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M18 8H16L15 5H9L8 8H6A2 2 0 0 0 4 10V18A2 2 0 0 0 6 20H18A2 2 0 0 0 20 18V10A2 2 0 0 0 18 8Z" stroke="#FF007A" stroke-width="2" fill="none"/>
              <circle cx="12" cy="14" r="3" stroke="#FF007A" stroke-width="2" fill="none"/>
            </svg>
          </div>
          <h3>Event Organizers</h3>
          <p>Hosting events, AMAs, and bringing the community together</p>
        </div>
        
        <div class="contributor-card modern">
          <div class="contributor-icon-modern">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#FF007A" stroke-width="2" fill="none"/>
            </svg>
          </div>
          <h3>Community Members</h3>
          <p>Generating daily engagement and fostering meaningful discussions</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Program Rules Section -->
  <section class="program-rules">
    <div class="container">
      <div class="rules-notice">
        <div class="rules-notice-content">
          <h3>Please carefully review the program participation rules</h3>
          <a href="https://docs.google.com/document/d/1JJUgcAVJTsg7mG3K8qTYrzF1CrcvyQ5GdVcZ87Tf4pg/edit?usp=sharing" class="rules-link" target="_blank" rel="noopener">
            Read Program Rules
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="faq">
    <div class="container">
      <h2 class="section-title">Spill The <span class="gradient-text">Tea - FAQ</span></h2>
      
      <div class="faq-container two-column">
        <!-- First Column -->
        <div class="faq-column">
                     <div class="faq-item" onclick="toggleFAQ(this, event)">
             <div class="faq-question">
               <span class="faq-text">What is Tea-Fi?</span>
              <div class="faq-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="faq-svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="faq-answer">
              <div class="faq-content">
                <p>No more juggling wallets or switching between 12 tabs just to complete a single transaction.</p>
                <p>Tea-Fi is a self-custodial, cross-chain DeFi platform that unifies your entire Web3 journey. It brings together swaps, staking, bridging, gas payments, and yield generation - all in one seamless, intuitive interface designed for clarity, not chaos.</p>
                
                                 <div class="faq-item sub-item" onclick="toggleFAQ(this, event)">
                  <div class="faq-question">
                    <span class="faq-text">How does Tea-Fi simplify DeFi?</span>
                    <div class="faq-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="faq-svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div class="faq-answer">
                    <div class="faq-content">
                      <p>Tea-Fi eliminates the need for multiple wallets, bridges, and aggregators. You get a unified command center with features like:</p>
                      <p><strong>Easy-Gas:</strong> Pay gas fees using stablecoins or synthetic assets - even without holding native tokens.</p>
                      <p><strong>SuperSwap:</strong> Cross-chain swaps and bridging in one click, with all background logic handled for you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

                                <div class="faq-item" onclick="toggleFAQ(this, event)">
             <div class="faq-question">
               <span class="faq-text">How do I get started?</span>
               <div class="faq-icon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="faq-svg">
                   <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
               </div>
             </div>
             <div class="faq-answer">
               <div class="faq-content">
                 <div class="rules-notice">
                   <div class="rules-notice-content">
                     <h3>Please carefully review the program participation rules</h3>
                     <a href="https://docs.google.com/document/d/1JJUgcAVJTsg7mG3K8qTYrzF1CrcvyQ5GdVcZ87Tf4pg/edit?usp=sharing" class="rules-link" target="_blank" rel="noopener">
                       Read Program Rules
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                         <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                     </a>
                   </div>
                 </div>
                 <p>No forms, no applications. Simply complete your first contribution to unlock the Tea-OG role - your entry point into the program, gated channels, and future opportunities.</p>
                 <button class="cta-button-enhanced primary" style="margin-top: 16px;" onclick="window.open('https://discord.com/invite/DUVua49zrf', '_blank'); event.stopPropagation();">
                   <span class="cta-button-text">Start Contributing</span>
                   <div class="cta-button-icon">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                       <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                   </div>
                   <div class="cta-button-bg"></div>
                 </button>
               </div>
             </div>
           </div>

                     <div class="faq-item" onclick="toggleFAQ(this, event)">
             <div class="faq-question">
               <span class="faq-text">How do I level up?</span>
              <div class="faq-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="faq-svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="faq-answer">
              <div class="faq-content">
                <p>Our system rewards consistency and value. The more you contribute - in creativity, effort, or impact - the more recognition and opportunities you unlock.</p>
                <p>Progression isn't based on grinding, but on meaningful engagement.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Column -->
        <div class="faq-column">
                     <div class="faq-item" onclick="toggleFAQ(this, event)">
             <div class="faq-question">
               <span class="faq-text">What type of contributions count?</span>
              <div class="faq-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="faq-svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="faq-answer">
              <div class="faq-content">
                <p>We value quality over quantity. Here's what counts:</p>
                <p>• Informative and engaging content (threads, videos, infographics)</p>
                <p>• Meme creation and viral formats</p>
                <p>• Community support and active participation in discussions</p>
                <p>• Providing structured feedback on the product and ambassador program</p>
              </div>
            </div>
          </div>

                     <div class="faq-item" onclick="toggleFAQ(this, event)">
             <div class="faq-question">
               <span class="faq-text">Can I lose my role?</span>
              <div class="faq-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="faq-svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="faq-answer">
              <div class="faq-content">
                <p>Roles remain, but active contributors naturally stay at the top.</p>
              </div>
            </div>
          </div>

                     <div class="faq-item" onclick="toggleFAQ(this, event)">
             <div class="faq-question">
               <span class="faq-text">What Rewards can I get?</span>
              <div class="faq-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="faq-svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="faq-answer">
              <div class="faq-content">
                <p>Active contributors earn more than just badges - they gain recognition, early access to features, private contributor perks, and evolving reward opportunities.</p>
                <p>Over time, consistently valuable contributors may unlock enhanced incentives tied to their impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="final-cta">
    <div class="container">
      <div class="cta-frame">
        <div class="cta-frame-inner">
          <div class="cta-content">
            <h2 class="section-title">Your <span class="gradient-text">Tea-Fi Journey</span> Starts Here</h2>
            <p class="cta-description">The sooner you start, the higher you can climb.</p>
            
            <div class="cta-actions">
              <button class="cta-button-enhanced primary" id="joinDiscordBtn">
                <span class="cta-button-text">Join Discord</span>
                <div class="cta-button-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" fill="currentColor"/>
                  </svg>
                </div>
                <div class="cta-button-bg"></div>
              </button>
            </div>
          </div>
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
`

// Beautiful FAQ toggle function with animations
function toggleFAQ(element, event) {
  // Prevent event bubbling for sub-items
  if (event && element.classList.contains('sub-item')) {
    event.stopPropagation();
  }
  
  const answer = element.querySelector('.faq-answer');
  const icon = element.querySelector('.faq-icon');
  const svg = icon.querySelector('.faq-svg');
  const isSubItem = element.classList.contains('sub-item');
  
  // For sub-items, only close other sub-items within the same parent
  if (isSubItem) {
    const parentElement = element.closest('.faq-content');
    const siblingSubItems = parentElement.querySelectorAll('.faq-item.sub-item');
    siblingSubItems.forEach(item => {
      if (item !== element) {
        const otherAnswer = item.querySelector('.faq-answer');
        const otherIcon = item.querySelector('.faq-icon');
        const otherSvg = otherIcon.querySelector('.faq-svg');
        
        otherAnswer.style.maxHeight = '0px';
        otherAnswer.style.opacity = '0';
        otherSvg.style.transform = 'rotate(0deg)';
        item.classList.remove('active');
        
        setTimeout(() => {
          otherAnswer.style.display = 'none';
        }, 300);
      }
    });
  } else {
    // For main items, close all other main items
    const allMainItems = document.querySelectorAll('.faq-item:not(.sub-item)');
    allMainItems.forEach(item => {
      if (item !== element) {
        const otherAnswer = item.querySelector('.faq-answer');
        const otherIcon = item.querySelector('.faq-icon');
        const otherSvg = otherIcon.querySelector('.faq-svg');
        
        otherAnswer.style.maxHeight = '0px';
        otherAnswer.style.opacity = '0';
        otherSvg.style.transform = 'rotate(0deg)';
        item.classList.remove('active');
        
        setTimeout(() => {
          otherAnswer.style.display = 'none';
        }, 300);
      }
    });
  }
  
  // Toggle current FAQ item with smooth animation
  const isActive = element.classList.contains('active');
  
  if (isActive) {
    // Close current item
    answer.style.maxHeight = '0px';
    answer.style.opacity = '0';
    svg.style.transform = 'rotate(0deg)';
    element.classList.remove('active');
    
    setTimeout(() => {
      answer.style.display = 'none';
    }, 300);
  } else {
    // Open current item
    answer.style.display = 'block';
    answer.style.maxHeight = '0px';
    answer.style.opacity = '0';
    
    // Force reflow
    answer.offsetHeight;
    
    // Animate open
    answer.style.maxHeight = answer.scrollHeight + 'px';
    answer.style.opacity = '1';
    svg.style.transform = 'rotate(180deg)';
    element.classList.add('active');
    
    // Set final max-height after animation
    setTimeout(() => {
      if (element.classList.contains('active')) {
        answer.style.maxHeight = 'none';
      }
    }, 300);
  }
}

// Add interactive functionality
function initInteractivity() {
  // FAQ functionality is now handled by onclick in HTML

  // Enhanced role card hover effects
  const roleCards = document.querySelectorAll('.role-card');
  roleCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-12px) scale(1.03)';
      card.style.boxShadow = '0 25px 80px rgba(255, 0, 122, 0.25)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '';
    });
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Only prevent default for anchor links, allow normal navigation for external pages
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        let targetElement;
        
        // Map navigation links to actual sections
        switch(targetId) {
          case 'roles':
            targetElement = document.querySelector('.progression');
            break;
          case 'progression':
            targetElement = document.querySelector('.contributor-check');
            break;
          case 'faq':
            targetElement = document.querySelector('.faq');
            break;
          default:
            targetElement = document.getElementById(targetId);
        }
        
        if (targetElement) {
          const headerHeight = 80; // navbar height
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
      // For non-anchor links (like stats.html), allow normal navigation
    });
  });

  // Smooth scroll for CTA buttons
  const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-enhanced, .cta-button-hero');
  ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (button.id === 'getStartedBtn') {
        window.open('https://discord.com/invite/DUVua49zrf', '_blank');
      } else if (button.id === 'joinDiscordBtn') {
        window.open('https://discord.com/invite/DUVua49zrf', '_blank');
      }
    });
  });

  // Enhanced task card interactivity
  const taskCard = document.querySelector('.task-card-modern');
  if (taskCard) {
    taskCard.addEventListener('mouseenter', () => {
      taskCard.style.transform = 'translateY(-8px)';
      taskCard.style.boxShadow = '0 20px 60px rgba(255, 0, 122, 0.2)';
    });
    
    taskCard.addEventListener('mouseleave', () => {
      taskCard.style.transform = 'translateY(0)';
      taskCard.style.boxShadow = '';
    });
  }

  // Floating dots animation
  const dots = document.querySelectorAll('.float-dot');
  dots.forEach((dot, index) => {
    dot.style.animationDelay = `${index * 0.8}s`;
  });

  // Add scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe sections for animations
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Enhanced logo showcase animation
  const heroLogo = document.querySelector('.hero-logo');
  const logoShowcase = document.querySelector('.logo-showcase');
  
  if (heroLogo && logoShowcase) {
    // Breathing animation
    setInterval(() => {
      heroLogo.style.transform = 'scale(1.08) rotate(1deg)';
      setTimeout(() => {
        heroLogo.style.transform = 'scale(1) rotate(0deg)';
      }, 800);
    }, 4000);

    // Mouse tracking effect
    logoShowcase.addEventListener('mousemove', (e) => {
      const rect = logoShowcase.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (y / rect.height) * 20;
      const rotateY = (x / rect.width) * -20;
      
      heroLogo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    logoShowcase.addEventListener('mouseleave', () => {
      heroLogo.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });

    // Click effect
    logoShowcase.addEventListener('click', () => {
      heroLogo.style.transform = 'scale(1.15) rotate(360deg)';
      heroLogo.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      
      setTimeout(() => {
        heroLogo.style.transform = 'scale(1) rotate(0deg)';
        heroLogo.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      }, 800);
    });
  }
}

// Make toggleFAQ function global
window.toggleFAQ = toggleFAQ;

// Функция для обновления статистики на главной странице
async function updateMainPageStats() {
  try {
    const stats = await fetchDiscordStats();
    
    // Обновляем количество участников
    const participantsElement = document.getElementById('total-participants');
    if (participantsElement && stats.roleMembers) {
      participantsElement.textContent = stats.roleMembers.length || 76;
    }
    
    // Обновляем количество вкладов
    const contributionsElement = document.getElementById('total-contributions');
    if (contributionsElement && stats.channelStats) {
      contributionsElement.textContent = stats.channelStats.messageCount || 1838;
    }
    
    console.log('Main page stats updated:', stats);
  } catch (error) {
    console.error('Failed to update main page stats:', error);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initInteractivity();
  updateMainPageStats();
});

// Initialize immediately since we're setting innerHTML
setTimeout(() => {
  initInteractivity();
  updateMainPageStats();
}, 100);

// Автообновление статистики каждые 5 минут
setInterval(updateMainPageStats, 5 * 60 * 1000);
