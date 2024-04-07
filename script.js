
//для меню
document.addEventListener('DOMContentLoaded', function() {
  const headerContainer = document.getElementById('header-container');
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      headerContainer.innerHTML = data;
      // Подключаем скрипт для работы меню
      const menuToggle = headerContainer.querySelector('#toggleMenu');
      const menu = headerContainer.querySelector('#menu');
      menuToggle.addEventListener('click', function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
          menu.style.display = 'block';
        } else {
          menu.style.display = 'none';
        }
      });
    });
});