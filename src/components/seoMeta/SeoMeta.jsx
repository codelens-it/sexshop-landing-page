// src/components/Seo.jsx
import { useEffect } from 'react';

const Seo = ({ 
  title = 'SexShop - Juguetes Eróticos y Productos para Adultos | TuMarca',
  description = 'Encuentra los mejores juguetes sexuales, lubricantes y productos para adultos. Envíos discretos a todo el país. Calidad y discreción garantizadas',
  keywords = 'juguetes eróticos, sexshop, vibradores, lubricantes, productos para adultos, tienda sexual, lenceria, bdsm',
  url = 'https://tusexshop.com',
  canonical = 'https://tusexshop.com',
  image = '/logo/logo.svg',
  type = 'website'
}) => {
  useEffect(() => {
    // Sistema mejorado de gestión de tags
    const tagsConfig = [
      // Título
      { type: 'title', value: title },
      
      // Meta tags básicos
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow' },
      
      // OpenGraph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:image', content: `${url}${image}` },
      { property: 'og:site_name', content: 'TuMarca SexShop' },
      { property: 'og:locale', content: 'es_ES' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${url}${image}` },
      
      // Links
      { rel: 'canonical', href: canonical },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'icon', href: '/logo/logo.svg', svgType: 'image/svg+xml' } // Cambiado a svgType para evitar duplicados
    ];

    // Manejar el título
    if (document.title !== title) {
      document.title = title;
    }

    // Manejar meta tags y links
    tagsConfig.forEach(config => {
      if ('value' in config) return; // El título ya lo manejamos

      if ('property' in config || 'name' in config) {
        // Es un meta tag
        const selector = config.property 
          ? `meta[property="${config.property}"]` 
          : `meta[name="${config.name}"]`;
        
        let element = document.querySelector(selector);
        
        if (!element) {
          element = document.createElement('meta');
          if (config.property) {
            element.setAttribute('property', config.property);
          } else {
            element.setAttribute('name', config.name);
          }
          document.head.appendChild(element);
        }

        if (element.getAttribute('content') !== config.content) {
          element.setAttribute('content', config.content);
        }
      } else if ('rel' in config) {
        // Es un link
        const selector = `link[rel="${config.rel}"]${config.svgType ? `[type="${config.svgType}"]` : ''}`;
        let element = document.querySelector(selector);
        
        if (!element) {
          element = document.createElement('link');
          element.rel = config.rel;
          if (config.svgType) element.type = config.svgType;
          document.head.appendChild(element);
        }

        if (element.href !== config.href) {
          element.href = config.href;
        }
      }
    });

    // Establecer el atributo lang en el HTML
    document.documentElement.lang = 'es';

  }, [title, description, keywords, url, canonical, image, type]);

  return null;
};

export default Seo;