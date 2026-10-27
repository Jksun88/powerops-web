// mobile nav
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  const setOpen = (open) => {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };
  toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
}

// pricing buttons preselect the matching need in the contact form
const need = document.getElementById('need');
document.querySelectorAll('[data-need]').forEach(btn => {
  btn.addEventListener('click', () => { if (need) need.value = btn.dataset.need; });
});

// contact form -> mailto (no data stored on the site)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const v = (id) => document.getElementById(id).value.trim();
    const company = v('company');
    const subject = encodeURIComponent(v('need') + ' — ' + v('name') + (company ? ' (' + company + ')' : ''));
    const body = encodeURIComponent(
      'Nom : ' + v('name') + '\n' +
      'Email : ' + v('email') + '\n' +
      'Organisation : ' + (company || '—') + '\n' +
      'Besoin : ' + v('need') + '\n\n' +
      'Contexte :\n' + v('message')
    );
    window.location.href = 'mailto:contact@poweropstech.com?subject=' + subject + '&body=' + body;
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
