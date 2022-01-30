const themeElements = [
	'body',
	'a',
	'.btn',
	'.section-title-line',
	'.section-title h2',
	'.header-logo-img',
	'.header-nav',
	'.switch-theme-img',
	'.hero-container',
	'.contacts',
	'.contacts-title',
	'input',
	'textarea',
];

const switchThemeBtn = document.querySelector(".switch-theme-link");
const switchThemeImg = document.querySelector(".switch-theme-img");

switchThemeBtn.addEventListener("click", switchTheme); 

function switchTheme (event) {
	event.preventDefault();

	if (switchThemeImg.src.indexOf("light") > -1) {
		switchThemeImg.src = "./assets/svg/dark.svg";
		theme = "light";
	} else {
		switchThemeImg.src = "./assets/svg/light.svg";
		theme = "dark";
	}

	for(let i = 0; i < themeElements.length; i++) {
		let elems = document.querySelectorAll(themeElements[i]);

		elems.forEach((elem) => {
			elem.classList.toggle("light-theme");
		});
	}
}