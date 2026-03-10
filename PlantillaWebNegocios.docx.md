**ESPECIFICACIÓN DE**

**REQUERIMIENTOS DE SOFTWARE**

**SRS v1.0**

**Plantilla de Sitio Web Estático para Pequeños Negocios**

Versión 1.0  |  Febrero 2026

Clasificación: Uso Interno

| Proyecto: | Plantilla Sitio Web Estático — Pequeños Negocios |
| :---- | :---- |
| **Versión:** | 1.0 |
| **Fecha:** | Febrero 2026 |
| **Estado:** | Borrador |
| **Autor:** | \[Nombre del Autor\] |
| **Revisado por:** | \[Nombre del Revisor\] |

# **1\. Introducción**

## **1.1 Propósito**

Este documento describe los requerimientos funcionales, no funcionales y técnicos para el desarrollo de una plantilla de sitio web estático orientada a pequeños negocios. El objetivo es crear un producto base reutilizable que pueda adaptarse a distintos giros comerciales (restaurantes, consultorios, tiendas, salones, etc.) con el mínimo esfuerzo de configuración.

## **1.2 Alcance**

El sistema se define como una plantilla de sitio web estático que incluye:

* Páginas informativas esenciales: Inicio, Servicios, Nosotros y Contacto.

* Componentes de conversión: botón de WhatsApp flotante, formulario de contacto y mapa de Google Maps.

* Diseño responsivo compatible con dispositivos móviles, tabletas y computadoras de escritorio.

* Configuración centralizada de contenido para facilitar la personalización por giro de negocio.

* Optimización básica de SEO y rendimiento web.

## **1.3 Definiciones y Acrónimos**

| SRS | Software Requirements Specification — Especificación de Requerimientos de Software |
| :---- | :---- |
| **HTML/CSS/JS** | HyperText Markup Language / Cascading Style Sheets / JavaScript |
| **SEO** | Search Engine Optimization — Optimización para Motores de Búsqueda |
| **CTA** | Call To Action — Llamada a la Acción |
| **PWA** | Progressive Web App — Aplicación Web Progresiva |
| **UI/UX** | User Interface / User Experience — Interfaz y Experiencia de Usuario |
| **API** | Application Programming Interface — Interfaz de Programación de Aplicaciones |
| **CMS** | Content Management System — Sistema de Gestión de Contenidos |

## **1.4 Público Objetivo**

Este documento está dirigido a:

* Desarrolladores web responsables del desarrollo e implementación de la plantilla.

* Diseñadores UI/UX encargados de la identidad visual y experiencia de usuario.

* Project managers que supervisan el ciclo de vida del proyecto.

* Clientes finales (dueños de pequeños negocios) para validación de requerimientos.

# **2\. Descripción General del Sistema**

## **2.1 Perspectiva del Producto**

La plantilla se desarrollará como un conjunto de archivos estáticos (HTML, CSS, JavaScript) desplegables en servicios de hosting estático como GitHub Pages, Netlify, Vercel o cualquier servidor web convencional. No requerirá base de datos ni lenguaje de servidor, lo que reduce costos de operación y simplifica el mantenimiento para negocios pequeños.

## **2.2 Características Generales del Usuario**

| Usuario Final | Dueño de pequeño negocio sin conocimientos técnicos avanzados. Necesita actualizar información de contacto, servicios y precios con mínima fricción. |
| :---- | :---- |
| **Administrador Web** | Desarrollador o técnico encargado de configurar y desplegar la plantilla para el cliente final. |
| **Visitante del Sitio** | Clientes potenciales que acceden al sitio para conocer el negocio, sus servicios y datos de contacto. |

## **2.3 Suposiciones y Dependencias**

* El navegador del usuario final soporta HTML5, CSS3 y ES6+.

* El negocio cuenta con número de teléfono de WhatsApp activo para el botón de contacto.

* Se dispone de una cuenta de Google para la integración del mapa (Google Maps Embed API).

* El dominio y hosting están gestionados por el administrador web o el cliente.

* El contenido textual e imágenes son provistos por el cliente previo al desarrollo.

# **3\. Requerimientos Funcionales**

