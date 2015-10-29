// STRUCTURE
	var leftInput = document.querySelector('.left-input');
	var rightInput = document.querySelector('.right-input');

	var leftBody = document.querySelector('.left');
	var rightBody = document.querySelector('.right');

// EVENTS
	leftInput.addEventListener('keyup', farenheitToCelsius);
	rightInput.addEventListener('keyup', celsiusToFarenheit);

	leftInput.addEventListener('keyup', changeColor);

// EVENT HANDLER FUNCTIONS

	function farenheitToCelsius(event){
		// Farenheit to Celsius
		var FtoC = (parseInt(leftInput.value)) - 32 * 5/9;
		rightInput.value = Math.round(FtoC);
	}

	function celsiusToFarenheit(){
		// Celsius to Farenheit
		var CtoF = (rightInput.value * 9/5) + 32;
		leftInput.value = Math.round(CtoF);
	}

	function changeColor(event){
			if (leftInput.value < 32){
				leftBody.classList.add('cold');
				rightBody.classList.add('cold-animation');
			} else if (leftInput.value > 32 && leftInput.value < 212){
				leftBody.classList.add('warm');
				rightBody.classList.add('warm-animation');
			} else {
				leftBody.classList.add('hot');
				rightBody.classList.add('hot-animation');
			}
	}