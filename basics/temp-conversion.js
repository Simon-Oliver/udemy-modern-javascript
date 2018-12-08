const fahrenheit = 32;
const celcius = 10;

function fToC(f) {
  return `${((f - 32) * 5) / 9} °C`;
}

function cToF(c) {
  return `${c * (9 / 5) + 32} K`;
}

function cToK(c) {
  return `${c + 273.15} °F`;
}

console.log(fToC(fahrenheit));
console.log(cToK(celcius));
console.log(cToF(celcius));

// Fahrenheit to Celcius -  (T(°F) - 32) × 5/9
// Celsius to Kelvin - T(K) = T(°C) + 273.15
// Celsius to Fahrenheit - T(°F) = T(°C) × 9/5 + 32

// 0 °F	*** -17.78 °C
// 32 °F *** 0 °C
// 70 °F *** 21.11 °C
// 200 °F *** 93.33 °C