## **3.1 Módulo: Página de Inicio (Home)**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RF-01** | Hero Section | **Alta** | Sección principal con imagen/video de fondo, eslogan del negocio y un botón CTA destacado (e.g., 'Contáctanos', 'Ver Servicios'). |
| **RF-02** | Resumen de Servicios | **Alta** | Bloque visual con íconos o imágenes que resume los 3-6 servicios principales del negocio con enlace a la sección de servicios completa. |
| **RF-03** | Sección 'Por qué elegirnos' | **Media** | Bloque con 3-4 propuestas de valor diferenciadas (rapidez, calidad, precio, etc.) usando íconos y texto corto. |
| **RF-04** | Testimonios | **Media** | Carrusel o grilla de reseñas de clientes con nombre, foto opcional y calificación en estrellas. |
| **RF-05** | Galería de fotos | **Media** | Galería en mosaico o carrusel con imágenes del negocio, productos o instalaciones. Debe ser reemplazable fácilmente. |
| **RF-06** | CTA Final | **Alta** | Sección de cierre con llamada a la acción y enlace al contacto o WhatsApp. |

## **3.2 Módulo: Servicios**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RF-07** | Listado de Servicios | **Alta** | Página o sección dedicada con tarjetas (cards) para cada servicio, incluyendo nombre, descripción corta, ícono o imagen y precio opcional. |
| **RF-08** | Detalle de Servicio | **Media** | Expansión o modal con descripción detallada del servicio al hacer clic en cada tarjeta. |
| **RF-09** | Categorización | **Baja** | Filtro o pestañas para clasificar servicios por categoría cuando el negocio tenga múltiples tipos de servicio. |

## **3.3 Módulo: Nosotros / About**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RF-10** | Historia del Negocio | **Media** | Sección con texto descriptivo sobre la historia, misión y visión del negocio. |
| **RF-11** | Equipo | **Baja** | Tarjetas del personal clave con foto, nombre y cargo. Sección opcional y ocultable. |
| **RF-12** | Valores y Certificaciones | **Baja** | Logos o insignias de certificaciones, premios o membresías relevantes para generar confianza. |

## **3.4 Módulo: Contacto**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RF-13** | Formulario de Contacto | **Alta** | Formulario con campos: Nombre, Correo electrónico, Teléfono (opcional), Asunto y Mensaje. Con validación de campos y envío vía Formspree o EmailJS (sin backend). |
| **RF-14** | Información de Contacto | **Alta** | Visualización de dirección, teléfono, correo electrónico y horarios de atención con íconos. |
| **RF-15** | Google Maps Embed | **Alta** | Mapa interactivo incrustado mostrando la ubicación del negocio mediante Google Maps Embed API. |
| **RF-16** | Redes Sociales | **Media** | Íconos con enlaces a las redes sociales activas del negocio (Facebook, Instagram, TikTok, etc.). |

## **3.5 Módulo: Componentes Globales**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RF-17** | Botón WhatsApp Flotante | **Alta** | Botón flotante visible en todas las páginas con ícono de WhatsApp que abre una conversación predefinida con mensaje de bienvenida configurable. Posición fija inferior derecha. |
| **RF-18** | Navegación Principal | **Alta** | Menú de navegación con enlaces a todas las secciones/páginas. Versión hamburguesa para móviles. Fijado en la parte superior al hacer scroll (sticky nav). |
| **RF-19** | Footer | **Alta** | Pie de página con logo, links de navegación rápida, datos de contacto resumidos, redes sociales y aviso de derechos de autor. |
| **RF-20** | Botón Volver Arriba | **Baja** | Botón flotante que aparece al hacer scroll hacia abajo para regresar al inicio de la página. |
| **RF-21** | Banner de Cookies | **Media** | Aviso de uso de cookies con opción de aceptar o rechazar, conforme a regulaciones básicas de privacidad. |
| **RF-22** | Página 404 | **Media** | Página de error personalizada con mensaje amigable y botón para regresar al inicio. |

## **3.6 Módulo: Configuración de la Plantilla**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RF-23** | Archivo de Configuración | **Alta** | Archivo central (config.js o config.json) con variables de negocio: nombre, logo, colores, número de WhatsApp, coordenadas del mapa, redes sociales, servicios y textos principales. |
| **RF-24** | Temas de Color | **Media** | Sistema de variables CSS (custom properties) para cambiar la paleta de colores completa del sitio modificando solo el archivo de configuración. |
| **RF-25** | Multiidioma (i18n) | **Baja** | Soporte básico para español e inglés mediante archivo de traducciones JSON, con selector de idioma en la navegación. |

# **4\. Requerimientos No Funcionales**

