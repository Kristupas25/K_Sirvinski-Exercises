function toggleCase(str) {
    return str.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

// Example usage:
console.log(toggleCase('HeLLo WoRLd')); // "hEllO wOrlD"
