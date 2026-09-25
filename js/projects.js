(function () {
  const projects = [
    {
      title: 'Orquestador de Microservicios',
      description: 'Migración completa de arquitectura monolítica a microservicios en la nube utilizando contenedores coordinados de manera eficiente.',
      tags: ['#Next.js', '#Docker', '#Go', '#RabbitMQ'],
      deploy: 'Desplegado con Terraform en AWS',
      demo: '#',
      repo: '#',
    },
    {
      title: 'Telemetry Data Platform',
      description: 'Pipeline de analíticas de datos del sistema que consume y procesa telemetría de red a gran escala en tiempo real.',
      tags: ['#React', '#Node.js', '#Kubernetes', '#PostgreSQL'],
      deploy: 'Desplegado con Ansible & AWS ECS',
      demo: '#',
      repo: '#',
    },
    {
      title: 'API Gateway Edge Secure',
      description: 'Servicio de autenticación distribuida seguro que gestiona la autorización global con baja latencia y redundancia geográfica.',
      tags: ['#TypeScript', '#Next.js', '#Redis', '#Cloudflare Workers'],
      deploy: 'Desplegado con Terraform en AWS Route53',
      demo: '#',
      repo: '#',
    },
  ];

  const icons = {
    code:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>',
    cloud:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>',
    github:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    external:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
  };

  const grid = document.getElementById('projectsGrid');

  projects.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    card.innerHTML = `
      <div class="project-card__image">
        ${icons.code}
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__description">${p.description}</p>
        <div class="project-card__tags">
          ${p.tags.map((t) => `<span class="project-card__tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="project-card__footer">
        <div class="tech-badge project-card__deploy">
          ${icons.cloud}
          <span>${p.deploy}</span>
        </div>
        <div class="project-card__links">
          <a href="${p.repo}" class="project-card__link" target="_blank" rel="noopener">
            ${icons.github}
            Repository
          </a>
          <a href="${p.demo}" class="project-card__link" target="_blank" rel="noopener">
            Live Demo
            ${icons.external}
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
})();
