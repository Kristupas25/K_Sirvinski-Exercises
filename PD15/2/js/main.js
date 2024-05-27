function copyArray() {
    const input = document.getElementById('arrayInput').value;
    let array;

    try {
        array = JSON.parse(input);
    } catch (e) {
        document.getElementById('originalArray').innerText = "Įvestis nėra validi JSON forma.";
        document.getElementById('copiedArray').innerText = "";
        return;
    }

    if (Array.isArray(array)) {
        const copiedArray = array.slice();
        document.getElementById('originalArray').innerText = JSON.stringify(array);
        document.getElementById('copiedArray').innerText = JSON.stringify(copiedArray);
    } else {
        document.getElementById('originalArray').innerText = "Įvestis nėra masyvas.";
        document.getElementById('copiedArray').innerText = "";
    }
}
