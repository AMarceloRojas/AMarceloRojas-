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

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    const text = currentLang === 'en' ? 'ES' : 'EN';
    if (langToggle) langToggle.textContent = text;
    if (langToggleMobile) langToggleMobile.textContent = text;
    // Aquí puedes agregar la lógica para cambiar el contenido del sitio
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
}