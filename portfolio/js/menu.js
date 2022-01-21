const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelectorAll('.hamburger span');
const menu = document.querySelector('.header-nav');

hamburger.addEventListener('click', () =>  {
	menu.classList.toggle('open');
	hamburgerLine.forEach((el) => {
		el.classList.toggle('close-btn');
	});
});


const navLinks = document.querySelectorAll('.nav-list-link');
navLinks.forEach((el) => el.addEventListener('click', () => {
		menu.classList.remove('open');
		hamburgerLine.forEach((el) => {
			el.classList.toggle('close-btn');
		});
	})
);

