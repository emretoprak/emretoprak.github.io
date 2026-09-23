(() => {
  const info = document.querySelector('.art-info-bar');
  const curtain = document.querySelector('.art-curtain');
  const year = new Date().getFullYear();
  const profileScroll = document.querySelector('#scrollbar2');
  const contentScroll = document.querySelector('#scrollbar');
  const root = document.documentElement;
  const structuredData = document.querySelector('#structured-data');
  const localeData = {
    en: {
      title: 'Emre Toprak | Head of AI Engineering | Fintech Architect',
      description: 'Emre Toprak — Head of AI Engineering, fintech architect and specialist in Generative AI, agentic systems, RAG, MCP and scalable distributed systems.',
      nav: ['Home', 'About', 'Experience', 'Areas of focus', 'Events', 'Education & skills', 'LinkedIn & website'],
      side: ['Visible skills', 'Languages'],
      close: 'Close profile panel', openProfile: 'Open profile', openMenu: 'Open menu',
      hero: ['Read profile', 'Profile summary', 'Years in software engineering', 'Roles held', 'Talks & events', 'Degrees earned'],
      aboutHeading: ['01 / About', 'Enterprise software, fintech ', 'and AI.'],
      about: '<p class="art-lead">With 20+ years of experience in software engineering, architecture, and technical leadership, I build scalable systems at the intersection of enterprise software, fintech, and AI.</p><p>Today, as <b>Head of AI Engineering at ForInvest</b>, I focus on turning Generative AI from experimentation into reliable, production-grade engineering capabilities.</p><p>My background spans high-performance financial systems, distributed architectures, backend platforms, desktop, mobile, and web engineering. This breadth allows me to approach AI not simply as an application layer, but as part of the broader software engineering lifecycle — from architecture and development to testing, security, deployment, and operations.</p><p>My current focus is AI-native software engineering: designing agentic systems, RAG architectures, Model Context Protocol (MCP) integrations, and AI-powered developer tools that improve engineering productivity and R&amp;D efficiency.</p><p>I also work on domain-specific LLM development, including fine-tuning models for financial use cases. I focus on adapting foundation models to financial terminology, workflows, and domain knowledge while evaluating model accuracy, reliability, and production readiness.</p><p>I am particularly interested in building AI agents that become reliable participants in the software development lifecycle — understanding requirements, analyzing codebases, generating and validating changes, improving test coverage, and supporting engineering teams.</p><p>As a technical leader, I enjoy simplifying complex engineering environments, connecting multidisciplinary teams, and establishing pragmatic standards that enable teams to move faster without compromising reliability, security, or scalability.</p>',
      focusHeading: ['03 / Areas of focus', 'Where AI meets ', 'engineering.'],
      focusCards: [['AI Engineering & Agentic AI Systems', 'Designing agentic systems, autonomous agents, conversational graphs and AI-powered developer tools.'], ['Domain-Specific LLMs & Financial AI', 'Financial terminology, workflows and domain knowledge; fine-tuning, model evaluation, accuracy, reliability and production readiness.'], ['Generative AI, RAG & MCP', 'RAG architectures, Model Context Protocol integrations, semantic graphs and production-grade Generative AI.'], ['AI-Native Software Engineering', 'AI across architecture, development, testing, security, deployment and operations to improve engineering productivity and R&D efficiency.']],
      education: ['05 / Education & skills', 'Education and ', 'skills.', 'Education', 'Skills', 'Languages'],
      contact: ['06 / Verified links', 'Find me on ', 'LinkedIn.', 'The LinkedIn export provides these public profile links:'],
    },
    tr: {
      title: 'Emre Toprak | Yapay Zeka Mühendisliği Lideri | Fintech Mimarı',
      description: 'Emre Toprak — Yapay Zeka Mühendisliği Lideri, fintech mimarı; Üretken Yapay Zeka, otonom ajan sistemleri, RAG, MCP ve ölçeklenebilir dağıtık sistemler uzmanı.',
      nav: ['Ana sayfa', 'Hakkımda', 'Deneyim', 'Odak alanları', 'Etkinlikler', 'Eğitim ve yetkinlikler', 'LinkedIn ve web sitesi'],
      side: ['Öne çıkan yetkinlikler', 'Diller'],
      close: 'Profil panelini kapat', openProfile: 'Profili aç', openMenu: 'Menüyü aç',
      hero: ['Profili oku', 'Profil özeti', 'Yıllık yazılım mühendisliği deneyimi', 'Görev sayısı', 'Konuşma ve etkinlik', 'Eğitim derecesi'],
      aboutHeading: ['01 / Hakkımda', 'Kurumsal yazılım, fintech ', 've yapay zeka.'],
      about: '<p class="art-lead">Yazılım mühendisliği, mimari ve teknik liderlikte 20 yılı aşan deneyimimle kurumsal yazılım, fintech ve yapay zekanın kesiştiği noktada ölçeklenebilir sistemler kuruyorum.</p><p>Bugün <b>ForInvest\'te Yapay Zeka Mühendisliği Lideri</b> olarak Üretken Yapay Zeka\'yı deneysel bir alandan çıkarıp güvenilir, üretime hazır mühendislik yetkinliklerine dönüştürmeye odaklanıyorum.</p><p>Geçmişim yüksek performanslı finansal sistemleri, dağıtık mimarileri, backend platformlarını, masaüstü, mobil ve web mühendisliğini kapsıyor. Bu geniş perspektif, yapay zekayı yalnızca bir uygulama katmanı olarak değil; mimariden geliştirmeye, testten güvenliğe, dağıtımdan operasyona uzanan yazılım yaşam döngüsünün doğal bir parçası olarak ele almamı sağlıyor.</p><p>Şu anki odağım AI-native yazılım mühendisliği: otonom ajan sistemleri, RAG mimarileri, Model Context Protocol (MCP) entegrasyonları ve mühendislik verimliliği ile Ar-Ge etkinliğini artıran yapay zeka destekli geliştirici araçları tasarlamak.</p><p>Bunun yanında finansal kullanım senaryoları için alana özgü LLM geliştirme ve ince ayar çalışmaları yürütüyorum; temel modelleri finans terminolojisine, iş akışlarına ve alan bilgisine uyarlarken doğruluk, güvenilirlik ve üretime hazırlık kriterlerini değerlendiriyorum.</p><p>Özellikle yapay zeka ajanlarının yazılım geliştirme süreçlerinin güvenilir bir parçasına dönüşmesiyle ilgileniyorum: gereksinimleri anlayan, kod tabanlarını çözümleyen, değişiklik üretip doğrulayan, test kapsamını artıran ve ekiplere gerçek anlamda destek olan ajanlar.</p><p>Teknik lider olarak karmaşık mühendislik ortamlarını sadeleştirmekten, farklı disiplinlerdeki ekipleri buluşturmaktan ve güvenilirlik, güvenlik ya da ölçeklenebilirlikten taviz vermeden ekiplerin daha hızlı ilerlemesini sağlayan pratik standartlar kurmaktan keyif alıyorum.</p>',
      focusHeading: ['03 / Odak alanları', 'Yapay zekanın mühendislikle ', 'buluştuğu yer.'],
      focusCards: [['Yapay Zeka Mühendisliği ve Ajan Sistemleri', 'Otonom ajanlar, diyalog grafları ve yapay zeka destekli geliştirici araçları tasarlıyorum.'], ['Alana Özgü LLM’ler ve Finansal Yapay Zeka', 'Finans terminolojisi, iş akışları ve alan bilgisi üzerine ince ayar; model değerlendirme, doğruluk, güvenilirlik ve üretime hazırlık.'], ['Üretken Yapay Zeka, RAG ve MCP', 'RAG mimarileri, Model Context Protocol entegrasyonları, semantik graflar ve üretime hazır Üretken Yapay Zeka.'], ['AI-Native Yazılım Mühendisliği', 'Mimari, geliştirme, test, güvenlik, dağıtım ve operasyonda mühendislik verimliliğini artıran yapay zeka pratikleri.']],
      education: ['05 / Eğitim ve yetkinlikler', 'Eğitim ve ', 'yetkinlikler.', 'Eğitim', 'Yetkinlikler', 'Diller'],
      contact: ['06 / Doğrulanmış bağlantılar', 'Beni ', 'LinkedIn’de bulun.', 'LinkedIn dışa aktarımından gelen herkese açık profil bağlantıları:'],
    }
  };
  const missingTranslations = {
    'Skip to content': 'İçeriğe geç',
    'Profile information': 'Profil bilgileri',
    'Portrait of Emre Toprak': 'Emre Toprak portresi',
    'Head of AI Engineering': 'Yapay Zeka Mühendisliği Lideri',
    'Location:': 'Konum:', 'Current role:': 'Mevcut rol:', 'Experience:': 'Deneyim:', 'Focus:': 'Odak:', 'Agentic AI & RAG': 'Ajan Sistemleri ve RAG',
    'English — Professional working proficiency': 'İngilizce — Profesyonel çalışma yeterliliği',
    'Turkish — Native or bilingual proficiency': 'Türkçe — Ana dil veya iki dilli yetkinlik',
    'View LinkedIn profile': 'LinkedIn profilini görüntüle', 'Personal website': 'Kişisel web sitesi',
    'Introduction': 'Tanıtım',
    'Head of AI Engineering · Fintech Architect · Generative AI & Agentic Systems': 'Yapay Zeka Mühendisliği Lideri · Fintech Mimarı · Üretken Yapay Zeka ve Ajan Sistemleri',
    'Turning Generative AI from experimentation into reliable, production-grade engineering.': 'Üretken Yapay Zeka\'yı deneme aşamasından çıkarıp güvenilir, üretime hazır mühendisliğe dönüştürüyorum.',
    'Professional experience.': 'Profesyonel deneyim.', '02 / Experience': '02 / Deneyim',
    'Sharing the': 'Çalışmaları', 'Find me on': 'Beni',
    'Talks & events': 'Konuşmalar ve etkinlikler', 'Sharing the ': 'Çalışmaları ', 'work.': 'paylaşmak.',
    'Previous event': 'Önceki etkinlik', 'Next event': 'Sonraki etkinlik', 'Event slides': 'Etkinlik slaytları',
    'Show event 1': '1. etkinliği göster', 'Show event 2': '2. etkinliği göster', 'Show event 3': '3. etkinliği göster', 'Show event 4': '4. etkinliği göster', 'Show event 5': '5. etkinliği göster',
    'Agentic AI Türkiye': 'Agentic AI Türkiye', 'Twin Strikers: AWS AI & Cloud': 'Twin Strikers: AWS AI & Cloud',
    'AWS Cloud Day Türkiye': 'AWS Cloud Day Türkiye', 'Generative AI on financial investment decisions': 'Finansal yatırım kararlarında Üretken Yapay Zeka',
    'AWS Cloud Day Istanbul': 'AWS Cloud Day İstanbul', 'Generative AI in financial services': 'Finansal hizmetlerde Üretken Yapay Zeka',
    'ForInvest InvestTech Summit ’25': 'ForInvest InvestTech Summit ’25', 'Yapay Zeka Merkezli Nasıl Olunur': 'Yapay Zeka Merkezli Nasıl Olunur',
    'How ForInvest Accelerates FinTech Innovation with Kiro': 'ForInvest Kiro ile FinTech inovasyonunu nasıl hızlandırıyor', 'AWS · AI Engineering': 'AWS · Yapay Zeka Mühendisliği',
    'Full-time · Remote': 'Tam zamanlı · Uzaktan', 'Full-time · Istanbul, Türkiye': 'Tam zamanlı · İstanbul, Türkiye', 'Senior Software Developer · On-site · Istanbul, Türkiye': 'Kıdemli Yazılım Geliştirici · Ofisten çalışma · İstanbul, Türkiye', 'Software Developer · On-site · Istanbul, Türkiye': 'Yazılım Geliştirici · Ofisten çalışma · İstanbul, Türkiye', 'Web Developer · On-site · Istanbul, Türkiye': 'Web Geliştirici · Ofisten çalışma · İstanbul, Türkiye',
    'Head of AI Engineering': 'Yapay Zeka Mühendisliği Lideri', 'Senior Software Developer Team Lead': 'Kıdemli Yazılım Geliştirme Takım Lideri', 'Software Team Lead': 'Yazılım Takım Lideri', 'Senior Software Developer': 'Kıdemli Yazılım Geliştirici', 'Software Developer': 'Yazılım Geliştirici', 'Web Developer': 'Web Geliştirici',

    'Built AgentCore multi-LLM workflows orchestrating Claude, OpenAI and Google models.': 'Claude, OpenAI ve Google modellerini orkestre eden AgentCore çoklu LLM iş akışları geliştirdim.',
    'Developed a GitLab-integrated AI Developer agent.': 'GitLab entegrasyonlu bir yapay zeka geliştirici ajanı geliştirdim.',
    'Worked on financial LLM fine-tuning, advanced RAG and semantic graphs.': 'Finansal LLM ince ayarı, gelişmiş RAG ve anlamsal grafikler üzerinde çalıştım.',
    'Engineered AI-driven CI/CD quality gates for code analysis, vulnerability scanning, security compliance and synthetic test generation.': 'Kod analizi, güvenlik açığı taraması, güvenlik uyumluluğu ve sentetik test üretimi için yapay zeka destekli CI/CD kalite kapıları geliştirdim.',
    'Built autonomous agents and conversational graphs with LangChain, LangGraph and Langflow.': 'LangChain, LangGraph ve Langflow ile otonom ajanlar ve konuşma grafikleri geliştirdim.',
    'Delivered highly available, mission-critical fintech systems using Node.js, Java and modern frontend frameworks.': 'Node.js, Java ve modern frontend frameworkleriyle yüksek erişilebilirlikli, kritik fintech sistemleri geliştirdim.',
    'Worked on enterprise system design and high-level architecture.': 'Kurumsal sistem tasarımı ve üst düzey mimari çalışmalarında görev aldım.',
    'Modernized exchange and financial data infrastructure, including microservice and widget-serving environments handling billions of records.': 'Milyarlarca kaydı işleyen mikroservis ve widget sunum ortamları dahil olmak üzere borsa ve finansal veri altyapılarını modernleştirdim.',
    'Designed infrastructure backed by CloudFlare caching and edge computing.': 'CloudFlare önbellekleme ve edge computing destekli altyapılar tasarladım.',
    'Built PCI-compliant global payment gateway integrations and high-throughput transaction processing systems.': 'PCI uyumlu global ödeme geçidi entegrasyonları ve yüksek işlem hacimli işlem sistemleri geliştirdim.',
    'Designed deep-learning and big-data solutions, live horse-tracking alerts, and analytical events from stock and fixed-income data using React, React Native and Vue.': 'React, React Native ve Vue kullanarak derin öğrenme ve büyük veri çözümleri, canlı at takip uyarıları ve hisse senedi ile sabit getirili menkul kıymet verilerinden analitik olaylar tasarladım.',
    'Led an end-to-end Financial Data Terminal with live streaming stock data, real-time technical analysis and financial metrics.': 'Canlı hisse senedi akışı, gerçek zamanlı teknik analiz ve finansal metrikler sunan uçtan uca Finansal Veri Terminaline liderlik ettim.',
    'Led a cloud-native migration from monolith and legacy applications to Java and Node.js backend microservices.': 'Monolitik ve eski uygulamalardan Java ve Node.js backend mikroservislerine bulut-yerel geçişe liderlik ettim.',
    'Consolidated multi-server structures into single-server topologies for infrastructure cost and resource optimization.': 'Altyapı maliyeti ve kaynak optimizasyonu için çok sunuculu yapıları tek sunuculu topolojilerde birleştirdim.',
    'Led the React and Vue UI/UX rewrite of core data products.': 'Temel veri ürünlerinin React ve Vue ile UI/UX yeniden yazımına liderlik ettim.',
    'Developed enterprise banking and corporate payment systems focused on automated collection, reconciliation and settlement engines.': 'Otomatik tahsilat, mutabakat ve takas motorlarına odaklanan kurumsal bankacılık ve şirket ödeme sistemleri geliştirdim.',
    'Built E-Invoice compliance and ERP synchronization integrations.': 'E-Fatura uyumluluğu ve ERP senkronizasyonu entegrasyonları geliştirdim.',
    'Implemented backend business logic with .NET, MVC and NHibernate ORM.': '.NET, MVC ve NHibernate ORM ile backend iş mantığı geliştirdim.',
    'Built real-time web financial streaming applications with JSP, live stock tickers and interactive widgets embedded into third-party portals.': 'JSP ile gerçek zamanlı web finans akışı uygulamaları, canlı hisse senedi göstergeleri ve üçüncü taraf portallara gömülü interaktif widgetlar geliştirdim.',
    'Developed multi-threaded market-data processing tools and desktop/web trading interfaces with .NET Framework.': '.NET Framework ile çok iş parçacıklı piyasa verisi işleme araçları ve masaüstü/web işlem arayüzleri geliştirdim.',
    'Built custom web applications, dynamic content management systems and commercial web portals with PHP.': 'PHP ile özel web uygulamaları, dinamik içerik yönetim sistemleri ve ticari web portalları geliştirdim.',
    'Designed business workflows and core modules in .NET CRM platforms for client requirements.': 'Müşteri gereksinimleri için .NET CRM platformlarında iş akışları ve temel modüller tasarladım.',
    'Created custom front-end styling and layouts for UI/UX.': 'UI/UX için özel frontend stilleri ve düzenleri oluşturdum.',
    'Education': 'Eğitim', 'Database Management Systems, Systems Analysis & Design, Object-Oriented Programming and Data Structures. Computer-science principles connected with business administration and project management, including algorithm design and information systems architecture.': 'Veritabanı Yönetim Sistemleri, Sistem Analizi ve Tasarımı, Nesne Yönelimli Programlama ve Veri Yapıları. Algoritma tasarımı ve bilgi sistemleri mimarisi dahil olmak üzere bilgisayar bilimi ilkelerini işletme yönetimi ve proje yönetimiyle birleştirdim.',
    'Deep Learning frameworks for real-time virtual market data analysis and prediction, predictive systems for stock-market simulations, financial data processing and technical analysis research.': 'Gerçek zamanlı sanal piyasa verisi analizi ve tahmini için derin öğrenme frameworkleri, borsa simülasyonları için tahmin sistemleri, finansal veri işleme ve teknik analiz araştırmaları.',
    'Lisans Derecesi · Management Information Systems, General': 'Lisans · Yönetim Bilişim Sistemleri', 'Yüksek Lisans (Master) · Bilgisayar / Bilişim Mühendisliği': 'Yüksek Lisans · Bilgisayar / Bilişim Mühendisliği',
    'Languages': 'Diller', 'Skills': 'Yetkinlikler', 'Verified links': 'Doğrulanmış bağlantılar', 'Find me on ': 'Beni ', 'LinkedIn.': 'LinkedIn’de bulun.',
    'The LinkedIn export provides these public profile links:': 'LinkedIn dışa aktarımı herkese açık profil bağlantılarını içeriyor:', 'linkedin.com/in/etoprak ↗': 'linkedin.com/in/etoprak ↗', 'emretoprak.com ↗': 'emretoprak.com ↗',
    'Head of AI Engineering · Fintech Architect · Generative AI & Agentic Systems': 'Yapay Zeka Mühendisliği Lideri · Fintech Mimarı · Üretken Yapay Zeka ve Ajan Sistemleri',
    'Autonomous agents': 'Otonom ajanlar', 'Agent orchestration': 'Ajan orkestrasyonu', 'Engineering leadership': 'Mühendislik liderliği',
    'LLM fine-tuning': 'LLM ince ayarı', 'Model evaluation': 'Model değerlendirme', 'Financial AI': 'Finansal Yapay Zeka',
    'Semantic graphs': 'Semantik graflar',
    'Developer productivity': 'Geliştirici verimliliği', 'SDLC automation': 'SDLC otomasyonu', 'Quality & security': 'Kalite ve güvenlik', 'Distributed systems': 'Dağıtık sistemler',
    'AI observability': 'AI observability', 'Human-in-the-loop ML': 'Human-in-the-loop ML', 'Human-in-the-loop Machine Learning': 'Human-in-the-loop Machine Learning',
    'Expanded event image': 'Büyütülmüş etkinlik görseli', 'Close expanded image': 'Büyütülmüş görseli kapat', 'Close profile panel': 'Profil panelini kapat', 'Open profile': 'Profili aç', 'Open menu': 'Menüyü aç'
  };
  const reverseTranslations = Object.fromEntries(Object.entries(missingTranslations).map(([en, tr]) => [tr, en]));
  const translateUnmappedText = (language) => {
    const dictionary = language === 'tr' ? missingTranslations : reverseTranslations;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = []; let node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach((textNode) => { const value = textNode.nodeValue; const trimmed = value.trim(); if (dictionary[trimmed]) textNode.nodeValue = value.replace(trimmed, dictionary[trimmed]); });
  };

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const resetScrollPositions = () => { if (profileScroll) profileScroll.scrollTo({ top: 0, left: 0, behavior: 'auto' }); if (contentScroll && !window.location.hash) contentScroll.scrollTo({ top: 0, left: 0, behavior: 'auto' }); };
  resetScrollPositions();
  window.addEventListener('DOMContentLoaded', resetScrollPositions);
  window.addEventListener('load', () => { resetScrollPositions(); window.setTimeout(resetScrollPositions, 120); });
  document.querySelectorAll('#year, #footer-year').forEach((node) => { node.textContent = year; });

  const closePanels = () => { info.classList.remove('open'); curtain.classList.remove('open'); };
  const openInfo = () => { info.classList.add('open'); curtain.classList.add('open'); };
  document.querySelectorAll('[data-info-toggle], [data-menu-toggle]').forEach((button) => button.addEventListener('click', openInfo));
  document.querySelectorAll('[data-close="info"]').forEach((button) => button.addEventListener('click', closePanels));
  curtain.addEventListener('click', closePanels);
  document.querySelectorAll('.art-left-nav a').forEach((link) => link.addEventListener('click', () => { document.querySelectorAll('.art-left-nav a').forEach((item) => item.classList.toggle('active', item.getAttribute('href') === link.getAttribute('href'))); if (window.matchMedia('(max-width: 920px)').matches) closePanels(); }));
  document.querySelectorAll('.art-content a[href^="#"]').forEach((link) => link.addEventListener('click', () => { document.querySelectorAll('.art-left-nav a').forEach((item) => item.classList.toggle('active', item.getAttribute('href') === link.getAttribute('href'))); }));

  document.querySelectorAll('[data-event-slider]').forEach((slider) => {
    const slides = [...slider.querySelectorAll('.art-event-slide')]; const dots = slider.querySelector('.art-slider-dots'); let current = 0;
    const showSlide = (index) => { current = (index + slides.length) % slides.length; slides.forEach((slide, slideIndex) => { const active = slideIndex === current; slide.classList.toggle('is-active', active); slide.setAttribute('aria-hidden', String(!active)); }); dots.querySelectorAll('button').forEach((dot, dotIndex) => { dot.classList.toggle('is-active', dotIndex === current); dot.setAttribute('aria-selected', String(dotIndex === current)); }); };
    slides.forEach((_, index) => { const dot = document.createElement('button'); dot.type = 'button'; dot.className = 'art-slider-dot'; dot.setAttribute('role', 'tab'); dot.setAttribute('aria-label', `Show event ${index + 1}`); dot.addEventListener('click', () => showSlide(index)); dots.appendChild(dot); });
    slider.querySelector('[data-slider-prev]').addEventListener('click', () => showSlide(current - 1)); slider.querySelector('[data-slider-next]').addEventListener('click', () => showSlide(current + 1)); showSlide(0);
  });

  const applyLocale = (language) => {
    const locale = localeData[language] || localeData.en; root.lang = language; root.dataset.siteLanguage = language;
    document.title = locale.title;
    document.querySelector('meta[name="description"]').setAttribute('content', locale.description);
    document.querySelector('meta[property="og:title"]').setAttribute('content', locale.title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', locale.description);
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', locale.title);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', locale.description);
    document.querySelectorAll('[data-language]').forEach((button) => { const active = button.dataset.language === language; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    document.querySelectorAll('.art-lang-toggle').forEach((toggle) => toggle.setAttribute('data-active', language));
    const formindBullet = document.querySelector('.art-bullet-formind');
    if (formindBullet) formindBullet.innerHTML = language === 'tr'
      ? '<a href="https://formind.forinvest.com" target="_blank" rel="noopener">ForMind</a> ve <a href="https://mcp.forinvest.com" target="_blank" rel="noopener">ForInvest MCP</a> çözümlerini tasarlayıp yayına aldım; finansal yapay zeka ekosistemlerini ve MCP yapılarını güçlendiriyorum.'
      : 'Architected and deployed <a href="https://formind.forinvest.com" target="_blank" rel="noopener">ForMind</a> and <a href="https://mcp.forinvest.com" target="_blank" rel="noopener">ForInvest MCP</a>, driving financial AI ecosystems and MCP structures.';
    document.querySelectorAll('.art-left-nav a').forEach((link, index) => { link.textContent = locale.nav[index]; });
    document.querySelectorAll('.art-side-title').forEach((node, index) => { node.textContent = locale.side[index]; });
    document.querySelector('.art-close').setAttribute('aria-label', locale.close); document.querySelector('[data-info-toggle]').setAttribute('aria-label', locale.openProfile); document.querySelector('[data-menu-toggle]').setAttribute('aria-label', locale.openMenu);
    document.querySelector('.art-btn').firstChild.textContent = `${locale.hero[0]} `;
    document.querySelector('.art-counters').setAttribute('aria-label', locale.hero[1]);
    document.querySelectorAll('.art-counters p').forEach((node, index) => { node.innerHTML = locale.hero[index + 2].replace(' ', '<br>'); });
    const aboutHeading = document.querySelector('#about .art-heading'); aboutHeading.querySelector('p').textContent = locale.aboutHeading[0]; aboutHeading.querySelector('h2').innerHTML = `${locale.aboutHeading[1]}<span>${locale.aboutHeading[2]}</span>`; document.querySelector('.art-about').innerHTML = locale.about;
    const focusHeading = document.querySelector('#focus .art-heading'); focusHeading.querySelector('p').textContent = locale.focusHeading[0]; focusHeading.querySelector('h2').innerHTML = `${locale.focusHeading[1]}<span>${locale.focusHeading[2]}</span>`;
    document.querySelectorAll('#focus .art-card').forEach((card, index) => { card.querySelector('h3').textContent = locale.focusCards[index][0]; card.querySelector('p').textContent = locale.focusCards[index][1]; });
    const educationHeading = document.querySelector('#education .art-heading'); educationHeading.querySelector('p').textContent = locale.education[0]; educationHeading.querySelector('h2').innerHTML = `${locale.education[1]}<span>${locale.education[2]}</span>`; document.querySelector('#education .art-two-col .art-card:first-child h3').textContent = locale.education[3]; document.querySelector('#education .art-two-col .art-card:last-child h3').textContent = locale.education[4]; document.querySelector('#education .art-languages b').textContent = locale.education[5];
    const contactHeading = document.querySelector('#contact .art-heading'); contactHeading.querySelector('p').textContent = locale.contact[0]; contactHeading.querySelector('h2').innerHTML = `${locale.contact[1]}<span>${locale.contact[2]}</span>`; document.querySelector('#contact .art-links-card>p').textContent = locale.contact[3];
    translateUnmappedText(language);
    const isTurkish = language === 'tr';
    document.querySelector('.art-info-bar').setAttribute('aria-label', isTurkish ? 'Profil bilgileri' : 'Profile information');
    document.querySelector('.art-left-nav').setAttribute('aria-label', isTurkish ? 'Ana navigasyon' : 'Main navigation');
    document.querySelector('.art-language-switcher').setAttribute('aria-label', isTurkish ? 'Dil' : 'Language');
    document.querySelector('[data-slider-prev]').setAttribute('aria-label', isTurkish ? 'Önceki etkinlik' : 'Previous event');
    document.querySelector('[data-slider-next]').setAttribute('aria-label', isTurkish ? 'Sonraki etkinlik' : 'Next event');
    document.querySelector('.art-slider-dots').setAttribute('aria-label', isTurkish ? 'Etkinlik slaytları' : 'Event slides');
    document.querySelectorAll('.art-slider-dot').forEach((dot, index) => { dot.setAttribute('aria-label', isTurkish ? `${index + 1}. etkinliği göster` : `Show event ${index + 1}`); });
    document.querySelector('[data-lightbox]').setAttribute('aria-label', isTurkish ? 'Büyütülmüş etkinlik görseli' : 'Expanded event image');
    document.querySelector('[data-lightbox-image]').setAttribute('alt', isTurkish ? 'Büyütülmüş etkinlik görseli' : 'Expanded event image');
    document.querySelector('.art-banner-avatar').setAttribute('alt', isTurkish ? 'Emre Toprak portresi' : 'Portrait of Emre Toprak');
    const eventAlts = isTurkish ? ['Agentic AI ve AWS etkinliği sunumu', 'AWS Cloud Day Türkiye sunumu', 'Emre Toprak AWS Cloud Day İstanbul sahnesinde sunum yapıyor', 'ForInvest InvestTech Summit 2025 sunumu', 'ForInvest Kiro ile FinTech inovasyonunu hızlandırıyor sunumu'] : ['Agentic AI and AWS event presentation', 'AWS Cloud Day Türkiye presentation', 'Emre Toprak presenting on stage at AWS Cloud Day Istanbul', 'ForInvest InvestTech Summit 2025 presentation', 'How ForInvest Accelerates FinTech Innovation with Kiro presentation'];
    document.querySelectorAll('.art-event-slide img').forEach((image, index) => { image.setAttribute('alt', eventAlts[index]); });
    const data = JSON.parse(structuredData.textContent);
    const person = data['@graph'].find((item) => item['@type'] === 'Person');
    const profilePage = data['@graph'].find((item) => item['@type'] === 'ProfilePage');
    const website = data['@graph'].find((item) => item['@type'] === 'WebSite');
    profilePage.inLanguage = language; profilePage.name = locale.title;
    website.inLanguage = language; website.description = isTurkish ? 'Emre Toprak’ın kişisel web sitesi.' : 'Personal website of Emre Toprak.';
    person.description = isTurkish ? 'İstanbul, Türkiye’de Yapay Zeka Mühendisliği Lideri, fintech mimarı ve Üretken Yapay Zeka ile otonom ajan sistemleri uzmanı.' : 'Head of AI Engineering, fintech architect, and Generative AI and agentic systems specialist in Istanbul, Türkiye.';
    structuredData.textContent = JSON.stringify(data);
    document.querySelector('[data-meta-locale]').setAttribute('content', language === 'tr' ? 'tr_TR' : 'en_US');
    localStorage.setItem('site-language', language);
  };
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang'); const savedLanguage = localStorage.getItem('site-language');
  document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => applyLocale(button.dataset.language)));
  if (root.dataset.staticLocale !== 'true') applyLocale(requestedLanguage === 'tr' || requestedLanguage === 'en' ? requestedLanguage : (savedLanguage === 'tr' ? savedLanguage : 'en'));

  const lightbox = document.querySelector('[data-lightbox]'); const lightboxImage = lightbox.querySelector('[data-lightbox-image]'); const lightboxCaption = lightbox.querySelector('[data-lightbox-caption]');
  const closeLightbox = () => { lightbox.classList.remove('is-open'); lightbox.setAttribute('aria-hidden', 'true'); document.body.classList.remove('lightbox-open'); };
  document.querySelectorAll('.art-event-slide img').forEach((image) => image.addEventListener('click', () => { lightboxImage.src = image.currentSrc || image.src; lightboxImage.alt = image.alt; lightboxCaption.textContent = image.closest('figure').querySelector('figcaption').textContent; lightbox.classList.add('is-open'); lightbox.setAttribute('aria-hidden', 'false'); document.body.classList.add('lightbox-open'); lightbox.querySelector('[data-lightbox-close]').focus(); }));
  lightbox.querySelector('[data-lightbox-close]').addEventListener('click', closeLightbox); lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); }); window.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closePanels(); closeLightbox(); } });
})();
