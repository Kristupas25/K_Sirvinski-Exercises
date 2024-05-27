function calculateSumAndProduct() {
    const input = document.getElementById('arrayInput').value;
    let array;

    try {
        array = JSON.parse(input);
    } catch (e) {
        document.getElementById('sumResult').innerText = "Įvestis nėra validi JSON forma.";
        document.getElementById('productResult').innerText = "";
        return;
    }

    if (Array.isArray(array) && array.every(Number.isInteger)) {
        const sum = array.reduce((acc, num) => acc + num, 0);
        const product = array.reduce((acc, num) => acc * num, 1);
        document.getElementById('sumResult').innerText = sum;
        document.getElementById('productResult').innerText = product;
    } else {
        document.getElementById('sumResult').innerText = "Įvestis nėra sveikųjų skaičių masyvas.";
        document.getElementById('productResult').innerText = "";
    }
}
