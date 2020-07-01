const dropdown = document.querySelector('.navbar__dropdown');

dropdown.addEventListener('click', function allDropdown() {
  document.querySelector(".dropdown").classList.toggle("opened");

  const active = document.querySelector('.navbar__dropdown');
  active.classList.toggle('active');
});
