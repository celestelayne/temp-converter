// STRUCTURE
	var form = document.querySelectorAll('form');

	var leftInput = document.querySelector('.left-input');
	var rightInput = document.querySelector('.right-input');

	var leftBody = document.querySelector('.left');
	var rightBody = document.querySelector('.right');

// EVENTS
	leftInput.addEventListener('keyup', calcFarenheitToCelsius);
	rightInput.addEventListener('keyup', calcCelsiusToFarenheit);

	leftInput.addEventListener('keyup', changeRightColor);
	rightInput.addEventListener('keyup', changeLeftColor);

// EVENT HANDLER FUNCTIONS

	function calcFarenheitToCelsius(event){
		event.preventDefault();
		// Farenheit to Celsius
		// console.log(event) <- keyboard event
		var FtoC = (leftInput.value - 32) * (5/9);
		rightInput.value = Math.round(FtoC);
		var celsius = rightInput.value;
	}


	function calcCelsiusToFarenheit(event){
		event.preventDefault();
		// Celsius to Farenheit
		var CtoF = (rightInput.value * (9/5)) + 32;
		leftInput.value = Math.round(CtoF);
		var farenheit = leftInput.value;
		// console.log(farenheit);
	}

	function changeRightColor(farenheit){
		console.log(event.target.value);
			if (event.target.value <= 32){
				leftBody.classList.add('cold');
				rightBody.classList.add('cold-animation');
			} else {
				setTimeout(function() {
					rightBody.classList.remove('cold-animation');
				}), 400} if (event.target.value > 32 && event.target.value <= 212){
				leftBody.classList.add('warm');
				rightBody.classList.add('warm-animation');
			} else {
				setTimeout(function() {
					rightBody.classList.remove('warm-animation');
				}), 400} if (event.target.value > 212){
				leftBody.classList.add('hot');
				rightBody.classList.add('hot-animation');
			} else {
				setTimeout(function() {
					rightBody.classList.remove('hot-animation');
				}), 400}
	}

	function changeLeftColor(celsius) {

		console.log(celsius);
		if (event.target.value <= 0) {
			rightBody.classList.add('cold');
			leftBody.classList.add('cold-animation');
		} else if (event.target.value > 0 && event.target.value < 30){
			rightBody.classList.add('warm');
			leftBody.classList.add('warm-animation');
		} else if (event.target.value >= 100){
			rightBody.classList.add('hot');
			leftBody.classList.add('hot-animation');
		}
	}