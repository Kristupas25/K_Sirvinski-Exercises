function swapCase() {
    const input = document.getElementById('stringInput').value;
    const swapped = input.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
    document.getElementById('resultString').innerText = swapped;
}
