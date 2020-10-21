// options
const pl25 = document.querySelector("#pl-25")
const pl15 = document.querySelector("#pl-15")
const pl10 = document.querySelector("#pl-10")


pl25.addEventListener("click", () => {
	items = document.querySelectorAll(".active-pl")
	for (const e of items) e.classList.remove("active-pl")
	pl25.classList.add("active-pl")
	if (window.localStorage) {
		localStorage.setItem("plTime", "25:00")
		localStorage.setItem("plItem", "#pl-25")
	}
})


pl15.addEventListener("click", () => {
	let items = document.querySelectorAll(".active-pl")
	for (const e of items) e.classList.remove("active-pl")
	pl15.classList.add("active-pl")
	if (window.localStorage) {
		localStorage.setItem("plTime", "15:00")
		localStorage.setItem("plItem", "#pl-15")
	}
})


pl10.addEventListener("click", () => {
	items = document.querySelectorAll(".active-pl") || null
	for (const e of items) e.classList.remove("active-pl")
	pl10.classList.add("active-pl")
	if (window.localStorage) {
		localStorage.setItem("plTime", "10:00")
		localStorage.setItem("plItem", "#pl-10")
	}
})
