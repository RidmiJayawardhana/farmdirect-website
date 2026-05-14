/* ============================================================
   FARMDIRECT — script.js
   ============================================================ */

// ── DATA ─────────────────────────────────────────────────────

const MP_PRODUCTS = [
  {id:1,name:'Red Tomatoes (Grade A)',farmer:'Kumara Bandara',district:'Matale',province:'Central',price:241,rating:5,stock:'In Stock',category:'vegetables',organic:true,
   img:'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&q=75'},
  {id:2,name:'Fresh Cabbage',farmer:'Priya Wijesiri',district:'Nuwara Eliya',province:'Central',price:187,rating:4,stock:'In Stock',category:'vegetables',organic:true,
   img:'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&q=75'},
  {id:3,name:'White Nadee Rice',farmer:'Saman Rathnayake',district:'Polonnaruwa',province:'North Central',price:113,rating:5,stock:'In Stock',category:'rice',organic:false,
   img:'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=75'},
  {id:4,name:'Ceylon Cinnamon',farmer:'Nalini Fernando',district:'Kurunegala',province:'North Western',price:520,rating:5,stock:'Limited',category:'spices',organic:true,
   img:'https://images.unsplash.com/photo-1615485500704-8e990f9900f5?w=400&q=75'},
  {id:5,name:'Passion Fruits',farmer:'Dasun Perera',district:'Kandy',province:'Central',price:380,rating:4,stock:'In Stock',category:'fruits',organic:true,
   img:'https://images.unsplash.com/photo-1604552887830-a2d9b1a2d6c4?w=400&q=75'},
  {id:6,name:'Organic Carrots',farmer:'Manel Siriwardena',district:'Badulla',province:'Uva',price:160,rating:5,stock:'In Stock',category:'vegetables',organic:true,
   img:'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=75'},
  {id:7,name:'Ambul Bananas',farmer:'Roshan Jayasinghe',district:'Ratnapura',province:'Sabaragamuwa',price:95,rating:4,stock:'In Stock',category:'fruits',organic:false,
   img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=75'},
  {id:8,name:'Red Onions',farmer:'Chamara Wickrama',district:'Matale',province:'Central',price:145,rating:4,stock:'In Stock',category:'vegetables',organic:false,
   img:'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&q=75'},
  {id:9,name:'Green Chillies',farmer:'Dileepa Amarasinghe',district:'Vavuniya',province:'Northern',price:320,rating:5,stock:'In Stock',category:'vegetables',organic:true,
   img:'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&q=75'},
  {id:10,name:'Ceylon Lime',farmer:'Thusitha Gunasekara',district:'Galle',province:'Southern',price:280,rating:4,stock:'In Stock',category:'fruits',organic:false,
   img:'https://images.unsplash.com/photo-1587475260584-136574528ed5?w=400&q=75'},
  {id:11,name:'Organic Cardamom',farmer:'Kanthi Peiris',district:'Kegalle',province:'Sabaragamuwa',price:1800,rating:5,stock:'Limited',category:'spices',organic:true,
   img:'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=75'},
  {id:12,name:'Samba Rice',farmer:'Anura Dissanayake',district:'Ampara',province:'Eastern',price:125,rating:4,stock:'In Stock',category:'rice',organic:false,
   img:'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&q=75'},
];

const COURSES = [
  {title:'Facebook Marketing for Farmers',level:'beginner',category:'social',duration:'4h 30m',lessons:12,progress:0,enrolled:2341,
   img:'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=75'},
  {title:'WhatsApp Business Setup',level:'beginner',category:'social',duration:'2h 15m',lessons:8,progress:0,enrolled:3120,
   img:'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&q=75'},
  {title:'TikTok Agriculture Content',level:'intermediate',category:'social',duration:'5h 00m',lessons:15,progress:0,enrolled:1250,
   img:'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=75'},
  {title:'Product Photography on Phone',level:'intermediate',category:'photography',duration:'3h 20m',lessons:10,progress:0,enrolled:987,
   img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=75'},
  {title:'Smart Pricing Strategies',level:'advanced',category:'business',duration:'6h 00m',lessons:18,progress:0,enrolled:750,
   img:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=75'},
  {title:'Digital Payments & Banking',level:'beginner',category:'tech',duration:'2h 45m',lessons:9,progress:0,enrolled:2100,
   img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=75'},
  {title:'Setting Up Your Online Shop',level:'intermediate',category:'business',duration:'4h 00m',lessons:14,progress:0,enrolled:1540,
   img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=75'},
  {title:'Building a Simple Website',level:'advanced',category:'tech',duration:'8h 00m',lessons:24,progress:0,enrolled:430,
   img:'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&q=75'},
  {title:'Understanding Market Data',level:'intermediate',category:'business',duration:'3h 30m',lessons:11,progress:0,enrolled:620,
   img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=75'},
];

const COURSE_ICONS = {social:'fas fa-share-alt',photography:'fas fa-camera',business:'fas fa-briefcase',tech:'fas fa-laptop-code'};

const PRICE_DATA = [
  {name:'Tomato',price:241,change:'+15%',up:true,img:'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=100&q=70'},
  {name:'Cabbage',price:187,change:'-5%',up:false,img:'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=100&q=70'},
  {name:'Rice',price:113,change:'+2%',up:true,img:'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&q=70'},
  {name:'Cinnamon',price:520,change:'+22%',up:true,img:'https://images.unsplash.com/photo-1615485500704-8e990f9900f5?w=100&q=70'},
  {name:'Carrot',price:160,change:'+8%',up:true,img:'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=100&q=70'},
  {name:'Onion',price:145,change:'-3%',up:false,img:'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&q=70'},
  {name:'Chilli',price:320,change:'+10%',up:true,img:'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=100&q=70'},
  {name:'Banana',price:95,change:'+1%',up:true,img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=100&q=70'},
];

const FORECAST_DATA = [
  {name:'Tomato',trend:'up',label:'Price Rising',img:'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=120&q=70'},
  {name:'Cabbage',trend:'down',label:'Oversupply',img:'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=120&q=70'},
  {name:'Rice',trend:'stable',label:'Stable',img:'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=120&q=70'},
  {name:'Cinnamon',trend:'up',label:'Export High',img:'https://images.unsplash.com/photo-1615485500704-8e990f9900f5?w=120&q=70'},
  {name:'Carrot',trend:'up',label:'Demand Rising',img:'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=120&q=70'},
  {name:'Banana',trend:'stable',label:'Stable',img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&q=70'},
];

const WEATHER_DATA = [
  {city:'Colombo',temp:'32°C',desc:'Sunny',icon:'fas fa-sun',color:'#f9a825'},
  {city:'Kandy',temp:'24°C',desc:'Rainy',icon:'fas fa-cloud-rain',color:'#1976d2'},
  {city:'Nuwara Eliya',temp:'16°C',desc:'Cloudy',icon:'fas fa-cloud',color:'#78909c'},
  {city:'Matale',temp:'30°C',desc:'Clear',icon:'fas fa-sun',color:'#f9a825'},
  {city:'Badulla',temp:'22°C',desc:'Partly Cloudy',icon:'fas fa-cloud-sun',color:'#fb8c00'},
  {city:'Galle',temp:'28°C',desc:'Thunderstorm',icon:'fas fa-bolt',color:'#fbc02d'},
];

const GOV_PROGRAMS = [
  {icon:'fas fa-landmark',title:'Department of Agriculture',desc:'Provides technical assistance, seed subsidies, fertilizer support, and modern farming guidance to Sri Lankan farmers across all provinces.',tag:'Seeds & Fertilizer'},
  {icon:'fas fa-laptop',title:'ICTA Sri Lanka',desc:'Information & Communication Technology Agency supports rural digital literacy programs, internet connectivity projects, and farmer tech training initiatives.',tag:'Digital Training'},
  {icon:'fas fa-chart-bar',title:'Dept. of Census & Statistics',desc:'Provides agricultural data, price monitoring, crop statistics, and market intelligence to support evidence-based farming decisions.',tag:'Market Data'},
  {icon:'fas fa-seedling',title:'Agrarian Development Authority',desc:'Supports rural farmers with microfinance, insurance schemes, irrigation improvements, and access to modern agricultural equipment.',tag:'Finance & Insurance'},
  {icon:'fas fa-wifi',title:'Sri Lanka Telecom (SLT)',desc:'Expanding rural broadband infrastructure to connect remote farming communities with high-speed internet access at affordable rates.',tag:'Rural Internet'},
  {icon:'fas fa-university',title:'Bank of Ceylon',desc:'Offers special low-interest agricultural loans, digital banking services, and mobile payment solutions designed for farming communities.',tag:'Agricultural Finance'},
];

const SUBSIDY_DATA = [
  {amt:'Rs.25,000',label:'Fertilizer subsidy per acre per season'},
  {amt:'50%',label:'ICT equipment subsidy for digital farmers'},
  {amt:'Rs.50,000',label:'Low-interest startup loan for smallholders'},
  {amt:'Free',label:'Digital literacy training programs via ICTA'},
  {amt:'Rs.5,000',label:'Monthly transport allowance per registered farmer'},
  {amt:'75%',label:'Crop insurance coverage for natural disasters'},
];

const FAQS = [
  {q:'How does FarmDirect work?',a:'Farmers register and list their products. Buyers browse the marketplace and order directly. We handle payment processing and connect buyers with farmers for delivery or pickup.'},
  {q:'Is there a fee to join as a farmer?',a:'Registration is completely free for all Sri Lankan farmers. We charge a small 10% platform fee only when you make a successful sale — no upfront costs ever.'},
  {q:'How do I receive payment?',a:'Payments are processed securely and transferred to your bank account or mobile wallet within 48 hours of order confirmation.'},
  {q:'What if my product is damaged during delivery?',a:'We have a comprehensive insurance policy covering post-harvest losses. Report any issues within 24 hours and we will investigate and compensate accordingly.'},
  {q:'Can I list organic certified products?',a:'Yes! Organic certified products get a special badge and premium placement in search results. Upload your certification documents during registration.'},
];

const COMMUNITY_POSTS = [
  {avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=70',name:'Kumara B.',time:'2 hours ago',text:'Just sold 200kg of tomatoes directly to a restaurant in Colombo. Got Rs.280/kg vs Rs.180 from the collector. Thank you FarmDirect!',likes:45,replies:12},
  {avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=70',name:'Priya W.',time:'5 hours ago',text:'My first WhatsApp Business account is set up! Already got 3 orders. The digital learning center is amazing for beginners like me.',likes:38,replies:8},
  {avatar:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=70',name:'Saman R.',time:'1 day ago',text:'The market alert saved me — it predicted tomato prices would rise this week. I held stock and sold at Rs.320 vs Rs.220. Big difference!',likes:67,replies:21},
  {avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=70',name:'Dasun P.',time:'2 days ago',text:'Government subsidy for ICT equipment approved! 50% off on my new smartphone. Applying through FarmDirect support was very easy.',likes:29,replies:5},
];

const QUIZ_QUESTIONS = [
  {q:'Do you own a smartphone?',opts:['Yes, Android/iOS with internet','Yes, basic phone only','No smartphone','Shared with family']},
  {q:'How often do you use the internet?',opts:['Daily for multiple tasks','Several times a week','Rarely or never','Only for calls/SMS']},
  {q:'Have you ever sold products online?',opts:['Yes, regularly via apps/social','Yes, tried once or twice','No, but want to learn','No and not interested']},
  {q:'Do you use social media platforms?',opts:['Yes, Facebook/WhatsApp/TikTok actively','Yes, WhatsApp only','Just for personal use','No social media']},
  {q:'Can you take and send a photo from your phone?',opts:['Yes, easily','Yes, with some help','I need someone to show me','I cannot do this']},
  {q:'Have you received digital payments (bank transfer/mobile)?',opts:['Yes, regularly','Yes, occasionally','Once or twice','Never']},
  {q:'Do you know the current market price for your crops?',opts:['Yes, I check daily','Sometimes I check','I rely on collectors','I do not know how to check']},
  {q:'Would you like to learn digital marketing?',opts:['Very much, I am ready to start','Yes but I need help','Maybe if it is simple','I prefer traditional methods']},
  {q:'Do you have access to reliable internet at your farm?',opts:['Yes, good 4G/wifi','Yes but slow/unreliable','Only in town, not farm','No internet access']},
  {q:'Have you used any government e-services online?',opts:['Yes, regularly','Once or twice','No but I could learn','No and I find it hard']},
];

const CROP_PRICES = {tomato:{trad:170,digital:241},cabbage:{trad:130,digital:187},rice:{trad:85,digital:113},cinnamon:{trad:320,digital:520},carrot:{trad:110,digital:160}};

const CHAT_RESPONSES = [
  'Thank you for reaching out! How can I help you today?',
  'Our marketplace connects you directly with farmers across Sri Lanka for fair prices.',
  'You can list your produce on FarmDirect and reach thousands of buyers instantly.',
  'The digital learning center has free courses to help you get started selling online.',
  'Check the Market Intelligence page for today\'s crop prices and demand forecasts.',
  'Contact our support team at support@farmdirect.lk or call the Farmer Helpline: 1919.',
  'We support farmers in all 9 provinces of Sri Lanka with digital tools and training.',
];

// ── STATE ─────────────────────────────────────────────────────
let cart = [];
let testimonialIdx = 0;
let quizAnswers = [];
let currentQuestion = 0;
let activeCategory = 'all';
let activeLearningTab = 'all';
let chatOpen = false;
let mobileOpen = false;
let circlesAnimated = false;
let analyticsReady = false;
let chatRespIdx = 0;
let toastTimer = null;

// ── INIT ──────────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hide');
    initParticles();
    initTyping();
    initRevealObserver();
    initHeroCounters();
    renderHomeProducts();
    renderMarketplace();
    renderCourses();
    renderPriceTickers();
    renderForecast();
    renderWeather();
    renderGovPrograms();
    renderSubsidies();
    renderFAQ();
    renderCommunity();
    renderQuiz();
    renderBarChart();
    renderHeatmap();
    renderLineChart();
    startTestimonialAuto();
  }, 2000);
});

// ── PAGE NAV ──────────────────────────────────────────────────
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const t = document.getElementById('page-' + page);
  if (t) t.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === page));
  window.scrollTo({top:0, behavior:'smooth'});
  if (page === 'analytics' && !analyticsReady) {
    analyticsReady = true;
    setTimeout(() => { animateAnalyticsCounters(); renderPieChart(); animateLinePath(); }, 400);
  }
  if (page === 'quiz') { currentQuestion = 0; quizAnswers = []; renderQuiz(); }
}

function toggleMobile() {
  mobileOpen = !mobileOpen;
  document.getElementById('mobile-menu').classList.toggle('open', mobileOpen);
}

// ── SCROLL ────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('scroll-progress').style.width = Math.min(pct, 100) + '%';
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

// ── REVEAL OBSERVER ───────────────────────────────────────────
function initRevealObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      if (e.target.classList.contains('counter')) animateCounter(e.target);
      e.target.querySelectorAll('.gap-fill[data-w]').forEach(f => { f.style.width = f.dataset.w + '%'; });
      if (e.target.id === 'progress-circles' && !circlesAnimated) {
        circlesAnimated = true;
        animateProgressCircles();
      }
    });
  }, {threshold: 0.15});
  document.querySelectorAll('.reveal, .counter, #progress-circles').forEach(el => obs.observe(el));
}

