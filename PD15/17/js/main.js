function createArray() {
    const start = parseInt(document.getElementById('startInput').value);
    const end = parseInt(document.getElementById('endInput').value);

    if (isNaN(start) || isNaN(end)) {
        document.getElementById('resultArray').innerText = "Įvestis turi būti sveikas skaičius.";
        return;
    }

    if (start > end) {
        document.getElementById('resultArray').innerText = "Pradinis skaičius turi būti mažesnis už galutinį skaičių.";
        return;
    }

    const newArray = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    document.getElementById('resultArray').innerText = JSON.stringify(newArray);
}
