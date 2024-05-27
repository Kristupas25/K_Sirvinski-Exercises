function printArray() {
    const input = document.getElementById('arrayInput').value;
    let array;

    try {
        array = JSON.parse(input);
    } catch (e) {
        document.getElementById('resultList').innerHTML = "<li>Įvestis nėra validi JSON forma.</li>";
        return;
    }

    if (Array.isArray(array)) {
        const resultList = document.getElementById('resultList');
        resultList.innerHTML = ''; // Išvalyti esamą sąrašą
        array.forEach(element => {
            const listItem = document.createElement('li');
            listItem.textContent = element;
            resultList.appendChild(listItem);
        });
    } else {
        document.getElementById('resultList').innerHTML = "<li>Įvestis nėra masyvas.</li>";
    }
}
