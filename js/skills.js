(function () {
  const groups = [
    {
      title: 'Desarrollo Backend & Frontend',
      icon: 'code-xml',
      items: ['Angular', 'Node.js', 'TypeScript', 'c#', 'SQL'],
    },
    {
      title: 'Cloud & Infraestructura',
      icon: 'cloud-upload',
      items: ['AWS', 'Terraform', 'Github-Actions', 'Docker', 'Kubernetes'],
    },
  ];

  const icons = {
    'code-xml':
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    'cloud-upload':
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m16 16-4-4-4 4"></path></svg>',
  };

  const grid = document.getElementById('skillsGrid');

  groups.forEach((g) => {
    const group = document.createElement('div');
    group.className = 'skills__group';
    group.innerHTML = `
      <div class="skills__group-header">
        ${icons[g.icon] || ''}
        <h3 class="skills__group-title">${g.title}</h3>
      </div>
      <div class="skills__group-tags">
        ${g.items.map((s) => `<span class="tech-badge">${s}</span>`).join('')}
      </div>
    `;
    grid.appendChild(group);
  });
})();
