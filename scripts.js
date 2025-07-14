document.querySelectorAll('button[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.info').forEach(el => el.classList.add('hidden'));
    const sel = btn.getAttribute('data-target');
    document.getElementById(sel).classList.remove('hidden');
    document.getElementById(sel).scrollIntoView({ behavior: 'smooth' });
  });
});
