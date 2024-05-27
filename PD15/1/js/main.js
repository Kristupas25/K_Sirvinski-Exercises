function checkIfArray() {
    const input = document.getElementById('inputValue').value;
    let value;

    try {
        value = JSON.parse(input);
    } catch (e) {
        document.getElementById('result').innerText = "Įvestis nėra validi JSON forma.";
        return;
    }

    if (Array.isArray(value)) {
        document.getElementById('result').innerText = "Įvestas kintamasis yra masyvas.";
    } else {
        document.getElementById('result').innerText = "Įvestas kintamasis nėra masyvas.";
    }
}
