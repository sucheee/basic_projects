let convert = document.getElementById('convert');
let givenValue = document.getElementById('valueGiven');
let resultElement = document.getElementById('result');

let celcuisToFahrenheit = (value) => {
    return ((value * 9/5) + 32);
};

let fahrenheitToCelcius = (value) => {
    return ((value - 32) * 5/9);
};

convert.addEventListener('click', function(event) {
    event.preventDefault(); // prevent default form submission behavior

    let fromValue = document.getElementById('fromValue').value;
    let toValue = document.getElementById('toValue').value;
    let inputValue = parseFloat(givenValue.value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number for the temperature");
        return; // exit the function if input value is not a number
    }

    let convertedResult;
    let unit;

    if (fromValue === toValue) {
        alert("You can't convert the same unit 🥲");
    } else {
        if (fromValue === 'celsius' && toValue === 'fahrenheit') {
            convertedResult = celcuisToFahrenheit(inputValue);
            unit = "F";
        } else if (fromValue === 'fahrenheit' && toValue === 'celsius') {
            convertedResult = fahrenheitToCelcius(inputValue);
            unit = "C";
        } else {
            alert("Invalid Conversion !!");
            return; // exit the function if conversion is invalid
        }

        resultElement.textContent = convertedResult + " " + unit;
    }
});
