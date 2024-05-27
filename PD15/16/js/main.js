function getRandomElements() {
    const arrayInput = document.getElementById('arrayInput').value;
    const countInput = parseInt(document.getElementById('countInput').value);
    let array;

    try {
        array = JSON.parse(arrayInput);
    } catch (e) {
        document.getElementById('resultArray').innerText = "Įvestis nėra validi JSON forma.";
        return;
    }

    if (!Array.isArray(array)) {
        document.getElementById('resultArray').innerText = "Įvestis nėra masyvas.";
        return;
    }

    const randomElements = [];

    while (randomElements.length < countInput && array.length > 0) {
        const randomIndex = Math.floor(Math.random() * array.length);
        randomElements.push(array[randomIndex]);
        array.splice(randomIndex, 1);
    }

    document.getElementById('resultArray').innerText = JSON.stringify(randomElements);
}