// ── THEME ─────────────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const dark = html.dataset.theme === 'dark';
  html.dataset.theme = dark ? 'light' : 'dark';
  document.getElementById('theme-icon').className = dark ? 'fas fa-sun' : 'fas fa-moon';
}

// ── TYPING ────────────────────────────────────────────────────
const TYPING_WORDS = ['Fair Prices', 'Smart Farming', 'Digital Agriculture', 'Direct Selling', 'Better Income'];
let tWord = 0, tChar = 0, tDeleting = false;
function initTyping() {
  (function type() {
    const el = document.getElementById('typing-text');
    if (!el) return;
    const word = TYPING_WORDS[tWord];
    if (!tDeleting) {
      el.textContent = word.substring(0, ++tChar);
      if (tChar === word.length) { tDeleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.substring(0, --tChar);
      if (tChar === 0) { tDeleting = false; tWord = (tWord + 1) % TYPING_WORDS.length; }
    }
    setTimeout(type, tDeleting ? 60 : 110);
  })();
}

// ── PARTICLES (dot-only, no emoji) ───────────────────────────
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4, vy: -Math.random() * 0.6 - 0.1,
      r: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.08,
      color: Math.random() > 0.5 ? 'rgba(67,160,71,' : 'rgba(251,192,45,',
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.opacity + ')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ── COUNTERS ──────────────────────────────────────────────────
function animateCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const target = parseInt(el.dataset.target);
  let count = 0;
  const step = Math.max(1, Math.ceil(target / 60));
  const iv = setInterval(() => {
    count = Math.min(count + step, target);
    el.textContent = count.toLocaleString();
    if (count >= target) clearInterval(iv);
  }, 22);
}

function initHeroCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.hero-stat-num[data-target]').forEach(el => animateCounter(el));
    });
  }, {threshold: 0.2});
  const hs = document.querySelector('.hero-stats');
  if (hs) obs.observe(hs);
}

function animateAnalyticsCounters() {
  document.querySelectorAll('#page-analytics .an-counter').forEach(el => {
    el.dataset.done = '';
    animateCounter(el);
  });
}

// ── PROGRESS CIRCLES ──────────────────────────────────────────
const CIRCLE_DATA = [83, 75, 68, 93, 40];
const CIRC_R = 48;
const CIRC_C = 2 * Math.PI * CIRC_R;

function animateProgressCircles() {
  CIRCLE_DATA.forEach((val, i) => {
    const el = document.getElementById('circ' + (i + 1));
    if (!el) return;
    setTimeout(() => {
      el.style.strokeDasharray = `${CIRC_C * val / 100} ${CIRC_C * (1 - val / 100)}`;
    }, i * 160);
  });
}

// ── TESTIMONIAL ───────────────────────────────────────────────
function slideTestimonial(dir) {
  const count = document.querySelectorAll('.testimonial-slide').length;
  testimonialIdx = (testimonialIdx + dir + count) % count;
  updateSlider();
}
function goToSlide(i) { testimonialIdx = i; updateSlider(); }
function updateSlider() {
  const track = document.getElementById('testimonial-track');
  if (track) track.style.transform = `translateX(-${testimonialIdx * 100}%)`;
  document.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === testimonialIdx));
}
function startTestimonialAuto() { setInterval(() => slideTestimonial(1), 5500); }

