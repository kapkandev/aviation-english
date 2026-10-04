const questionBank = [
	{
		prompt: "Which part of an aircraft provides lift?",
		options: ["The wings", "The landing gear", "The cabin door", "The tail wheel"],
		answer: 0,
	},
	{
		prompt: "What does a pilot usually do before take-off?",
		options: ["Retracts the landing gear before taxiing", "Checks the weather and aircraft systems", "Opens the cabin doors", "Turns off the navigation system"],
		answer: 1,
	},
	{
		prompt: "What is the main purpose of air traffic control?",
		options: ["To serve food to passengers", "To design aircraft engines", "To coordinate aircraft movement", "To repair the runway"],
		answer: 2,
	},
	{
		prompt: "What is the fuselage?",
		options: ["The main body of an aircraft", "A device for measuring wind", "The aircraft's route", "A type of runway"],
		answer: 0,
	},
	{
		prompt: "A flight is delayed because of severe turbulence. What does this mean?",
		options: ["The aircraft is flying through unsteady air", "The aircraft has reached its destination", "The runway is closed for repairs", "The cabin crew has finished boarding"],
		answer: 0,
	},
	{
		prompt: "Which sentence correctly describes altitude?",
		options: ["The altitude is the aircraft's speed on the runway.", "The altitude is the height of the aircraft above sea level.", "The altitude is the number of passengers on board.", "The altitude is the length of the runway."],
		answer: 1,
	},
	{
		prompt: "The cabin crew ask passengers to fasten their seat belts. When is this especially important?",
		options: ["During take-off and landing", "While booking a ticket", "Before arriving at the airport", "When collecting checked baggage"],
		answer: 0,
	},
	{
		prompt: "What happens during taxiing?",
		options: ["The aircraft moves along the ground", "The aircraft climbs to cruising altitude", "Passengers leave the airport", "The aircraft refuels in the air"],
		answer: 0,
	},
	{
		prompt: "Choose the best completion: The aircraft is cleared ___ the runway.",
		options: ["take off", "to take off", "taking off", "took off"],
		answer: 1,
	},
	{
		prompt: "Which sequence is in the most logical order?",
		options: ["Landing, boarding, taxiing, take-off", "Boarding, taxiing, take-off, landing", "Take-off, boarding, landing, taxiing", "Taxiing, landing, boarding, take-off"],
		answer: 1,
	},
	{
		prompt: "Which instrument helps pilots check their direction?",
		options: ["A compass", "A cabin altimeter", "A fuel pump", "A weather radar screen"],
		answer: 0,
	},
	{
		prompt: "What do aircraft spoilers help do after landing?",
		options: ["Reduce lift and help slow the aircraft", "Increase cabin pressure", "Extend the landing gear", "Navigate around storms"],
		answer: 0,
	},
	{
		prompt: "If an aircraft is described as airworthy, it is...",
		options: ["Ready and safe to fly", "Flying above the clouds", "Carrying no passengers", "Waiting for a new runway"],
		answer: 0,
	},
	{
		prompt: "What information can an aircraft's flight recorders preserve?",
		options: ["Flight data and cockpit audio", "Passenger passport details", "Airport shop sales", "The weather forecast for next week"],
		answer: 0,
	},
	{
		prompt: "Why are flaps extended during take-off or landing?",
		options: ["To increase lift at lower speeds", "To steer the aircraft on the ground", "To open the cargo hold", "To reduce the aircraft's weight"],
		answer: 0,
	},
	{
		prompt: "What should passengers do if oxygen masks drop from the overhead panel?",
		options: ["Put on their own mask before helping others", "Leave the aircraft immediately", "Stand in the aisle", "Open a window"],
		answer: 0,
	},
	{
		prompt: "What does a MAYDAY call communicate?",
		options: ["An urgent distress situation", "A routine boarding announcement", "A request for a new flight number", "A weather update for passengers"],
		answer: 0,
	},
	{
		prompt: "What is cruising altitude?",
		options: ["The altitude maintained during the main part of a flight", "The height of the control tower", "The aircraft's height while parked", "The maximum height of the cabin ceiling"],
		answer: 0,
	},
	{
		prompt: "Why does an aircraft use a transponder?",
		options: ["To send identification and other data to air traffic control", "To measure the temperature of the cabin", "To control the cabin lights", "To guide passengers to their seats"],
		answer: 0,
	},
	{
		prompt: "A tailwind blows...",
		options: ["From behind the aircraft in the direction it is travelling", "Directly down from the clouds", "From the nose toward the tail", "Only across the runway"],
		answer: 0,
	},
	{
		prompt: "Which control surface primarily helps an aircraft turn left or right around its vertical axis?",
		options: ["The rudder", "The elevator", "The wing flap", "The landing gear"],
		answer: 0,
	},
	{
		prompt: "What is the main purpose of an aircraft's landing gear?",
		options: ["To support the aircraft on the ground", "To provide cabin oxygen", "To control the radio frequency", "To measure altitude"],
		answer: 0,
	},
	{
		prompt: "What does a first officer usually do on a flight deck?",
		options: ["Assists the captain and shares flight duties", "Directs passengers to airport security", "Maintains the runway surface", "Loads baggage into the cargo hold"],
		answer: 0,
	},
	{
		prompt: "What is an airport terminal mainly used for?",
		options: ["Passenger check-in, boarding, and arrivals", "Aircraft engine testing", "Air traffic control for the whole region", "Storing fuel in the wings"],
		answer: 0,
	},
	{
		prompt: "What is an aircraft hangar?",
		options: ["A building used to house or maintain aircraft", "A route through controlled airspace", "A passenger waiting area beside a gate", "A signal sent by a transponder"],
		answer: 0,
	},
	{
		prompt: "What does an airspeed indicator measure?",
		options: ["The aircraft's speed through the surrounding air", "The aircraft's distance from the nearest airport", "The number of people on board", "The wind speed at the destination airport only"],
		answer: 0,
	},
	{
		prompt: "What does the term jet lag describe?",
		options: ["Tiredness after travelling across time zones", "A delay caused by engine maintenance", "A sudden change in air pressure", "A long queue at airport security"],
		answer: 0,
	},
	{
		prompt: "What is a flight plan?",
		options: ["A planned route and operational details for a flight", "A map of seats inside the cabin", "A schedule for airport shops", "A list of aircraft parts to replace"],
		answer: 0,
	},
	{
		prompt: "When are flaps commonly used?",
		options: ["During take-off and landing", "Only while the aircraft is parked overnight", "Only when the cabin doors are open", "While passengers collect their baggage"],
		answer: 0,
	},
	{
		prompt: "In radio communication, what does “Stand by” mean?",
		options: ["Wait and be ready for further instructions", "End the flight immediately", "Change to a different runway", "Confirm that boarding is complete"],
		answer: 0,
	},
];

