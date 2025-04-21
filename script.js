let inputCelsius = document.querySelector('#celsius');
let inputFahrenheit = document.querySelector('#fahrenheit');
let inputKelvin = document.querySelector('#kelvin');
let btn = document.querySelector('#reset');

let tempC;
let tempF;
let tempK;

function celsiusToFahrenheitAndKelvin(c) {
    tempF = (c * 9 / 5) + 32;
    tempK = (c + 273.15);
}

function fahrenheitToCelsiusAndKelvin(f) {
    tempC = (f - 32) * 5 / 9;
    tempK = (f - 32) * 5 / 9 + 273.15;
}


function showCelsiusToOther() {
    let showCelsius = parseFloat(inputCelsius.value);
    celsiusToFahrenheitAndKelvin(showCelsius);
    document.querySelector('#fahrenheit').value = tempF;
    document.querySelector('#kelvin').value = tempK;
}


function showFahrenheitToOther() {
    let showFahrenheit = parseFloat(inputFahrenheit.value);
    fahrenheitToCelsiusAndKelvin(showFahrenheit);
    document.querySelector('#celsius').value = tempC;
    document.querySelector('#kelvin').value = tempK;
}


