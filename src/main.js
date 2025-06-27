import './style.css'

// Initialize the app
document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="nav">
    <div class="nav-container">
      <div class="nav-left">
        <div class="nav-logo">
          <img src="/whitesvg.svg" alt="TeaFi Logo" class="logo-img" />
        </div>
        <span class="nav-brand">TeaFi Ambassadors</span>
      </div>
      
      <div class="nav-center">
        <div class="nav-links">
          <a href="#roles" class="nav-link">Roles</a>
          <a href="#progression" class="nav-link">Progression</a>
          <a href="#faq" class="nav-link">FAQ</a>
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
          Become a <span class="gradient-text">TeaFi Ambassador</span>
        </h1>
        <h2 class="hero-subtitle">
          Farm your status. Build your influence. Shape TeaFi.
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
        <h2 class="getting-started-title">Ready to Start Your Journey?</h2>
        <p class="getting-started-subtitle">Follow these simple steps to earn your first role</p>
        
        <div class="task-flow-modern">
          <div class="flow-step">
            <div class="flow-number">1</div>
            <div class="flow-content">
              <h3>Complete 1 Simple Task</h3>
              <p>Make your first contribution to the community</p>
            </div>
          </div>
          
          <div class="flow-arrow">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <path d="M28 4L36 12L28 20M36 12H4" stroke="#FF007A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <div class="flow-step">
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
              <p>Unlock endless possibilities in TeaFi</p>
            </div>
          </div>
        </div>
        
        <div class="first-task-highlight">
          <div class="task-highlight-header">
            <div class="task-highlight-badge">FIRST TASK</div>
            <div class="task-highlight-timer">⏱️ Takes 10 minutes</div>
          </div>
          <h3 class="task-highlight-title">Create a post about downloading the TeaFi App and making a swap</h3>
          <p class="task-highlight-description">Share your experience with the community and help others discover TeaFi</p>
          
          <div class="task-highlight-cta">
            <button class="cta-button-hero" id="getStartedBtn">
              <span>Get Your First Role Now</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
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
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" stroke="#FF007A" stroke-width="2" fill="rgba(255, 0, 122, 0.1)"/>
              <circle cx="12" cy="12" r="2" fill="#FF007A"/>
            </svg>
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
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#FF007A" stroke-width="2" fill="rgba(255, 0, 122, 0.2)"/>
              <path d="M8 8h8M8 12h6" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
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
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="#FF007A"/>
              <path d="M21 9V7L15 6L13 2H11L9 6L3 7V9L9 10L11 22H13L15 10L21 9Z" stroke="#FF007A" stroke-width="2" fill="rgba(255, 0, 122, 0.15)"/>
              <circle cx="8" cy="14" r="1.5" fill="#FF007A" opacity="0.7"/>
              <circle cx="16" cy="14" r="1.5" fill="#FF007A" opacity="0.7"/>
            </svg>
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
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" stroke="#FF007A" stroke-width="2" fill="rgba(255, 0, 122, 0.2)"/>
              <path d="M7 14L12 19L17 14" stroke="#FF007A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="6" r="2" fill="#FF007A"/>
              <rect x="10" y="10" width="4" height="2" rx="1" fill="#FF007A" opacity="0.8"/>
            </svg>
          </div>
          <h3>Tea Chad</h3>
          <p>Community leaders who shape culture, attract members and guide product direction.</p>
        </div>
      </div>
      
      <div class="ambassador-track">
        <div class="ambassador-card modern">
          <div class="role-icon-modern special">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#FF007A;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#FF4DA6;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path d="M5 16L3 6L7.5 10L12 4L16.5 10L21 6L19 16H5Z" stroke="#FF007A" stroke-width="2" fill="url(#crownGradient)"/>
              <path d="M12 2L13.09 6.26L17 7L13.09 7.74L12 12L10.91 7.74L7 7L10.91 6.26L12 2Z" fill="#FFD700"/>
              <circle cx="8" cy="12" r="1" fill="#FFD700"/>
              <circle cx="16" cy="12" r="1" fill="#FFD700"/>
              <path d="M5 16H19V18C19 19.1 18.1 20 17 20H7C5.9 20 5 19.1 5 18V16Z" fill="rgba(255, 0, 122, 0.3)"/>
            </svg>
          </div>
          <h3>Ambassador</h3>
          <p>KOLs, public partners, and external network builders. Highly visible extension of TeaFi's external communication.</p>
        </div>
      </div>
    </div>
  </section>



  <!-- Contributor Check Section -->
  <section class="contributor-check">
    <div class="container">
      <h2 class="section-title">Are You <span class="gradient-text">Contributor Material?</span></h2>
      
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
              <path d="M21 11.5A8.38 8.38 0 0 1 14.5 18A8.38 8.38 0 0 1 7 11.5A8.38 8.38 0 0 1 14.5 5A8.38 8.38 0 0 1 21 11.5Z" stroke="#FF007A" stroke-width="2" fill="none"/>
              <path d="M11.5 7H8L14 17L10.5 7Z" stroke="#FF007A" stroke-width="2" fill="none"/>
            </svg>
          </div>
          <h3>Community Members</h3>
          <p>Generating daily engagement and fostering meaningful discussions</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="faq">
    <div class="container">
      <h2 class="section-title">Spill The <span class="gradient-text">Tea - FAQ</span></h2>
      
      <div class="faq-container">
        <div class="faq-item" onclick="toggleFAQ(this)">
          <div class="faq-question">
            <span class="faq-text">Do I need to apply?</span>
            <div class="faq-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="faq-svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="faq-answer">
            <div class="faq-content">
              <p>No forms. Just make your first contribution.</p>
              <button class="cta-button-enhanced primary" style="margin-top: 16px;">
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
        
        <div class="faq-item" onclick="toggleFAQ(this)">
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
              <p>Content, memes, community activity, events, feedback.</p>
            </div>
          </div>
        </div>
        
        <div class="faq-item" onclick="toggleFAQ(this)">
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
              <p>Every contribution adds value. The more you contribute, the further you progress.</p>
            </div>
          </div>
        </div>
        
        <div class="faq-item" onclick="toggleFAQ(this)">
          <div class="faq-question">
            <span class="faq-text">What makes Tea Chad exclusive?</span>
            <div class="faq-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="faq-svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="faq-answer">
            <div class="faq-content">
              <p>Tea Chads shape the product, lead regions, host events, and define community culture.</p>
            </div>
          </div>
        </div>
        
        <div class="faq-item" onclick="toggleFAQ(this)">
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
        
        <div class="faq-item" onclick="toggleFAQ(this)">
          <div class="faq-question">
            <span class="faq-text">Where do I start?</span>
            <div class="faq-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="faq-svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="faq-answer">
            <div class="faq-content">
              <p>Begin by completing your first task and receiving your Tea-OG role.</p>
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
            <h2 class="section-title">Your <span class="gradient-text">TeaFi Journey</span> Starts Here</h2>
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
          <img src="/whitesvg.svg" alt="TeaFi Logo" class="footer-logo" />
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
        </div>
        

      </div>
    </div>
  </footer>
`

// Beautiful FAQ toggle function with animations
function toggleFAQ(element) {
  const answer = element.querySelector('.faq-answer');
  const icon = element.querySelector('.faq-icon');
  const svg = icon.querySelector('.faq-svg');
  
  // Close all other FAQ items with animation
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(item => {
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
      e.preventDefault();
      const href = link.getAttribute('href');
      
      if (href.startsWith('#')) {
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initInteractivity);

// Initialize immediately since we're setting innerHTML
setTimeout(initInteractivity, 100);
