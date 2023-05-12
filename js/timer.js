class Timer {
	constructor(display, start_btn, stop_btn, reset_btn, timer_end_sound) {
		this.display = display;
		this.start_btn = start_btn;
		this.stop_btn = stop_btn;
		this.reset_btn = reset_btn;
		this.timer_end_sound = timer_end_sound;
		this.pomodoro_number = 0;
		this.on_break = false;
		this.paused = false;
		this.audio_timeout;
	}

	// creates a new event and dispatch it
	static new_event(event_name, object) {
		const evnt = new CustomEvent(event_name);
		object.dispatchEvent(evnt);
		return;
	}

	// plays timer-end music for a certain amount of time
	play_sound(seconds) {
		timer_end_sound.play();
		this.audio_timeout = setTimeout(() => {
			timer_end_sound.pause();
			timer_end_sound.currentTime = 0;
		}, seconds * 1000);
		return;
	}

	pause_audio() {
		if (this.audio_timeout) clearTimeout(this.audio_timeout);
		timer_end_sound.pause();
		timer_end_sound.currentTime = 0;
	}

	// resets the timer display to the pomodoro length which is default to 25 minutes
	reset_display() {
		this.display.innerHTML = localStorage.getItem("plTime");
		return;
	}

	timer(end_event_name = "end") {
		const [prev_minutes, prev_seconds] = this.display.innerHTML.split(":").map((ele) => parseInt(ele));
		const total_seconds = prev_minutes * 60 + prev_seconds - 1;

		if (total_seconds < 0) {
			Timer.new_event(end_event_name, this.display);
			return;
		}

		const [current_minutes, current_seconds] = [Math.floor(total_seconds / 60), total_seconds % 60,];
		this.display.innerHTML = `${current_minutes}:${current_seconds > 9 ? current_seconds : "0" + current_seconds}`;
		return;
	}

	run() {
		let interval;

		this.start_btn.addEventListener("click", () => {
			// enables the start button and disables the stop button
			this.start_btn.disabled = true;
			this.stop_btn.disabled = false;

			// starts the pomodoro if the use currently isn't on break
			if (this.on_break == false) {
				this.pause_audio()

				if (this.paused == false) this.reset_display();
				interval = setInterval(() => this.timer(), 1000);
				console.log("pomodoro started");
			}

			// starts the break timer if the user is currently on break
			if (this.on_break == true) {
				this.pause_audio()

				// starts break timer
				interval = setInterval(() => this.timer("break-end"), 1000);
				console.log("break started");
			}

			this.display.addEventListener("end", () => {
				// disables the start button and enables the stop button
				this.start_btn.disabled = false;
				this.stop_btn.disabled = true;

				// stops the timer and increments the number of finished pomodoro cycles by 1
				clearInterval(interval);
				this.pomodoro_number++;
				this.on_break = true;

				// small break if the number of finished pomodoro cycles is less than 4
				if (this.pomodoro_number < 4)
					this.display.innerHTML = localStorage.getItem("sbTime");
				// long break if the number of cycles is greater than or equal to 4
				else {
					this.display.innerHTML = localStorage.getItem("lbTime");
					this.pomodoro_number = 0;
				}

				// logs that the break ended and plays the timer end sound
				console.log("pomodoro ended");
				this.play_sound(10);
			});

			this.display.addEventListener("break-end", () => {
				// disables the start button and enables the stop button
				this.start_btn.disabled = false;
				this.stop_btn.disabled = true;

				// stop the timer and resets the timer display
				clearInterval(interval);
				this.on_break = false;
				this.reset_display();

				// logs that the break ended and plays the timer end sound
				this.play_sound(10);
				console.log("break ended");
			});
		});

		this.reset_btn.addEventListener("click", () => {
			// disables the start button and enables the stop button
			this.start_btn.disabled = false;
			this.stop_btn.disabled = true;

			// stops the timer and resets the number of pomodoro cyles
			clearInterval(interval);
			this.reset_display();
			this.on_break = false;
			this.pomodoro_number = 0;

			// pauses audio and resets the current time of the audio
			this.pause_audio()

			console.log("timer reset");
		});

		this.stop_btn.addEventListener("click", () => {
			// disables the stop button and enables the start button
			this.stop_btn.disabled = true;
			this.start_btn.disabled = false;

			this.paused = true;

			// pauses the timer and logs that the timer is paused
			clearInterval(interval);
			console.log("timer paused");
		});
	}
}

const display = document.querySelector("#display");
const start_btn = document.querySelector("#start-btn");
const stop_btn = document.querySelector("#resume-btn");
const reset_btn = document.querySelector("#reset-btn");
const timer_end_sound = document.querySelector("#pong");

timer = new Timer(display, start_btn, stop_btn, reset_btn, timer_end_sound);
timer.run();
