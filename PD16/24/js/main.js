 // JavaScript function to calculate BMI
 function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var bmi, resultMessage;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultMessage = "Įveskite teisingus svorio ir ūgio duomenis.";
    } else {
        bmi = weight / ((height / 100) ** 2); // Calculate BMI
        resultMessage = "Jūsų KMI: " + bmi.toFixed(2);

        if (bmi < 18.5) {
            resultMessage += " (Nepakankamas svoris)";
        } else if (bmi < 24.9) {
            resultMessage += " (Normalus svoris)";
        } else if (bmi < 29.9) {
            resultMessage += " (Antsvoris)";
        } else {
            resultMessage += " (Nutukimas)";
        }
    }

    // Display the result
    document.getElementById('result').textContent = resultMessage;
    return false; // Prevent form submission
}