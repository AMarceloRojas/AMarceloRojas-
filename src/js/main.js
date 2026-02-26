// ========================================
// MENÚ MOBILE
// ========================================

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ========================================
// MODO OSCURO
// ========================================

const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const icon = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    if (darkModeToggle) darkModeToggle.textContent = icon;
    if (darkModeToggleMobile) darkModeToggleMobile.textContent = icon;
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
}

// ========================================
// CAMBIO DE IDIOMA
// ========================================

const langToggle = document.getElementById('langToggle');
const langToggleMobile = document.getElementById('langToggleMobile');
let currentLang = 'es';
const translations = {
    es: {
        nav_inicio: 'INICIO',
        nav_sobre: 'SOBRE MÍ',
        nav_proyectos: 'PROYECTOS',
        nav_experiencia: 'EXPERIENCIA',
        nav_contacto: 'CONTACTO',
        subtitle: 'Junior DevOps / Backend Developer | DevSecOps',
        location: 'Based in Lima, Perú',
        bio_label: 'BIOGRAFÍA',
        bio_text: 'Construyo y despliego aplicaciones fullstack con enfoque en DevOps y seguridad. NestJS + React + Docker + Kubernetes + CI/CD con GitHub Actions + Trivy. 2 años de experiencia real en Yobel SCM.',
        contact_label: 'CONTACTO',
        services_label: 'SERVICIOS',
        services_text: 'Desarrollo Backend con NestJS\nCI/CD y DevSecOps con GitHub Actions + Trivy\nContenedores Docker y Kubernetes\nMonitoreo con Prometheus + Grafana',
        stat_exp: 'AÑOS DE EXPERIENCIA',
        stat_clients: 'CLIENTES SATISFECHOS',
        stat_projects: 'PROYECTOS EN GITHUB',
        stat_certs: 'CERTIFICACIONES',
        about_title: 'Sobre Mí',
        about_subtitle: 'Junior DevOps / Backend Developer enfocado en CI/CD, seguridad y observabilidad',
        projects_title: 'Proyectos Destacados',
        experience_title: 'Experiencia & Educación',
        contact_title: '¿Trabajamos Juntos?',
        contact_text: 'Estoy siempre abierto a nuevas oportunidades. Si tienes un proyecto o quieres conversar sobre DevOps y desarrollo, no dudes en contactarme.',
        cta_button: 'Enviar Mensaje',
    },
    en: {
        nav_inicio: 'HOME',
        nav_sobre: 'ABOUT',
        nav_proyectos: 'PROJECTS',
        nav_experiencia: 'EXPERIENCE',
        nav_contacto: 'CONTACT',
        subtitle: 'Junior DevOps / Backend Developer | DevSecOps',
        location: 'Based in Lima, Perú',
        bio_label: 'BIOGRAPHY',
        bio_text: 'I build and deploy fullstack applications focused on DevOps and security. NestJS + React + Docker + Kubernetes + CI/CD with GitHub Actions + Trivy. 2 years of real experience at Yobel SCM.',
        contact_label: 'CONTACT',
        services_label: 'SERVICES',
        services_text: 'Backend Development with NestJS\nCI/CD and DevSecOps with GitHub Actions + Trivy\nDocker and Kubernetes Containers\nMonitoring with Prometheus + Grafana',
        stat_exp: 'YEARS OF EXPERIENCE',
        stat_clients: 'SATISFIED CLIENTS',
        stat_projects: 'GITHUB PROJECTS',
        stat_certs: 'CERTIFICATIONS',
        about_title: 'About Me',
        about_subtitle: 'Junior DevOps / Backend Developer focused on CI/CD, security and observability',
        projects_title: 'Featured Projects',
        experience_title: 'Experience & Education',
        contact_title: 'Let\'s Work Together?',
        contact_text: 'I\'m always open to new opportunities. If you have a project or want to talk about DevOps and development, feel free to reach out.',
        cta_button: 'Send Message',
    }
};