// ── HOME PRODUCTS ─────────────────────────────────────────────
function renderHomeProducts() {
  const grid = document.getElementById('home-products');
  if (!grid) return;
  grid.innerHTML = MP_PRODUCTS.slice(0, 6).map(p => buildProductCard(p)).join('');
}

// ── MARKETPLACE ───────────────────────────────────────────────
function renderMarketplace(products) {
  const grid = document.getElementById('mp-grid');
  if (!grid) return;
  const list = products || MP_PRODUCTS;
  const ce = document.getElementById('products-count');
  if (ce) ce.textContent = `Showing ${list.length} products`;
  grid.innerHTML = list.map(p => buildProductCard(p)).join('');
}

function buildProductCard(p) {
  const stars = '<i class="fas fa-star"></i>'.repeat(p.rating) + '<i class="far fa-star"></i>'.repeat(5 - p.rating);
  const badge = p.organic
    ? `<div class="product-badge"><i class="fas fa-leaf"></i> Organic</div>`
    : '';
  return `
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${badge}
      </div>
      <div class="product-info">
        <div class="stars">${stars}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-meta">
          <span><i class="fas fa-user-circle"></i> ${p.farmer}</span>
          <span><i class="fas fa-map-marker-alt"></i> ${p.district}</span>
        </div>
        <div style="font-size:.67rem;color:var(--text3);margin-bottom:.5rem">
          <i class="fas fa-circle" style="font-size:.45rem;color:${p.stock==='In Stock'?'var(--leaf-green)':'var(--gold)'}"></i>
          ${p.stock} &nbsp;·&nbsp; ${p.province} Province
        </div>
        <div class="product-footer">
          <div class="product-price">Rs.${p.price}<small>/kg</small></div>
          <button class="btn-cart" onclick="addToCart('${p.name}',${p.price},'${p.img}')">
            <i class="fas fa-cart-plus"></i> Add
          </button>
        </div>
      </div>
    </div>`;
}

