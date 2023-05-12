let timerDisplay = document.querySelector("#display");
let pomodoroTime, timeObj;
let smallBreakTime, smallBreakObj;
let longBreakTime, longBreakObj;

if (window.localStorage && localStorage.plTime && localStorage.plItem) {
	pomodoroTime = localStorage.getItem("plTime");
	timeObj = localStorage.getItem("plItem");
}

if (window.localStorage && localStorage.sbTime && localStorage.sbItem) {
	[smallBreakTime, smallBreakObj] = [
		localStorage.getItem("sbTime"),
		localStorage.getItem("sbItem"),
	];
} else {
	localStorage.setItem("sbTime", "5:00");
	localStorage.setItem("sbItem", "#sb-5");
}

if (window.localStorage && localStorage.lbTime && localStorage.lbItem) {
	[longBreakTime, longBreakObj] = [
		localStorage.getItem("lbTime"),
		localStorage.getItem("lbItem"),
	];
} else {
	localStorage.setItem("lbTime", "15:00");
	localStorage.setItem("lbItem", "#ll-15");
}
if (timerDisplay) {
	if (pomodoroTime) timerDisplay.innerHTML = pomodoroTime;
	else {
		timerDisplay.innerHTML = "25:00";
		if (window.localStorage) localStorage.setItem("plTime", "25:00");
	}
}

if (timeObj) {
	const activeObj = document.querySelector(timeObj);
	if (activeObj) {
		const items = document.querySelectorAll(".active-pl");
		for (const e of items) e.classList.remove("active-pl");
		activeObj.classList.add("active-pl");
	}
}

if (smallBreakObj) {
	const activeObj = document.querySelector(smallBreakObj);
	if (activeObj) {
		const items = document.querySelectorAll(".active-sl");
		for (const e of items) e.classList.remove("active-sl");
		activeObj.classList.add("active-sl");
	}
}

if (longBreakObj) {
	const activeObj = document.querySelector(longBreakObj);
	if (activeObj) {
		const items = document.querySelectorAll(".active-lb");
		for (const e of items) e.classList.remove("active-lb");
		activeObj.classList.add("active-lb");
	}
}
