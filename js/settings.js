// options
const pl25 = document.querySelector("#pl-25")
const pl15 = document.querySelector("#pl-15")
const pl10 = document.querySelector("#pl-10")

const sl5 = document.querySelector("#sl-5")
const sl10 = document.querySelector("#sl-10")
const sl15 = document.querySelector("#sl-15")

const lb15 = document.querySelector("#lb-15")
const lb20 = document.querySelector("#lb-20")
const lb30 = document.querySelector("#lb-30")

sl5.addEventListener("click", () => {
	items = document.querySelectorAll(".active-sl");
	for (const e of items) e.classList.remove("active-sl");
	sl5.classList.add("active-sl");
	if (window.localStorage) {
		localStorage.setItem("sbTime", "5:00");
		localStorage.setItem("sbItem", "#sl-5");
	}
})

sl10.addEventListener("click", () => {
	items = document.querySelectorAll(".active-sl");
	for (const e of items) e.classList.remove("active-sl");
	sl10.classList.add("active-sl");
	if (window.localStorage) {
		localStorage.setItem("sbTime", "10:00");
		localStorage.setItem("sbItem", "#sl-10");
	}
})

sl15.addEventListener("click", () => {
	items = document.querySelectorAll(".active-sl");
	for (const e of items) e.classList.remove("active-sl");
	sl15.classList.add("active-sl");
	if (window.localStorage) {
		localStorage.setItem("sbTime", "15:00");
		localStorage.setItem("sbItem", "#sl-15");
	}
})

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

lb15.addEventListener("click", () => {
	items = document.querySelectorAll(".active-lb")
	for (const e of items) e.classList.remove("active-lb")
	lb15.classList.add("active-lb")
	if (window.localStorage) {
		localStorage.setItem("lbTime", "15:00")
		localStorage.setItem("lbItem", "#lb-15")
	}
})


lb20.addEventListener("click", () => {
	let items = document.querySelectorAll(".active-lb")
	for (const e of items) e.classList.remove("active-lb")
	lb20.classList.add("active-lb")
	if (window.localStorage) {
		localStorage.setItem("lbTime", "20:00")
		localStorage.setItem("lbItem", "#lb-20")
	}
})

lb30.addEventListener("click", () => {
	items = document.querySelectorAll(".active-lb") || null
	for (const e of items) e.classList.remove("active-lb")
	lb30.classList.add("active-lb")
	if (window.localStorage) {
		localStorage.setItem("lbTime", "30:00")
		localStorage.setItem("lbItem", "#lb-30")
	}
})