function filterProducts() {
  const search = (document.getElementById('mp-search').value || '').toLowerCase();
  const province = document.getElementById('mp-province').value;
  const sort = document.getElementById('mp-sort').value;
  let list = MP_PRODUCTS.filter(p => {
    const q = p.name + p.farmer + p.district;
    return q.toLowerCase().includes(search)
      && (!province || p.province === province)
      && (activeCategory === 'all' || p.category === activeCategory || (activeCategory === 'organic' && p.organic));
  });
  if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
  renderMarketplace(list);
}

function setCategory(cat, el) {
  activeCategory = cat;
  document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  filterProducts();
}

// ── CART ──────────────────────────────────────────────────────
function addToCart(name, price, img) {
  const existing = cart.find(i => i.name === name);
  if (existing) existing.qty++;
  else cart.push({name, price: parseInt(price), qty: 1, img});
  updateCart();
  showToast('Added to cart: ' + name);
}

function updateCart() {
  const itemsEl = document.getElementById('cart-items');
  const countEl = document.getElementById('cart-count');
  const totalEl = document.getElementById('cart-total-val');
  const modalEl = document.getElementById('modal-total');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  if (countEl) countEl.textContent = count;
  if (totalEl) totalEl.textContent = 'Rs. ' + total.toLocaleString();
  if (modalEl) modalEl.textContent = 'Rs. ' + total.toLocaleString();
  if (!itemsEl) return;
  if (!cart.length) {
    itemsEl.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-basket"></i><br>Your cart is empty<br><small>Add products to get started</small></div>';
    return;
  }
  itemsEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.style.background='var(--bg2)'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Rs.${item.price} &times; ${item.qty} = Rs.${(item.price * item.qty).toLocaleString()}</div>
      </div>
      <div class="cart-qty">
        <button class="qty-btn" onclick="changeQty(${idx},-1)"><i class="fas fa-minus"></i></button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${idx},1)"><i class="fas fa-plus"></i></button>
      </div>
    </div>`).join('');
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCart();
}

function openCheckout() {
  if (!cart.length) { showToast('Your cart is empty!'); return; }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const m = document.getElementById('modal-total');
  if (m) m.textContent = 'Rs. ' + total.toLocaleString();
  document.getElementById('checkout-modal').classList.add('open');
}
function closeCheckout() { document.getElementById('checkout-modal').classList.remove('open'); }
function placeOrder() { cart = []; updateCart(); closeCheckout(); showToast('Order placed! The farmer will contact you shortly.'); }

document.addEventListener('click', e => {
  const ov = document.getElementById('checkout-modal');
  if (ov && e.target === ov) closeCheckout();
});

// ── CHARTS ───────────────────────────────────────────────────
function renderBarChart() {
  const container = document.getElementById('bar-chart');
  if (!container) return;
  const data = [
    {label:'Tomato',farmer:241,consumer:452},
    {label:'Cabbage',farmer:187,consumer:396},
    {label:'Rice',farmer:113,consumer:208},
    {label:'Cinnamon',farmer:320,consumer:520},
    {label:'Carrot',farmer:160,consumer:268},
  ];
  const max = Math.max(...data.map(d => d.consumer));
  container.innerHTML = data.map(d => `
    <div class="bar-group">
      <div class="bar-pair">
        <div class="bar farmer-bar" style="height:${(d.farmer/max*120)}px" title="Farmer: Rs.${d.farmer}/kg"></div>
        <div class="bar consumer-bar" style="height:${(d.consumer/max*120)}px" title="Consumer: Rs.${d.consumer}/kg"></div>
      </div>
      <div class="bar-label">${d.label}</div>
    </div>`).join('');
}

function renderLineChart() {
  const pathEl = document.getElementById('line-path');
  const areaEl = document.getElementById('line-area');
  if (!pathEl) return;
  const pts = [18,22,19,28,32,30,38,35,42,48,45,52];
  const W = 400, H = 145;
  const minV = Math.min(...pts), maxV = Math.max(...pts);
  const coords = pts.map((v, i) => [
    (i / (pts.length - 1)) * W,
    H - ((v - minV) / (maxV - minV)) * (H - 20) - 10
  ]);
  const d = coords.map((c, i) => `${i===0?'M':'L'}${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(' ');
  pathEl.setAttribute('d', d);
  if (areaEl) areaEl.setAttribute('d', d + ` L${W},${H} L0,${H} Z`);
  const len = pathEl.getTotalLength ? pathEl.getTotalLength() : 1000;
  pathEl.style.strokeDasharray = len;
  pathEl.style.strokeDashoffset = len;
}

