/* scripts.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Configuración del Observer para animaciones al hacer scroll
    const observerOptions = {
        root: null, // usa el viewport
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento entra en la vista
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animate');
                // Dejar de observar una vez animado para mejor rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 2. Seleccionar todos los elementos a animar
    const animatedElements = document.querySelectorAll('.hidden-animate');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Opcional: Lógica para menú móvil (Hamburguesa) si decides agregarlo al HTML
    /*
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    */
});
