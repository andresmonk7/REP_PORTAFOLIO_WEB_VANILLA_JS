(function () {
  const projects = [
    {
      title: 'Plataforma E-commerce',
      description: 'Aplicación web completa con carrito de compras, pasarela de pago y panel de administración.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      demo: '#',
      repo: '#',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo con visualización de datos en tiempo real y reportes exportables.',
      tags: ['Vue.js', 'Python', 'AWS', 'D3.js'],
      demo: '#',
      repo: '#',
    },
    {
      title: 'API Gateway Service',
      description: 'Microservicio de autenticación y autorización con JWT, OAuth y rate limiting.',
      tags: ['Node.js', 'Redis', 'Docker', 'Nginx'],
      demo: '#',
      repo: '#',
    },
  ];

  const grid = document.getElementById('projectsGrid');

  projects.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    card.innerHTML = `
      <div class="project-card__image">🖼 preview</div>
      <div class="project-card__body">
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__description">${p.description}</p>
        <div class="project-card__tags">
          ${p.tags.map((t) => `<span class="project-card__tag">${t}</span>`).join('')}
        </div>
        <div class="project-card__links">
          <a href="${p.demo}" class="project-card__link" target="_blank" rel="noopener">🔗 Demo</a>
          <a href="${p.repo}" class="project-card__link" target="_blank" rel="noopener">🐙 Repo</a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
})();
