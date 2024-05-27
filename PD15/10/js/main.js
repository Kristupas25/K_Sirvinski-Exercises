function removeDuplicates() {
    const input = document.getElementById('arrayInput').value;
    let array;

    try {
        array = JSON.parse(input);
    } catch (e) {
        document.getElementById('resultArray').innerText = "Įvestis nėra validi JSON forma.";
        return;
    }

    if (Array.isArray(array)) {
        const uniqueArray = Array.from(new Set(array.filter(item => typeof item !== 'string' || (typeof item === 'string' && item.trim() !== ''))));
        document.getElementById('resultArray').innerText = JSON.stringify(uniqueArray);
    } else {
        document.getElementById('resultArray').innerText = "Įvestis nėra masyvas.";
    }
}