## **4.1 Diseño y Usabilidad**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RNF-01** | Diseño Responsivo | **Alta** | El sitio debe adaptarse correctamente a pantallas de 320px (móvil pequeño) hasta 2560px (pantalla grande). Breakpoints mínimos: 480px, 768px, 1024px y 1280px. |
| **RNF-02** | Accesibilidad | **Media** | Cumplir con WCAG 2.1 nivel AA: contraste de colores mínimo 4.5:1, texto alternativo en imágenes, navegación por teclado y etiquetas ARIA donde corresponda. |
| **RNF-03** | Mobile First | **Alta** | El desarrollo debe comenzar desde la vista móvil y escalar progresivamente hacia pantallas más grandes. |
| **RNF-04** | Consistencia Visual | **Alta** | Mantener coherencia tipográfica, de color y de espaciado en todas las páginas y componentes. |

## **4.2 Rendimiento**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RNF-05** | Velocidad de Carga | **Alta** | Puntuación mínima de 85/100 en Google PageSpeed Insights para dispositivos móviles y 90/100 para escritorio. |
| **RNF-06** | Optimización de Imágenes | **Alta** | Las imágenes deben servirse en formato WebP con fallback JPG/PNG, con atributo loading='lazy' para imágenes fuera de pantalla. |
| **RNF-07** | Código Limpio | **Media** | HTML, CSS y JS minificados en producción. Sin dependencias externas innecesarias. Tamaño máximo de página principal: 2MB. |
| **RNF-08** | Caché del Navegador | **Media** | Configurar headers de caché adecuados para assets estáticos (imágenes, fuentes, CSS, JS). |

## **4.3 SEO y Visibilidad**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RNF-09** | Meta Tags | **Alta** | Cada página debe incluir title, meta description, meta keywords y Open Graph tags (og:title, og:description, og:image) para compartir en redes sociales. |
| **RNF-10** | Sitemap | **Media** | Generación de sitemap.xml para facilitar la indexación por motores de búsqueda. |
| **RNF-11** | Robots.txt | **Media** | Archivo robots.txt configurado correctamente para permitir o bloquear el rastreo según sea necesario. |
| **RNF-12** | URLs Amigables | **Alta** | Estructura de URLs descriptiva y legible (e.g., /servicios, /contacto, /nosotros) sin parámetros innecesarios. |
| **RNF-13** | Schema Markup | **Media** | Implementar datos estructurados JSON-LD con esquema LocalBusiness de Schema.org para mejorar la visibilidad en búsquedas locales. |

## **4.4 Seguridad**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RNF-14** | HTTPS | **Alta** | El sitio debe desplegarse sobre HTTPS. No se aceptará contenido mixto (HTTP dentro de HTTPS). |
| **RNF-15** | Protección de Datos | **Alta** | No almacenar datos personales de formularios en el front-end. Usar servicios de terceros confiables (Formspree, EmailJS) para el envío de correos. |
| **RNF-16** | CSP Headers | **Media** | Implementar Content Security Policy básica para mitigar ataques XSS, especialmente en el formulario de contacto. |

## **4.5 Mantenibilidad y Reutilización**

| ID | Requerimiento | Prioridad | Descripción |
| :---- | :---- | ----- | :---- |
| **RNF-17** | Arquitectura Modular | **Alta** | Componentes HTML separados e incluibles (header, footer, secciones) para facilitar modificaciones sin afectar el resto del sitio. |
| **RNF-18** | Documentación | **Alta** | Incluir archivo README.md con instrucciones de configuración, personalización y despliegue. Comentarios en el código en las secciones clave. |
| **RNF-19** | Variables CSS | **Alta** | Uso obligatorio de custom properties (variables) CSS para colores, tipografías y espaciados, facilitando el cambio de tema visual. |
| **RNF-20** | Compatibilidad de Navegadores | **Alta** | Soporte para las últimas 2 versiones de Chrome, Firefox, Safari y Edge. Soporte básico para iOS Safari y Chrome Android. |

# **5\. Arquitectura Técnica Propuesta**

## **5.1 Stack Tecnológico**

| Lenguajes Base | HTML5, CSS3, JavaScript (ES6+) |
| :---- | :---- |
| **Estilos** | CSS puro con custom properties \+ (Opcional) Tailwind CSS para prototipado rápido |
| **JavaScript** | Vanilla JS sin dependencias obligatorias. Swiper.js opcional para carruseles. |
| **Formulario de Contacto** | Formspree (gratuito hasta 50 envíos/mes) o EmailJS |
| **Mapas** | Google Maps Embed API (sin costo para uso básico) |
| **Fuentes** | Google Fonts (auto-hosted recomendado para rendimiento) |
| **Íconos** | Font Awesome 6 Free o Heroicons SVG |
| **Hosting Recomendado** | Netlify (gratis), GitHub Pages (gratis), Vercel (gratis) |
| **Control de Versiones** | Git \+ GitHub/GitLab |
| **Build (Opcional)** | Parcel o Vite para proyectos que requieran minificación automática |

