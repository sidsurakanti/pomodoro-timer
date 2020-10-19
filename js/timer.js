let display = document.querySelector("#display");
const startButton = document.querySelector("#start-btn");
const resetButton = document.querySelector("#reset-btn");
const resumeButton = document.querySelector("#resume-btn");
const timerAudio = document.querySelector("#pong");
startButton.addEventListener("click", main);

function pomodoro() {
	const startingTime = display.innerHTML.split(":");
	const time = parseInt(startingTime[0]) * 60 + parseInt(startingTime[1]) - 1;

	if (time < 0) {
		const event = new CustomEvent("timer-end");
		display.dispatchEvent(event);
		return;
	}

	const [minutes, seconds] = [Math.floor(time / 60), time % 60];
	display.innerHTML = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

function main() {
	let interval;
	const startTime = display.innerHTML;
	if (!interval) {
		interval = setInterval(pomodoro, 1000);
		startButton.disabled = true;
		resumeButton.disabled = false;
	}

	display.addEventListener("timer-end", () => {
		resumeButton.disabled = true;
		timerAudio.play();
		let audioInterval = setInterval(() => {
			if (timerAudio.currentTime > 10) {
				timerAudio.pause();
				timerAudio.currentTime = 0;
				clearInterval(audioInterval);
			}
		}, 1000);
	});

	resetButton.addEventListener("click", () => {
		if (interval) {
			startButton.disabled = false;
			resumeButton.disabled = true;
			timerAudio.pause();
			timerAudio.currentTime = 0;
			display.innerHTML = startTime;
			clearInterval(interval);
		}
	});

	resumeButton.addEventListener("click", () => {
		if (interval) {
			startButton.disabled = false;
			resumeButton.disabled = true;
			clearInterval(interval);
		}
	});
}
