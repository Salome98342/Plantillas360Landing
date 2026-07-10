/**
 * LÓGICA E INTERACCIONES DE LA LANDING PAGE
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MENÚ RESPONSIVE (MÓVIL / HAMBURGUESA)
    // ==========================================
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const mobileBtnIcon = mobileBtn.querySelector('i');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Intercambia el icono de barras por una "X" al abrir/cerrar
            if (navLinks.classList.contains('active')) {
                mobileBtnIcon.classList.remove('fa-bars');
                mobileBtnIcon.classList.add('fa-xmark');
            } else {
                mobileBtnIcon.classList.remove('fa-xmark');
                mobileBtnIcon.classList.add('fa-bars');
            }
        });

        // Cierra automáticamente el menú lateral al hacer click en cualquier sección
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    mobileBtnIcon.classList.remove('fa-xmark');
                    mobileBtnIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // ==========================================
    // 2. ANIMACIONES FLUIDAS AL HACER SCROLL
    // ==========================================
    // Configuración usando Intersection Observer API nativa y de alto rendimiento
    const observerOptions = {
        root: null, // Usa el viewport del navegador
        rootMargin: '0px',
        threshold: 0.15 // El elemento se anima cuando es visible un 15%
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Dejar de observar para que la animación solo ocurra una vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Selecciona todos los bloques marcados para animarse
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => scrollObserver.observe(element));

    // ==========================================
    // 3. ACTUALIZACIÓN AUTOMÁTICA DEL AÑO
    // ==========================================
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});