## **5.2 Estructura de Archivos**

La plantilla seguirá la siguiente estructura de directorios:

| Ruta | Descripción |
| :---- | :---- |
| /index.html | Página principal (Home) |
| /servicios.html | Página de servicios |
| /nosotros.html | Página de información del negocio |
| /contacto.html | Página de contacto con mapa y formulario |
| /404.html | Página de error personalizada |
| /css/styles.css | Estilos globales con variables CSS |
| /css/components/ | Estilos por componente (nav, footer, cards...) |
| /js/main.js | Lógica principal: menú, scroll, animaciones |
| /js/config.js | Archivo de configuración del negocio |
| /js/whatsapp.js | Lógica del botón flotante de WhatsApp |
| /js/maps.js | Inicialización y configuración del mapa |
| /assets/images/ | Imágenes del sitio (WebP \+ fallbacks) |
| /assets/icons/ | Íconos SVG personalizados |
| /assets/fonts/ | Fuentes auto-hosted (opcional) |
| /sitemap.xml | Mapa del sitio para SEO |
| /robots.txt | Directivas para motores de búsqueda |
| /README.md | Documentación de instalación y uso |

# **6\. Casos de Uso Principales**

## **CU-01: Visitante consulta información del negocio**

| Actor Principal: | Visitante del sitio web |
| :---- | :---- |
| **Precondición:** | El sitio web está publicado y accesible vía internet |
| **Flujo Principal:** | 1\. El visitante accede al URL del negocio.2. Visualiza el Hero con el nombre y eslogan del negocio.3. Navega por las secciones de servicios, nosotros y contacto.4. Encuentra la información que necesita y se pone en contacto. |
| **Postcondición:** | El visitante tiene la información suficiente para tomar una decisión de contacto. |
| **Flujo Alternativo:** | Si el visitante no encuentra lo que busca, puede usar el botón de WhatsApp para una consulta directa. |

## **CU-02: Visitante contacta al negocio por WhatsApp**

| Actor Principal: | Visitante del sitio web |
| :---- | :---- |
| **Precondición:** | El número de WhatsApp está configurado en config.js y el visitante tiene WhatsApp instalado |
| **Flujo Principal:** | 1\. El visitante hace clic en el botón flotante de WhatsApp.2. Se abre WhatsApp Web o la app móvil con un mensaje predefinido.3. El visitante personaliza o envía el mensaje directamente al negocio. |
| **Postcondición:** | El negocio recibe una consulta directa en su WhatsApp Business. |
| **Nota:** | El mensaje predefinido configurable podría ser: '¡Hola\! Vi su sitio web y me gustaría obtener más información.' |

## **CU-03: Visitante ubica el negocio en el mapa**

| Actor Principal: | Visitante del sitio web |
| :---- | :---- |
| **Precondición:** | Las coordenadas del negocio están configuradas y Google Maps Embed está activo |
| **Flujo Principal:** | 1\. El visitante navega a la sección o página de Contacto.2. Visualiza el mapa interactivo con el pin en la ubicación del negocio.3. Hace clic en 'Abrir en Google Maps' para obtener indicaciones de ruta. |
| **Postcondición:** | El visitante puede navegar hasta el negocio usando Google Maps. |

## **CU-04: Administrador personaliza la plantilla para un nuevo cliente**

| Actor Principal: | Administrador web / Desarrollador |
| :---- | :---- |
| **Precondición:** | La plantilla está descargada y Node.js/editor de código disponibles |
| **Flujo Principal:** | 1\. Abre config.js y actualiza: nombre del negocio, logo, colores, WhatsApp, dirección.2. Reemplaza imágenes en /assets/images/ con las del nuevo cliente.3. Actualiza los servicios en el archivo de configuración.4. Ajusta las variables CSS de color en styles.css.5. Prueba en localhost y despliega en Netlify/GitHub Pages. |
| **Postcondición:** | El sitio web del nuevo cliente está publicado y operativo. |
| **Tiempo Estimado:** | 2-4 horas para personalización completa de la plantilla. |

# **7\. Restricciones y Limitaciones**

* El sistema es un sitio estático, por lo que no soporta funcionalidades que requieran procesamiento en servidor (e.g., carrito de compras, área privada, blog dinámico con CMS).

* El formulario de contacto depende de un servicio de terceros (Formspree/EmailJS); interrupciones en dichos servicios afectarán esta funcionalidad.

