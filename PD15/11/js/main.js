function shuffleArray() {
    const input = document.getElementById('arrayInput').value;
    let array;

    try {
        array = JSON.parse(input);
    } catch (e) {
        document.getElementById('resultArray').innerText = "Įvestis nėra validi JSON forma.";
        return;
    }

    if (Array.isArray(array)) {
        // Fisher-Yates maišymo algoritmas
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        document.getElementById('resultArray').innerText = JSON.stringify(array);
    } else {
        document.getElementById('resultArray').innerText = "Įvestis nėra masyvas.";
    }
}
