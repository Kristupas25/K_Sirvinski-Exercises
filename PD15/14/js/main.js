function mergeAndRemoveDuplicates() {
    const array1Input = document.getElementById('array1Input').value;
    const array2Input = document.getElementById('array2Input').value;
    let array1, array2;

    try {
        array1 = JSON.parse(array1Input);
        array2 = JSON.parse(array2Input);
    } catch (e) {
        document.getElementById('resultArray').innerText = "Įvestis nėra validi JSON forma.";
        return;
    }

    if (Array.isArray(array1) && Array.isArray(array2)) {
        const mergedArray = array1.concat(array2);
        const uniqueArray = Array.from(new Set(mergedArray));
        document.getElementById('resultArray').innerText = JSON.stringify(uniqueArray);
    } else {
        document.getElementById('resultArray').innerText = "Abi įvestys turi būti masyvai.";
    }
}
