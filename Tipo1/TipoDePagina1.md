# 🚀 Plantilla Modular de Landing Page - Edición Premium

Una plantilla base de Landing Page construida con HTML5, CSS3 y Vanilla JavaScript. Diseñada con un enfoque modular para facilitar la personalización rápida de colores, tipografías y contenido, ideal para desplegar sitios web de clientes en tiempo récord sin sacrificar calidad visual.

## 🎯 Público Objetivo

Esta plantilla está diseñada para satisfacer dos niveles de audiencia:

1. **Usuarios Directos (Desarrolladores y Agencias):** Profesionales que necesitan un ecosistema base limpio y estructurado para clonar, personalizar variables globales e inyectar el branding de un nuevo cliente en cuestión de minutos.
2. **Usuarios Finales (Los Clientes del Cliente):** Consumidores de marcas modernas, productos físicos (bebidas, cosméticos, alimentos saludables) o servicios digitales. El diseño está enfocado en usuarios que escanean visualmente, prefieren interacciones dinámicas y necesitan un camino claro hacia la conversión (formularios/compras).

## ✨ Características Principales

* **Arquitectura de Estilos Modular:** Control total del *theme* a través del archivo `variablesGlobal.css`. Cambiar la paleta de colores de un cliente o sus tipografías toma solo unos segundos.
* **Diseño UI/UX Moderno:**
* Implementación de **Glassmorphism** (efecto cristal) en la barra de navegación para una apariencia limpia y de alta gama.
* Geometría amigable con bordes suavizados (uso de *border-radius* amplios).
* Tipografía profesional integrada (Poppins) para maximizar la legibilidad y la estética contemporánea.


* **Animaciones de Alto Rendimiento:**
* Aparición progresiva de elementos al hacer scroll mediante la API `IntersectionObserver`, evitando la sobrecarga del DOM.
* Micro-interacciones en los enlaces de navegación (subrayado expansivo) y efectos de rebote (bounce) en elementos clave como logotipos y productos.


* **100% Responsivo:** Diseño fluido basado en Flexbox y Grid que se adapta perfectamente a dispositivos móviles, tablets y monitores de escritorio.
* **Estructura Orientada a la Conversión:**
* *Hero Section* impactante con llamados a la acción (CTA) claros.
* Sección de "Beneficios" estructurada en píldoras de lectura rápida.
* Catálogo de productos integrado.
* Formulario de contacto estático listo para ser conectado a un endpoint o API de recolección de leads (ej. Formspree, AWS API Gateway o un backend propio).



## 📂 Estructura del Proyecto

```text
/
├── index.html           # Estructura principal de la Landing Page
├── variablesGlobal.css  # Configuración de variables (Paleta, fuentes, espaciados)
├── style.css            # Estilos principales, layout y animaciones
└── script.js            # Lógica de interacciones y observador de scroll

```

## 🛠️ Instrucciones de Configuración Rápida

1. **Clonar y Duplicar:** Copia la carpeta del proyecto para tu nuevo cliente.
2. **Configurar Identidad Visual:** Abre `variablesGlobal.css` y modifica las variables `--color-hero-bg`, `--color-hero-btn`, y `--color-contact-bg` con el manual de marca de tu cliente.
3. **Inyectar Contenido:** Reemplaza los textos dentro de `index.html`. Las áreas clave están marcadas (Ej: `[Título del Producto]`, `[Insertar Logo Cliente Aquí]`).
4. **Cargar Assets:** Sustituye los espacios de imagen (clases `.hero-image-placeholder`, `.product-image-placeholder`) con etiquetas `<img>` apuntando a los recursos del cliente. Se recomienda usar imágenes en formato PNG con fondo transparente o WebP para optimizar la carga.
5. **Conectar el Formulario:** En `script.js`, localiza el evento de `submit` del formulario y reemplaza el `alert()` con tu lógica de petición `fetch()` hacia el servidor o servicio de mensajería deseado.

---

*Nota del Desarrollador: Esta estructura está optimizada para ser ligera, no requiere dependencias de NPM ni compiladores, lo que garantiza un despliegue instantáneo en cualquier servicio de hosting estático.*