const inputCelsius = document.querySelector('#celsius');
const inputFahrenheit = document.querySelector('#fahrenheit');
const inputKelvin = document.querySelector('#kelvin');
const btn = document.querySelector('#reset');
const themeButton = document.querySelector('#theme');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
});
/* round to 2 decimal places */
function formatTemp(value) {
    return value.toFixed(2); 
}
/* Celsius to Fahrenheit and Kelvin */
inputCelsius.addEventListener('input', function () {
    let tempC = parseFloat(inputCelsius.value);
    if (isNaN(tempC)) {
        inputFahrenheit.value = "";
        inputKelvin.value = "";
        return;
    }
    let tempF = (tempC * (9 / 5)) + 32;
    let tempK = tempC + 273.15;
    inputFahrenheit.value = formatTemp(tempF);
    inputKelvin.value = formatTemp(tempK);
});

/* Fahrenheit to Celsius and Kelvin */
inputFahrenheit.addEventListener('input', function () {
    let tempF = parseFloat(inputFahrenheit.value);
    if (isNaN(tempF)) {
        inputCelsius.value = "";
        inputKelvin.value = "";
        return;
    }
    let tempC = (tempF - 32) * (5 / 9);
    let tempK = tempC + 273.15;
    inputCelsius.value = formatTemp(tempC);
    inputKelvin.value = formatTemp(tempK);
});

/* Kelvin to Celsius and Fahrenheit */
inputKelvin.addEventListener('input', function () {
    let tempK = parseFloat(inputKelvin.value);
    if (isNaN(tempK)) {
        inputCelsius.value = "";
        inputFahrenheit.value = "";
        return;
    }
    let tempC = tempK - 273.15;
    let tempF = (tempC * (9 / 5)) + 32;
    inputCelsius.value = formatTemp(tempC);
    inputFahrenheit.value = formatTemp(tempF);
});

btn.addEventListener('click', () => {
    inputCelsius.value = "";
    inputFahrenheit.value = "";
    inputKelvin.value = "";
});
