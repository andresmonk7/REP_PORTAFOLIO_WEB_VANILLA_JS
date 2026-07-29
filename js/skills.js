(function () {
  const groups = [
    {
      title: 'Frontend',
      icon: '⚡',
      items: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Backend & Cloud',
      icon: '☁',
      items: ['Node.js', 'Python', 'SQL', 'AWS', 'Docker'],
    },
  ];

  const grid = document.getElementById('skillsGrid');

  groups.forEach((g) => {
    const group = document.createElement('div');
    group.className = 'skills__group';
    group.innerHTML = `
      <h3 class="skills__group-title">
        <span class="icon">${g.icon}</span>
        ${g.title}
      </h3>
      <div class="skills__items">
        ${g.items.map((s) => `<span class="skill-badge">${s}</span>`).join('')}
      </div>
    `;
    grid.appendChild(group);
  });
})();
