# andres_dev — Portafolio Web Personal

Portafolio web personal de **Andrés**, desarrollador full stack en evolución constante hacia la arquitectura de nube.

## Stack

- HTML5 semántico
- CSS vanilla (modular por sección + variables CSS)
- JavaScript vanilla (ES6+)
- Dark/Light mode

## Secciones

- **Hero** — Presentación con terminal mockup
- **Sobre mí** — Experiencia y estadísticas
- **Skills** — Frontend · Backend & Cloud
- **Proyectos** — Grid de proyectos destacados
- **Contacto** — Email, LinkedIn, GitHub

## Personalizar

### Proyectos

Editar `js/projects.js`:

```js
{
  title: 'Nombre del proyecto',
  description: 'Descripción corta',
  tags: ['React', 'Node.js'],
  demo: 'https://...',
  repo: 'https://github.com/...',
}
```

### Skills

Editar `js/skills.js` para agregar/quitar tecnologías.

### CV

Colocar el archivo PDF en `assets/cv.pdf`.

### Colores

Las variables CSS están en `css/variables.css`. Soporta tema oscuro y claro.

## Uso

Abrir `index.html` en el navegador — no requiere build step ni dependencias.

## Licencia

MIT
