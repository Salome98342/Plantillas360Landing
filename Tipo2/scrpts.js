// =========================================
// script.js
// Manejo de animaciones fluidas al hacer scroll
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    // Configuración del observador para revelar elementos al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para activar la animación de CSS
                entry.target.classList.add('visible');
                // Dejar de observar una vez animado para mejor rendimiento
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleccionar todos los elementos con la clase de animación
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});