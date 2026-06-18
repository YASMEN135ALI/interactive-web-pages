const toggleBtn = document.getElementById('toggleThemeBtn');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}
