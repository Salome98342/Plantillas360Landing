/* ==========================================
   LOGICA JAVASCRIPT (script.js)
   Maneja las animaciones de la Landing Page
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Configuración del Intersection Observer para animaciones On-Scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15, // El elemento aparece cuando el 15% es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Añade la clase 'visible' que activa la animación en CSS
                entry.target.classList.add('visible');
                // Deja de observar el elemento una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // 2. Iniciar la observación de todos los elementos con la clase '.fade-in'
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    console.log("Plantilla Landing Page Inicializada Correctamente.");
});