function animateLinePath() {
  const el = document.getElementById('line-path');
  if (!el) return;
  const len = el.getTotalLength ? el.getTotalLength() : 1000;
  el.style.strokeDasharray = len;
  el.style.strokeDashoffset = len;
  requestAnimationFrame(() => {
    el.style.transition = 'stroke-dashoffset 2s ease';
    el.style.strokeDashoffset = 0;
  });
}

function renderHeatmap() {
  const hm = document.getElementById('heatmap');
  if (!hm) return;
  const crops = ['Tomato','Cabbage','Rice','Carrot'];
  const months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
  let html = '<div></div>';
  months.forEach(m => html += `<div class="hm-month">${m}</div>`);
  crops.forEach(crop => {
    html += `<div class="hm-label">${crop}</div>`;
    months.forEach((_, mi) => {
      const val = 30 + Math.floor(Math.random() * 70);
      const t = val / 100;
      const r = Math.round(27 + t * 224), g = Math.round(94 + t * 98), b = Math.round(32 + t * 13);
      html += `<div class="hm-cell" style="background:rgb(${r},${g},${b})" data-tip="${crop}: Rs.${val*2} — Month ${mi+1}"></div>`;
    });
  });
  hm.innerHTML = html;
}

function renderPieChart() {
  const C = 2 * Math.PI * 60;
  const segs = [{id:'pie1',pct:.65,off:0},{id:'pie2',pct:.10,off:.65},{id:'pie3',pct:.15,off:.75},{id:'pie4',pct:.10,off:.90}];
  segs.forEach((s, si) => {
    const el = document.getElementById(s.id);
    if (!el) return;
    el.style.transform = `rotate(${(-90 + s.off * 360)}deg)`;
    el.style.transformOrigin = '80px 80px';
    setTimeout(() => {
      el.style.transition = 'stroke-dasharray 1.2s ease';
      el.style.strokeDasharray = `${C * s.pct} ${C * (1 - s.pct)}`;
    }, 300 + si * 180);
  });
}

// ── PROFIT CALCULATOR ─────────────────────────────────────────
function calculateProfit() {
  const crop = document.getElementById('calc-crop').value;
  const qty = parseInt(document.getElementById('calc-qty').value) || 0;
  const prices = CROP_PRICES[crop] || {trad:100,digital:160};
  const trad = prices.trad * qty;
  const digital = prices.digital * qty;
  const extra = digital - trad;
  const pct = trad > 0 ? Math.round((extra / trad) * 100) : 0;
  const res = document.getElementById('calc-results');
  if (res) res.style.display = 'grid';
  setAndAnimate('r-trad', trad, 'Rs. ', '');
  setAndAnimate('r-digital', digital, 'Rs. ', '');
  setAndAnimate('r-extra', extra, 'Rs. ', '');
  setAndAnimate('r-pct', pct, '+', '%');
}

function setAndAnimate(id, target, pre, suf) {
  const el = document.getElementById(id);
  if (!el) return;
  let c = 0;
  const step = Math.max(1, Math.ceil(target / 50));
  const iv = setInterval(() => {
    c = Math.min(c + step, target);
    el.textContent = pre + c.toLocaleString() + suf;
    if (c >= target) clearInterval(iv);
  }, 22);
}

