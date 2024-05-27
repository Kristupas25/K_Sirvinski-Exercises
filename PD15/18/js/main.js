function findUniqueElements() {
    const arrayInput = document.getElementById('arrayInput').value;
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

    const uniqueElements = Array.from(new Set(array));
    document.getElementById('resultArray').innerText = JSON.stringify(uniqueElements);
}