* Google Maps Embed API tiene límites de uso en el plan gratuito; para tráfico muy alto podría requerir activar facturación en Google Cloud.

* La galería de imágenes no debe exceder 20 imágenes en la versión base para mantener el rendimiento.

* No se contempla un panel de administración gráfico; todas las modificaciones requieren edición de código o archivos de configuración.

# **8\. Criterios de Aceptación**

## **8.1 Criterios Funcionales**

1. Todas las páginas (Inicio, Servicios, Nosotros, Contacto) cargan sin errores en los 4 navegadores objetivo.

2. El botón de WhatsApp abre correctamente la conversación con el mensaje predefinido en móvil y escritorio.

3. El formulario de contacto envía el correo correctamente y muestra confirmación al usuario.

4. El mapa de Google Maps se visualiza y permite interacción (zoom, mover) sin errores.

5. La navegación hamburguesa funciona correctamente en pantallas menores a 768px.

6. Cambiar los valores en config.js actualiza correctamente el contenido del sitio.

## **8.2 Criterios de Rendimiento**

7. Puntuación Google PageSpeed Insights móvil \>= 85 y escritorio \>= 90\.

8. First Contentful Paint (FCP) \<= 2.5 segundos en conexión 4G simulada.

9. Largest Contentful Paint (LCP) \<= 4 segundos.

10. Cumulative Layout Shift (CLS) \<= 0.1.

## **8.3 Criterios de Diseño**

11. El diseño se visualiza correctamente en resoluciones de 320px, 768px, 1024px y 1440px de ancho.

12. No hay overflow horizontal en ninguna de las resoluciones de prueba.

13. El contraste de colores cumple con WCAG 2.1 nivel AA (ratio mínimo 4.5:1 para texto normal).

# **9\. Plan de Implementación Sugerido**

| Fase | Nombre | Actividades Clave | Duración | Entregable |
| ----- | :---- | :---- | ----- | :---- |
| **1** | **Diseño UI/UX** | Wireframes, mockups en Figma, paleta de colores, tipografía | 3-5 días | Mockups aprobados |
| **2** | **Estructura Base** | HTML semántico de todas las páginas, configuración del proyecto | 2-3 días | HTML base |
| **3** | **Estilos Globales** | CSS reset, variables, tipografía, grid system, componentes base | 3-4 días | CSS framework interno |
| **4** | **Componentes** | Header, footer, hero, cards de servicios, galería, testimonios | 4-5 días | Componentes listos |
| **5** | **Integraciones** | WhatsApp button, formulario, Google Maps, animaciones scroll | 2-3 días | Integraciones funcionando |
| **6** | **SEO & Rendimiento** | Meta tags, schema markup, optimización de imágenes, sitemap | 2 días | Sitio optimizado |
| **7** | **QA & Pruebas** | Pruebas cross-browser, responsive, formulario, accesibilidad | 2-3 días | Informe de pruebas |
| **8** | **Documentación** | README, guía de personalización, comentarios en código | 1-2 días | Plantilla documentada |

# **10\. Apéndice: Funcionalidades Sugeridas para Versiones Futuras**

Las siguientes funcionalidades no forman parte del alcance v1.0 pero se recomiendan para versiones posteriores:

* Blog o Noticias: Sección de artículos con Netlify CMS o Forestry para que el dueño pueda actualizar contenido sin código.

* Reservaciones Online: Integración con Calendly o Google Calendar para negocios que requieran citas (consultorios, salones de belleza, etc.).

* Tienda Virtual Básica: Integración con Snipcart o Gumroad para negocios con catálogo de productos físicos o digitales.

* Chat en Vivo: Widget de Tawk.to o Facebook Messenger para atención en tiempo real.

* Popup de Promociones: Banner o modal configurable para mostrar ofertas especiales o anuncios importantes.

* Modo Oscuro: Toggle de tema claro/oscuro con persistencia en localStorage.

* Analítica Web: Integración con Google Analytics 4 o Plausible Analytics (privacidad primero).

* PWA Básica: Service Worker para funcionamiento offline básico y posibilidad de instalación en pantalla de inicio.

* Multiubicación: Soporte para negocios con múltiples sucursales, mostrando varias ubicaciones en el mapa.

* Integración con Redes Sociales: Feed de Instagram o reseñas de Google My Business incrustadas directamente en el sitio.

# **11\. Historial de Versiones**

| Versión | Fecha | Descripción | Autor |
| ----- | :---- | :---- | :---- |
| **1.0** | Febrero 2026 | Versión inicial del documento SRS | \[Nombre del Autor\] |

*— Fin del Documento —*