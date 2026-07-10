document.addEventListener("DOMContentLoaded", () => {
    // 1. Animaciones de entrada al hacer Scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // El elemento aparece cuando el 15% es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Solo anima una vez
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // 2. Manejo del Formulario (Para dejar preparado para el cliente)
    const form = document.getElementById('clienteForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Lógica de envío (API, Fetch, etc.)
            alert('Configurar endpoint del cliente aquí.');
            form.reset();
        });
    }
// --- Lógica del Header Sticky ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

