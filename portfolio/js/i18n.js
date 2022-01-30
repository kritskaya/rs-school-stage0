
const langContainer = document.querySelector(".lng-list");
const langItems = document.querySelectorAll(".lng-list-link");
const dateI18nElements = document.querySelectorAll("[data-i18n]");

// variable menu is defined in menu.js

langContainer.addEventListener("click", translate);

function translate(event) {
	let target = event.target;
	event.preventDefault();

	if (event.target.classList.contains("lng-list-link")) {
		langItems.forEach((elem) => elem.classList.remove("active"));
		target.classList.add("active");

		dateI18nElements.forEach((elem) => {
			let dataValue = elem.getAttribute("data-i18n");
			if (dataValue !== "contact-phone" && dataValue !== "contact-message") {
				elem.innerHTML = i18Obj[target.innerHTML][dataValue];
			} else {
				elem.setAttribute("placeholder", i18Obj[target.innerHTML][dataValue]);
			}
			
		});

		if (event.target.innerHTML === "en") {
			lang = "en";
		} else {
			lang = "ru";
		}
	}
}

