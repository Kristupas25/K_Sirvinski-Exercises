 // JavaScript function to get the name of the called function
 function getFunctionName(func) {
    return func.name;
}

// Example functions to test
function exampleFunction() {
    // Do something
}

function anotherFunction() {
    // Do something else
}

// Example usage of the getFunctionName function
function displayFunctionName() {
    // Choose a function to test
    var selectedFunction = document.getElementById('functionSelect').value;
    var func;

    if (selectedFunction === 'exampleFunction') {
        func = exampleFunction;
    } else if (selectedFunction === 'anotherFunction') {
        func = anotherFunction;
    }

    // Get the function name
    var functionName = getFunctionName(func);

    // Display the result
    document.getElementById('result').textContent = "Function Name: " + functionName;

    return false; // Prevent form submission
}