// ── LEARNING CENTER ───────────────────────────────────────────
function renderCourses(filter) {
  const grid = document.getElementById('course-grid');
  if (!grid) return;
  const tab = filter || activeLearningTab;
  const list = tab === 'all' ? COURSES : COURSES.filter(c => c.category === tab);
  grid.innerHTML = list.map(c => {
    const iconClass = COURSE_ICONS[c.category] || 'fas fa-book';
    return `
      <div class="course-card">
        <div class="course-thumb">
          <img src="${c.img}" alt="${c.title}" loading="lazy">
          <div class="play-btn"><i class="fas fa-play-circle"></i></div>
        </div>
        <div class="course-body">
          <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.4rem">
            <i class="${iconClass}" style="color:var(--leaf-green);font-size:.9rem"></i>
            <div class="course-title" style="margin:0">${c.title}</div>
          </div>
          <div class="course-meta">
            <span><i class="fas fa-clock"></i> ${c.duration}</span>
            <span><i class="fas fa-book-open"></i> ${c.lessons} lessons</span>
            <span><i class="fas fa-users"></i> ${c.enrolled.toLocaleString()}</span>
          </div>
          <span class="learn-level level-${c.level}">${c.level.charAt(0).toUpperCase()+c.level.slice(1)}</span>
          <div class="course-progress-bar"><div class="course-progress-fill" style="width:${c.progress}%"></div></div>
          <div class="course-footer">
            <div class="course-progress-text">${c.progress===0?'Not started':c.progress+'% complete'}</div>
            <button class="btn-cart" style="font-size:.7rem" onclick="showToast('Course started! Good luck.')">
              <i class="fas fa-play"></i> Start
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function setLearningTab(tab, el) {
  activeLearningTab = tab;
  document.querySelectorAll('.ltab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderCourses(tab);
}

// ── MARKET INFO ───────────────────────────────────────────────
function renderPriceTickers() {
  const cont = document.getElementById('price-tickers');
  if (!cont) return;
  cont.innerHTML = PRICE_DATA.map(p => `
    <div class="price-ticker">
      <img class="ticker-img" src="${p.img}" alt="${p.name}" loading="lazy">
      <div>
        <div class="ticker-name">${p.name}</div>
        <div class="ticker-price">Rs.${p.price}<span style="font-size:.6rem;color:var(--text3)">/kg</span></div>
        <span class="ticker-change ${p.up?'change-up':'change-down'}">
          <i class="fas fa-arrow-${p.up?'up':'down'}" style="font-size:.55rem"></i> ${p.change}
        </span>
      </div>
    </div>`).join('');
}

function renderForecast() {
  const grid = document.getElementById('forecast-grid');
  if (!grid) return;
  const trendIcon = {up:'fas fa-arrow-trend-up',down:'fas fa-arrow-trend-down',stable:'fas fa-equals'};
  grid.innerHTML = FORECAST_DATA.map(f => `
    <div class="forecast-item">
      <img class="forecast-icon" src="${f.img}" alt="${f.name}" loading="lazy">
      <div class="forecast-name">${f.name}</div>
      <div class="forecast-trend trend-${f.trend}">
        <i class="${trendIcon[f.trend]||'fas fa-minus'}" style="font-size:.7rem"></i> ${f.label}
      </div>
    </div>`).join('');
}

function renderWeather() {
  const cont = document.getElementById('weather-cards');
  if (!cont) return;
  cont.innerHTML = WEATHER_DATA.map(w => `
    <div class="weather-card">
      <div class="weather-icon-w"><i class="${w.icon}" style="color:${w.color};font-size:1.9rem"></i></div>
      <div class="weather-day">${w.city}</div>
      <div class="weather-temp">${w.temp}</div>
      <div class="weather-desc">${w.desc}</div>
    </div>`).join('');
}

// ── GOVERNMENT ────────────────────────────────────────────────
function renderGovPrograms() {
  const cont = document.getElementById('gov-programs');
  if (!cont) return;
  cont.innerHTML = GOV_PROGRAMS.map(g => `
    <div class="gov-card">
      <div class="gov-logo"><i class="${g.icon}"></i></div>
      <h3>${g.title}</h3>
      <p>${g.desc}</p>
      <span class="gov-tag"><i class="fas fa-tag" style="font-size:.55rem"></i> ${g.tag}</span>
    </div>`).join('');
}

function renderSubsidies() {
  const cont = document.getElementById('subsidy-grid');
  if (!cont) return;
  cont.innerHTML = SUBSIDY_DATA.map(s => `
    <div class="subsidy-card">
      <span class="subsidy-amt">${s.amt}</span>
      <div class="subsidy-label">${s.label}</div>
    </div>`).join('');
}

// ── QUIZ ──────────────────────────────────────────────────────
function renderQuiz() {
  const cont = document.getElementById('quiz-content');
  if (!cont) return;
  if (currentQuestion >= QUIZ_QUESTIONS.length) { showQuizResult(cont); return; }
  const pct = (currentQuestion / QUIZ_QUESTIONS.length) * 100;
  const pg = document.getElementById('quiz-progress');
  if (pg) pg.style.width = pct + '%';
  const q = QUIZ_QUESTIONS[currentQuestion];
  cont.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-question-num">
        <i class="fas fa-question-circle" style="color:var(--leaf-green)"></i>
        Question ${currentQuestion+1} of ${QUIZ_QUESTIONS.length}
      </div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, i) => `
          <button class="quiz-option" onclick="selectAnswer(${i})">
            <span class="opt-letter">${'ABCD'[i]}</span>${opt}
          </button>`).join('')}
      </div>
    </div>`;
}

function selectAnswer(idx) {
  document.querySelectorAll('.quiz-option').forEach((btn, i) => btn.classList.toggle('selected', i === idx));
  quizAnswers[currentQuestion] = idx;
  setTimeout(() => { currentQuestion++; renderQuiz(); }, 550);
}

function showQuizResult(cont) {
  const pg = document.getElementById('quiz-progress');
  if (pg) pg.style.width = '100%';
  const score = quizAnswers.reduce((s, a) => s + (a===0?10:a===1?6:a===2?3:1), 0);
  const maxScore = QUIZ_QUESTIONS.length * 10;
  const pct = Math.round((score / maxScore) * 100);
  const C = 2 * Math.PI * 55;

  let level, recs;
  if (pct >= 75) {
    level = 'Advanced Digital Farmer';
    recs = ['Join our export marketplace for premium international pricing','Set up TikTok Shop for wider reach and younger buyers','Explore AI-powered crop monitoring tools','Consider mentoring other farmers in your community'];
  } else if (pct >= 45) {
    level = 'Intermediate Digital Farmer';
    recs = ['Complete the WhatsApp Business setup course','Learn product photography skills for better listings','Set up your digital payment account (Dialog Pay / BOC)','Post weekly on Facebook Marketplace to build a customer base'];
  } else {
    level = 'Beginner Farmer';
    recs = ['Start with the Facebook Marketing basics course','Learn how to take good product photos with your phone','Set up a free WhatsApp Business account today','Join the FarmDirect community group for support'];
  }

  cont.innerHTML = `
    <div class="quiz-result">
      <div class="result-circle">
        <svg class="result-svg" width="140" height="140" viewBox="0 0 140 140">
          <circle class="result-bg" cx="70" cy="70" r="55"/>
          <circle class="result-fg" id="result-circle" cx="70" cy="70" r="55"/>
        </svg>
        <div class="result-num">${pct}%</div>
      </div>
      <span class="result-level"><i class="fas fa-award"></i> ${level}</span>
      <div class="result-title">Quiz Complete!</div>
      <div class="result-subtitle">You scored ${score} out of ${maxScore} points.<br>Here are your personalized recommendations:</div>
      <div class="recommendations">
        <h4><i class="fas fa-clipboard-list"></i> Your Action Plan</h4>
        ${recs.map(r => `<div class="rec-item"><i class="fas fa-check-circle"></i><p>${r}</p></div>`).join('')}
      </div>
      <button class="btn-primary" onclick="currentQuestion=0;quizAnswers=[];renderQuiz()">
        <i class="fas fa-redo"></i> Retake Quiz
      </button>
    </div>`;

  setTimeout(() => {
    const el = document.getElementById('result-circle');
    if (el) {
      el.style.transition = 'stroke-dasharray 1.5s ease .3s';
      el.style.strokeDasharray = `${C * pct / 100} ${C * (1 - pct / 100)}`;
    }
  }, 200);
}

// ── FAQ ───────────────────────────────────────────────────────
function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');
}

function toggleFAQ(i) {
  document.querySelectorAll('.faq-item').forEach((el, j) => {
    el.classList.toggle('open', j === i && !el.classList.contains('open'));
  });
}

// ── COMMUNITY ─────────────────────────────────────────────────
function renderCommunity() {
  const grid = document.getElementById('community-grid');
  if (!grid) return;
  grid.innerHTML = COMMUNITY_POSTS.map(p => `
    <div class="community-card">
      <div class="community-author">
        <img class="c-avatar" src="${p.avatar}" alt="${p.name}" loading="lazy">
        <div>
          <div class="c-name">${p.name}</div>
          <div class="c-time"><i class="fas fa-clock" style="font-size:.6rem"></i> ${p.time}</div>
        </div>
      </div>
      <p>${p.text}</p>
      <div class="community-card-footer">
        <div class="c-action" onclick="showToast('Liked!')"><i class="fas fa-heart"></i> ${p.likes}</div>
        <div class="c-action" onclick="showToast('Reply feature coming soon!')"><i class="fas fa-comment"></i> ${p.replies}</div>
        <div class="c-action" onclick="showToast('Shared!')"><i class="fas fa-share"></i></div>
      </div>
    </div>`).join('');
}

// ── CHAT ──────────────────────────────────────────────────────
function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chat-panel').classList.toggle('open', chatOpen);
}

function sendChat() {
  const input = document.getElementById('chat-in');
  const msgs = document.getElementById('chat-msgs');
  const msg = input.value.trim();
  if (!msg) return;
  msgs.innerHTML += `<div class="chat-msg me"><div class="chat-bubble-msg">${msg}</div></div>`;
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;
  setTimeout(() => {
    const resp = CHAT_RESPONSES[chatRespIdx % CHAT_RESPONSES.length];
    chatRespIdx++;
    msgs.innerHTML += `<div class="chat-msg"><div class="chat-bubble-msg">${resp}</div></div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 900);
}

// ── TOAST ─────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  const text = document.getElementById('toast-text');
  if (!toast || !text) return;
  text.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}