function applyTranslations(lang) {
    const t = translations[lang];
    
    // Navbar
    const navLinks = document.querySelectorAll('.nav-link');
    const navKeys = ['nav_inicio', 'nav_sobre', 'nav_proyectos', 'nav_experiencia', 'nav_contacto'];
    navLinks.forEach((link, i) => { if (navKeys[i]) link.textContent = t[navKeys[i]]; });

    // Hero
    const subtitle = document.querySelector('.subtitle');
    const location = document.querySelector('.location');
    if (subtitle) subtitle.textContent = t.subtitle;
    if (location) location.textContent = t.location;

    // Labels
    const labels = document.querySelectorAll('.label');
    labels.forEach(label => {
        if (label.textContent.includes('BIOGRAF') || label.textContent.includes('BIOGRAPHY')) label.textContent = t.bio_label;
        if (label.textContent.includes('CONTACT')) label.textContent = t.contact_label;
        if (label.textContent.includes('SERVIC')) label.textContent = t.services_label;
        if (label.textContent.includes('AÑO') || label.textContent.includes('YEAR')) label.textContent = t.stat_exp;
        if (label.textContent.includes('CLIENTE') || label.textContent.includes('CLIENT')) label.textContent = t.stat_clients;
        if (label.textContent.includes('PROYECTO') || label.textContent.includes('PROJECT')) label.textContent = t.stat_projects;
        if (label.textContent.includes('CERTIF')) label.textContent = t.stat_certs;
    });

    // Section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    const titleKeys = ['about_title', 'projects_title', 'experience_title', 'contact_title'];
    sectionTitles.forEach((title, i) => { if (titleKeys[i]) title.textContent = t[titleKeys[i]]; });

    // Section subtitle
    const sectionSubtitle = document.querySelector('.section-subtitle');
    if (sectionSubtitle) sectionSubtitle.textContent = t.about_subtitle;

    // Contact text
    const contactText = document.querySelector('.contact-text');
    if (contactText) contactText.textContent = t.contact_text;

    // CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) ctaButton.textContent = t.cta_button;
}

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    const text = currentLang === 'en' ? 'ES' : 'EN';
    if (langToggle) langToggle.textContent = text;
    if (langToggleMobile) langToggleMobile.textContent = text;
    applyTranslations(currentLang);
}

if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
}

if (langToggleMobile) {
    langToggleMobile.addEventListener('click', toggleLanguage);
}

// ========================================
// NAVEGACIÓN ACTIVA AL HACER SCROLL
// ========================================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });

    // Agregar clase 'scrolled' al navbar
    const navbar = document.getElementById('navbar');
    if (navbar && window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else if (navbar) {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// INTERSECTION OBSERVER PARA ANIMACIONES
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right').forEach(el => {
    observer.observe(el);
});

// ========================================
// SMOOTH SCROLL PARA ENLACES INTERNOS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// EFECTO 3D EN TARJETAS DE PROYECTOS
// ========================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});
// BUSCA ESTA SECCIÓN EN TU main.js:


// CAMBIA ESTA LÍNEA:
// let isDarkMode = false;  ❌ ELIMINA ESTA

// POR ESTA:
let isDarkMode = true;  // ✅ COMIENZA EN TRUE (modo oscuro)

// El resto del código permanece igual
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    
    const icon = isDarkMode ? '🌙' : '☀️';
    darkModeToggle.innerHTML = icon;
    darkModeToggleMobile.innerHTML = icon;
    
    localStorage.setItem('darkMode', isDarkMode);
}

// TAMBIÉN MODIFICA ESTA PARTE:
// Cargar preferencia guardada
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode !== null) {
    isDarkMode = savedDarkMode === 'true';
} else {
    isDarkMode = true;  // ✅ Si no hay preferencia guardada, usa modo oscuro
}

if (isDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '🌙';
    darkModeToggleMobile.innerHTML = '🌙';
} else {
    darkModeToggle.innerHTML = '☀️';
    darkModeToggleMobile.innerHTML = '☀️';
}// MODAL DEMO
function openDemoModal(gif) {
    const modal = document.getElementById('demoModal');
    document.getElementById('demoGif').src = gif;
    modal.style.display = 'flex';
}
function closeDemoModal() {
    document.getElementById('demoModal').style.display = 'none';
    document.getElementById('demoGif').src = '';
}
document.getElementById('demoModal').addEventListener('click', function(e) {
    if(e.target === this) closeDemoModal();
});