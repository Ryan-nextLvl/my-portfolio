// ── Binary Rain ─────────────────────────────────────────────────
(function () {
  const canvas = document.getElementById('binary-canvas');
  const ctx = canvas.getContext('2d');
  const FONT_SIZE = 14;
  let drops = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const cols = Math.floor(canvas.width / FONT_SIZE);
    drops = Array.from({ length: cols }, () => Math.random() * -100);
  }

  function draw() {
    ctx.fillStyle = 'rgba(10,10,10,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drops.forEach((y, i) => {
      const char = Math.random() > 0.5 ? '1' : '0';
      const isHead = Math.random() > 0.92;
      ctx.fillStyle = isHead ? '#00FF41' : '#00CC33';
      ctx.font = `${FONT_SIZE}px "Fira Code", monospace`;
      ctx.fillText(char, i * FONT_SIZE, y * FONT_SIZE);
      if (y * FONT_SIZE > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i] += 0.5;
    });
  }

  resize();
  window.addEventListener('resize', resize);
  setInterval(draw, 50);
})();

// ── Typing Effect ────────────────────────────────────────────────
(function () {
  const el = document.getElementById('typing-text');
  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const phrase = TYPING_PHRASES[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % TYPING_PHRASES.length; }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
})();

// ── Render Projects ──────────────────────────────────────────────
(function () {
  const grid = document.getElementById('project-grid');

  PROJECTS.forEach((p, idx) => {
    const visits = parseInt(localStorage.getItem(`visits_${p.id}`) || '0');

    const badge = p.destaque
      ? `<span class="text-xs border border-hacker-neon text-hacker-neon px-2 py-0.5 rounded">★ destaque</span>`
      : '';

    const tags = p.tecnologias.map(t =>
      `<span class="text-xs bg-hacker-border text-hacker-bin px-2 py-0.5 rounded">${t}</span>`
    ).join('');

    const card = document.createElement('div');
    card.className = [
      'card-hover border border-hacker-border bg-hacker-card rounded-lg p-6 flex flex-col gap-4',
      'animate-fadeIn',
    ].join(' ');
    card.style.animationDelay = `${idx * 80}ms`;

    card.innerHTML = `
      <div class="flex items-start justify-between gap-2">
        <h4 class="text-hacker-neon font-semibold text-base leading-snug">${p.nome}</h4>
        ${badge}
      </div>
      <p class="text-hacker-green text-sm leading-relaxed flex-1">${p.descricao}</p>
      <div class="flex flex-wrap gap-2">${tags}</div>
      <div class="flex items-center justify-between mt-auto pt-2 border-t border-hacker-border">
        <span class="text-hacker-dim text-xs" id="visit-${p.id}">
          <i class="fas fa-eye mr-1"></i>${visits} visitas
        </span>
        <a href="${p.url}" target="_blank" rel="noopener noreferrer"
           data-id="${p.id}"
           class="visit-btn text-xs border border-hacker-neon text-hacker-neon px-4 py-1.5 rounded hover:bg-hacker-neon hover:text-hacker-black transition-all duration-300">
          ACESSAR →
        </a>
      </div>`;

    grid.appendChild(card);
  });

  // visit counter via localStorage
  document.querySelectorAll('.visit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id  = btn.dataset.id;
      const key = `visits_${id}`;
      const n   = parseInt(localStorage.getItem(key) || '0') + 1;
      localStorage.setItem(key, n);
      const el = document.getElementById(`visit-${id}`);
      if (el) el.innerHTML = `<i class="fas fa-eye mr-1"></i>${n} visitas`;
    });
  });
})();

// ── Render Timeline ──────────────────────────────────────────────
(function () {
  const list = document.getElementById('timeline-list');

  // vertical neon line
  const line = document.createElement('div');
  line.className = 'timeline-line absolute left-0 top-0 w-px h-full';
  list.appendChild(line);

  TIMELINE.forEach((item, idx) => {
    const entry = document.createElement('div');
    entry.className = 'relative mb-10 pl-6 animate-fadeIn';
    entry.style.animationDelay = `${idx * 120}ms`;
    entry.innerHTML = `
      <div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-hacker-neon shadow-neon-sm"></div>
      <span class="text-hacker-bin text-xs tracking-widest">${item.ano}</span>
      <h4 class="text-hacker-neon font-semibold mt-1">${item.titulo}</h4>
      <p class="text-hacker-dim text-xs mb-1">${item.local}</p>
      <p class="text-hacker-green text-sm leading-relaxed">${item.descricao}</p>`;
    list.appendChild(entry);
  });
})();

// ── Footer year ──────────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();
