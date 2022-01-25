const themeElements = [
	'body',
	'a',
	'.btn',
	'.section-title-line',
	'.section-title h2',
	'.header-logo-img',
	'.switch-theme-img',
	'.hero-container',
	'.contacts',
	'.contacts-title',
	'input',
	'textarea',
];

const switchThemeBtn = document.querySelector(".switch-theme-link");

switchThemeBtn.addEventListener("click", () => {
	for(let i = 0; i < themeElements.length; i++) {
		let elems = document.querySelectorAll(themeElements[i]);

		elems.forEach((elem) => {
			elem.classList.toggle("light-theme");
		})
	}
})