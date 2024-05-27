function findThirdSmallest() {
    const arrayInput = document.getElementById('arrayInput').value;
    let array;

    try {
        array = JSON.parse(arrayInput);
    } catch (e) {
        document.getElementById('resultNumber').innerText = "Įvestis nėra validi JSON forma.";
        return;
    }

    if (!Array.isArray(array) || array.length < 3) {
        document.getElementById('resultNumber').innerText = "Įvestis turi būti masyvas, turintis bent tris elementus.";
        return;
    }

    const sortedArray = array.slice().sort((a, b) => a - b);
    const thirdSmallest = sortedArray[2];
    document.getElementById('resultNumber').innerText = thirdSmallest;
}