let questions = [];
const studentForm = document.querySelector("#student-form");
const quizForm = document.querySelector("#quiz-form");
const resultsPanel = document.querySelector("#results-panel");
const questionText = document.querySelector("#question-text");
const answerOptions = document.querySelector("#answer-options");
const questionCounter = document.querySelector("#question-counter");
const progressLabel = document.querySelector("#quiz-progress-label");
const progressBar = document.querySelector("#quiz-progress");
const progressTrack = document.querySelector(".progress-track");
const previousButton = document.querySelector("#previous-question");
const nextButton = document.querySelector("#next-question");
let currentQuestion = 0;
let answers = [];
let student = {};

function renderQuestion() {
	const question = questions[currentQuestion];
	const progress = Math.round((currentQuestion / questions.length) * 100);

	questionCounter.textContent = `QUESTION ${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;
	progressLabel.textContent = `${progress}% COMPLETE`;
	progressBar.style.width = `${progress}%`;
	progressTrack.setAttribute("aria-valuenow", String(currentQuestion));
	questionText.textContent = question.prompt;
	answerOptions.replaceChildren();

	question.options.forEach((option, optionIndex) => {
		const label = document.createElement("label");
		label.className = "answer-option";

		const input = document.createElement("input");
		input.type = "radio";
		input.name = "answer";
		input.value = String(optionIndex);
		input.checked = answers[currentQuestion] === optionIndex;
		input.disabled = answers[currentQuestion] !== undefined;
		if (input.checked) {
			label.classList.add(optionIndex === question.answer ? "is-correct" : "is-incorrect");
		}
		input.addEventListener("change", () => {
			if (answers[currentQuestion] !== undefined) return;
			answers[currentQuestion] = optionIndex;
			Array.from(answerOptions.children).forEach((option, selectedIndex) => {
				option.classList.toggle("is-correct", selectedIndex === optionIndex && optionIndex === question.answer);
				option.classList.toggle("is-incorrect", selectedIndex === optionIndex && optionIndex !== question.answer);
			});
			answerOptions.querySelectorAll("input").forEach((answerInput) => {
				answerInput.disabled = true;
			});
			nextButton.disabled = false;
		});

		const text = document.createElement("span");
		text.textContent = option;
		label.append(input, text);
		answerOptions.append(label);
	});

	previousButton.disabled = currentQuestion === 0;
	nextButton.disabled = answers[currentQuestion] === undefined;
	nextButton.innerHTML = currentQuestion === questions.length - 1
		? 'Finish test <span aria-hidden="true">✓</span>'
		: 'Next question <span aria-hidden="true">→</span>';
}

function finishTest() {
	const correct = answers.reduce((total, answer, index) => total + Number(answer === questions[index].answer), 0);
	const errors = questions.length - correct;
	const name = `${student.firstName} ${student.lastName}`;

	document.querySelector("#correct-count").textContent = String(correct);
	document.querySelector("#error-count").textContent = String(errors);
	document.querySelector("#results-student").textContent = `${name} · Group ${student.group}`;
	document.querySelector("#results-message").textContent = correct >= 8
		? "Excellent work. Your aviation knowledge is cleared for take-off."
		: correct >= 5
			? "Good progress. Review the vocabulary and listening passage, then try again."
			: "Keep practising. Revisit the learning sections and give it another try.";

	quizForm.hidden = true;
	resultsPanel.hidden = false;
	resultsPanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function randomIndexBelow(upperBound) {
	if (!window.crypto?.getRandomValues) return Math.floor(Math.random() * upperBound);

	const uint32Range = 0x100000000;
	const rejectionLimit = Math.floor(uint32Range / upperBound) * upperBound;
	const randomValue = new Uint32Array(1);
	do {
		window.crypto.getRandomValues(randomValue);
	} while (randomValue[0] >= rejectionLimit);

	return randomValue[0] % upperBound;
}

studentForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const formData = new FormData(studentForm);
	student = {
		firstName: String(formData.get("firstName")).trim(),
		lastName: String(formData.get("lastName")).trim(),
		group: String(formData.get("group")).trim(),
	};
	if (Object.values(student).some((value) => value.length === 0)) return;

	questions = questionBank.slice();
	for (let index = questions.length - 1; index > 0; index -= 1) {
		const randomIndex = randomIndexBelow(index + 1);
		[questions[index], questions[randomIndex]] = [questions[randomIndex], questions[index]];
	}
	questions = questions.slice(0, 10);
	currentQuestion = 0;
	answers = [];
	studentForm.hidden = true;
	resultsPanel.hidden = true;
	quizForm.hidden = false;
	renderQuestion();
	quizForm.scrollIntoView({ behavior: "smooth", block: "center" });
});

previousButton.addEventListener("click", () => {
	if (currentQuestion === 0) return;
	currentQuestion -= 1;
	renderQuestion();
});

nextButton.addEventListener("click", () => {
	if (answers[currentQuestion] === undefined) return;
	if (currentQuestion === questions.length - 1) {
		finishTest();
		return;
	}
	currentQuestion += 1;
	renderQuestion();
});

document.querySelector("#retake-test").addEventListener("click", () => {
	resultsPanel.hidden = true;
	studentForm.hidden = false;
	studentForm.reset();
	studentForm.scrollIntoView({ behavior: "smooth", block: "center" });
});

const listeningText = document.querySelector("#listening-transcript").textContent.trim();
const speechButton = document.querySelector("#listen-play");
const speechStatus = document.querySelector("#speech-status");
const soundWave = document.querySelector(".sound-wave");

speechButton.addEventListener("click", () => {
	if (!("speechSynthesis" in window)) {
		speechStatus.textContent = "Text-to-speech is not supported in this browser.";
		return;
	}

	if (window.speechSynthesis.speaking) {
		if (window.speechSynthesis.paused) {
			window.speechSynthesis.resume();
			speechStatus.textContent = "Playing listening passage";
			speechButton.setAttribute("aria-label", "Pause listening passage");
			speechButton.querySelector("span").textContent = "Ⅱ";
			soundWave.classList.add("is-playing");
		} else {
			window.speechSynthesis.pause();
			speechStatus.textContent = "Listening paused";
			speechButton.setAttribute("aria-label", "Resume listening passage");
			speechButton.querySelector("span").textContent = "▶";
			soundWave.classList.remove("is-playing");
		}
		return;
	}

	const utterance = new SpeechSynthesisUtterance(listeningText);
	utterance.lang = "en-GB";
	utterance.rate = Number(document.querySelector("#speech-rate").value);
	utterance.onstart = () => {
		speechStatus.textContent = "Playing listening passage";
		speechButton.setAttribute("aria-label", "Pause listening passage");
		speechButton.querySelector("span").textContent = "Ⅱ";
		soundWave.classList.add("is-playing");
	};
	utterance.onend = () => {
		speechStatus.textContent = "Listening complete";
		speechButton.setAttribute("aria-label", "Play listening passage");
		speechButton.querySelector("span").textContent = "▶";
		soundWave.classList.remove("is-playing");
	};
	utterance.onerror = () => {
		speechStatus.textContent = "Audio playback is unavailable. Read the transcript instead.";
		speechButton.setAttribute("aria-label", "Play listening passage");
		speechButton.querySelector("span").textContent = "▶";
		soundWave.classList.remove("is-playing");
	};
	window.speechSynthesis.cancel();
	window.speechSynthesis.speak(utterance);
});

document.querySelector("#listen-stop").addEventListener("click", () => {
	if ("speechSynthesis" in window) window.speechSynthesis.cancel();
	speechStatus.textContent = "Listen to the briefing";
	speechButton.setAttribute("aria-label", "Play listening passage");
	speechButton.querySelector("span").textContent = "▶";
	soundWave.classList.remove("is-playing");
});

const preloader = document.querySelector("#preloader");
let preloaderDismissed = false;
const preloaderStartedAt = performance.now();

function dismissPreloader() {
	if (preloaderDismissed) return;
	preloaderDismissed = true;
	const remainingTime = Math.max(0, 1100 - (performance.now() - preloaderStartedAt));
	window.setTimeout(() => {
		preloader.classList.add("is-leaving");
		window.setTimeout(() => preloader.remove(), 850);
	}, remainingTime);
}

window.addEventListener("load", dismissPreloader, { once: true });
window.setTimeout(dismissPreloader, 3500);

const videoCarousel = document.querySelector("#video-carousel");
const videoSlides = Array.from(videoCarousel.querySelectorAll(".video-slide"));
const videoPosition = document.querySelector("#video-position");
const previousVideoButton = document.querySelector("#previous-video");
const nextVideoButton = document.querySelector("#next-video");
let activeVideoIndex = 0;
let carouselScrollFrame;

function updateActiveVideo(index) {
	activeVideoIndex = Math.max(0, Math.min(index, videoSlides.length - 1));
	videoPosition.textContent = `${String(activeVideoIndex + 1).padStart(2, "0")} / ${String(videoSlides.length).padStart(2, "0")}`;
	previousVideoButton.disabled = activeVideoIndex === 0;
	nextVideoButton.disabled = activeVideoIndex === videoSlides.length - 1;
}

function goToVideo(index) {
	const nextIndex = Math.max(0, Math.min(index, videoSlides.length - 1));
	videoCarousel.scrollTo({
		left: videoSlides[nextIndex].offsetLeft - videoCarousel.offsetLeft,
		behavior: "smooth",
	});
	updateActiveVideo(nextIndex);
}

videoSlides.forEach((slide, index) => {
	slide.querySelector("video").addEventListener("ended", () => {
		if (index < videoSlides.length - 1) goToVideo(index + 1);
	});
});

videoCarousel.addEventListener("scroll", () => {
	window.cancelAnimationFrame(carouselScrollFrame);
	carouselScrollFrame = window.requestAnimationFrame(() => {
		const carouselLeft = videoCarousel.getBoundingClientRect().left;
		const nearestIndex = videoSlides.reduce((nearest, slide, index) => {
			const distance = Math.abs(slide.getBoundingClientRect().left - carouselLeft);
			return distance < nearest.distance ? { index, distance } : nearest;
		}, { index: 0, distance: Infinity }).index;
		updateActiveVideo(nearestIndex);
	});
});

previousVideoButton.addEventListener("click", () => goToVideo(activeVideoIndex - 1));
nextVideoButton.addEventListener("click", () => goToVideo(activeVideoIndex + 1));
