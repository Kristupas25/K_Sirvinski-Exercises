function removeElement() {
    const arrayInput = document.getElementById('arrayInput').value;
    const elementInput = document.getElementById('elementInput').value;
    let array;

    try {
        array = JSON.parse(arrayInput);
    } catch (e) {
        document.getElementById('resultArray').innerText = "Įvestis nėra validi JSON forma.";
        return;
    }

    const element = JSON.parse(elementInput);

    if (!Array.isArray(array)) {
        document.getElementById('resultArray').innerText = "Įvestis nėra masyvas.";
        return;
    }

    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
        document.getElementById('resultArray').innerText = JSON.stringify(array);
    } else {
        document.getElementById('resultArray').innerText = "Elementas nerastas masyve.";
    }
}
