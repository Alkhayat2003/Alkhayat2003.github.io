function toggleDarkMode() {
  const body = document.getElementById('body');
  body.classList.toggle('dark-mode');

  const icon = document.querySelector('#theme-toggle i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}