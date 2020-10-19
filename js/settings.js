// modal
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});

overlay.addEventListener("click", () => {
	const modals = document.querySelectorAll(".modal.active");
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

closeModalButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = button.closest(".modal");
		closeModal(modal);
	});
});

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add("active");
	overlay.classList.add("active");
}

function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove("active");
	overlay.classList.remove("active");
}

// options
const pl25 = document.querySelector("#pl-25");
const pl15 = document.querySelector("#pl-15");
const pl10 = document.querySelector("#pl-10");
const timerDisplay = document.querySelector("#display");

pl25.addEventListener("click", () => {
	f = document.querySelectorAll(".active-pl");
	for (const e of f) {
		e.classList.remove('active-pl')
	}
	pl25.classList.add("active-pl");
	if (timerDisplay) {
		timerDisplay.innerHTML = "25:00";
	}
});

pl15.addEventListener("click", () => {
	f = document.querySelectorAll(".active-pl");
	for (const e of f) {
		e.classList.remove("active-pl");
	}
	pl15.classList.add("active-pl");
	if (timerDisplay) {
		timerDisplay.innerHTML = "15:00";
	}
});

pl10.addEventListener("click", () => {
	f = document.querySelectorAll(".active-pl");
	for (const e of f) {
		e.classList.remove("active-pl");
	}
	pl10.classList.add("active-pl");
	if (timerDisplay) {
		timerDisplay.innerHTML = "10:00";
	}
});
