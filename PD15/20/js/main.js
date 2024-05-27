function findNaNIndexes() {
    const arrayInput = document.getElementById('arrayInput').value;
    let array;

    try {
        array = JSON.parse(arrayInput);
    } catch (e) {
        document.getElementById('resultIndexes').innerText = "Įvestis nėra validi JSON forma.";
        return;
    }

    if (!Array.isArray(array)) {
        document.getElementById('resultIndexes').innerText = "Įvestis turi būti masyvas.";
        return;
    }

    const nanIndexes = [];
    array.forEach((element, index) => {
        if (isNaN(element)) {
            nanIndexes.push(index);
        }
    });

    if (nanIndexes.length > 0) {
        document.getElementById('resultIndexes').innerText = nanIndexes.join(', ');
    } else {
        document.getElementById('resultIndexes').innerText = "NaN elementų nėra.";
    }
}
