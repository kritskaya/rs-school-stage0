let lang = "en";
let theme = "dark";


function setLocalStorage() {
	localStorage.setItem('lang', lang);
	localStorage.setItem('theme', theme);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
	if (localStorage.getItem('lang')) {
		lang = localStorage.getItem('lang');
		theme = localStorage.getItem('theme');
		
		if (theme === "light") {
			const themeButton = document.querySelector(".switch-theme-link");
			let event = new Event("click", { bubbles: true });
			
			themeButton.dispatchEvent(event);
		}

		if (lang === "ru") {
			const ruButton = document.querySelector(".lng-list-link.ru");
			let event = new Event("click", { bubbles: true });
			
			ruButton.dispatchEvent(event);
		}
	}
}

window.addEventListener('load', getLocalStorage);