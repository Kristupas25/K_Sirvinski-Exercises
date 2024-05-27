function countElement() {
    const arrayInput = document.getElementById('arrayInput').value;
    const elementInput = document.getElementById('elementInput').value;
    let array;

    try {
        array = JSON.parse(arrayInput);
    } catch (e) {
        document.getElementById('resultCount').innerText = "Įvestis nėra validi JSON forma.";
        return;
    }

    if (Array.isArray(array)) {
        const element = JSON.parse(elementInput);
        const count = array.filter(item => item === element).length;
        document.getElementById('resultCount').innerText = count;
    } else {
        document.getElementById('resultCount').innerText = "Įvestis nėra masyvas.";
    }
}
