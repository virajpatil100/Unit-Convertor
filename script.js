function loadOptions() {
  const typeSelect = document.getElementById("conversionType");
  const category = document.getElementById("category").value;

  typeSelect.innerHTML = "";

  const options = {
    length: ["Meters to Kilometers", "Kilometers to Meters"],
    weight: ["Kilograms to Pounds", "Pounds to Kilograms"],
    temperature: ["Celsius to Fahrenheit", "Fahrenheit to Celsius"]
  };

  if (category && options[category]) {
    options[category].forEach(opt => {
      const option = document.createElement("option");
      option.value = opt;
      option.textContent = opt;
      typeSelect.appendChild(option);
    });
  }
}

function convert() {
  const value = parseFloat(document.getElementById("inputValue").value);
  const conversion = document.getElementById("conversionType").value;
  const result = document.getElementById("result");

  if (isNaN(value)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let output;

  switch (conversion) {
    case "Meters to Kilometers":
      output = value / 1000 + " km";
      break;
    case "Kilometers to Meters":
      output = value * 1000 + " m";
      break;
    case "Kilograms to Pounds":
      output = value * 2.20462 + " lb";
      break;
    case "Pounds to Kilograms":
      output = value / 2.20462 + " kg";
      break;
    case "Celsius to Fahrenheit":
      output = (value * 9/5 + 32).toFixed(2) + " °F";
      break;
    case "Fahrenheit to Celsius":
      output = ((value - 32) * 5/9).toFixed(2) + " °C";
      break;
    default:
      output = "Please select a valid conversion type.";
  }

  result.textContent = "Result: " + output;
}
