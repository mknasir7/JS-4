// Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
    // Using the function to convert temperature
  let temperatureInFahrenheit = 77;
  let temperatureInCelsius = toCelsius(temperatureInFahrenheit);
  console.log("The temperature is " + temperatureInCelsius + " Celsius");
  //console.log(text);
