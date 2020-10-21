// main.js
let timerDisplay = document.querySelector("#display");
let pomodoroTime, timeObj;

if (window.localStorage && localStorage.plTime && localStorage.plItem) {
	pomodoroTime = localStorage.getItem("plTime")
	timeObj = localStorage.getItem("plItem")
}

if (timerDisplay) {
	if (pomodoroTime) timerDisplay.innerHTML = pomodoroTime
	else {
		timerDisplay.innerHTML = "25:00"
		if (window.localStorage) localStorage.setItem("plTime", "25:00")
	}
}

if (timeObj) {
	const activeTimeObj = document.querySelector(timeObj)
	if (activeTimeObj) {
		items = document.querySelectorAll(".active-pl");
		for (const e of items) e.classList.remove("active-pl");
		activeTimeObj.classList.add("active-pl");
	}
}
