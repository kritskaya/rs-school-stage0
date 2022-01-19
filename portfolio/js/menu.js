const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.header-nav');
humburger.addEventListener('click', () => menu.classList.toggle('open'));

const closeButton = document.querySelector('.close-menu-btn');
closeButton.addEventListener('click', () => menu.classList.remove('open'));

const navLinks = document.querySelectorAll('.nav-list-link');
navLinks.forEach((el) => el.addEventListener('click', () => menu.classList.remove('open')));

