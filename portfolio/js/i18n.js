
const langContainer = document.querySelector(".lng-list");
const langItems = document.querySelectorAll(".lng-list-link");
const dateI18nElements = document.querySelectorAll("[data-i18n]");
const menu = document.querySelector(".header-nav");

langContainer.addEventListener("click", translate);

function translate(event) {
	let target = event.target;
	event.preventDefault();

	if (event.target.classList.contains("lng-list-link")) {
		langItems.forEach((elem) => elem.classList.remove("active"));
		target.classList.add("active");

		dateI18nElements.forEach((elem) => {
			let dataValue = elem.getAttribute("data-i18n");
			elem.innerHTML = i18Obj[target.innerHTML][dataValue];
		});

		if (target.innerHTML === "ru") {
			menu.style.marginLeft = "700px";
			menu.style.width = "570px";
		} else {
			menu.style.marginLeft = "780px";
			menu.style.width = "500px";
		}
	}
}

