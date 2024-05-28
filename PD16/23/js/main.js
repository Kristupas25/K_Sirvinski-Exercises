  // JavaScript function to perform the calculation
  function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Įveskite teisingus skaičius";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? num1 / num2 : "Dalyba iš nulio negalima";
                break;
            default:
                result = "Nežinoma operacija";
        }
    }

    // Display the result
    document.getElementById('result').textContent = "Rezultatas: " + result;
    return false; // Prevent form submission
}