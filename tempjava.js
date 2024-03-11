const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert");
const resultOutput = document.getElementById("result");

function convertTemperature() {
	// Get the input temperature value and unit
	const temperature = parseFloat(temperatureInput.value);
	const unit = unitSelect.value;

	// Convert the temperature to the other unit
	let convertedTemperature;
	if (unit === "celsius") {
		convertedTemperature = (temperature * 9 / 5) + 32;
		resultOutput.innerHTML = `${temperature} °C = ${convertedTemperature.toFixed(2)} °F`;
	} else if (unit === "fahrenheit") {
		convertedTemperature = (temperature - 32) * 5 / 9;
		resultOutput.innerHTML = `${temperature} °F = ${convertedTemperature.toFixed(2)} °C`;
	}
}

// Add event listener to the convert button
convertButton.addEventListener("click", convertTemperature);