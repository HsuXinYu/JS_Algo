function convertTheTemperature(celsius) {
  let number = [];
  let kelvin = celsius + 273.15;
  let fahrenheit = celsius * 1.8 + 32.0;
  number[0] = kelvin;
  number[1] = fahrenheit;
  console.log(number);
  return number;
}

let celsius = 36.5; //[309.65000,97.70000]

convertTheTemperature(celsius);
