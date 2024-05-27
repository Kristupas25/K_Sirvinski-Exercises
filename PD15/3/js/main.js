function getLastElement() {
    const input = document.getElementById('arrayInput').value;
    let array;

    try {
        array = JSON.parse(input);
    } catch (e) {
        document.getElementById('lastElement').innerText = "Įvestis nėra validi JSON forma.";
        return;
    }

    if (Array.isArray(array)) {
        const lastElement = array[array.length - 1];
        document.getElementById('lastElement').innerText = JSON.stringify(lastElement);
    } else {
        document.getElementById('lastElement').innerText = "Įvestis nėra masyvas.";
    }
}
