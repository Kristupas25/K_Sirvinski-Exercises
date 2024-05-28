function trintiPirmaElementa() {
    var sarasas = document.getElementById('myList');
    var pirmasElementas = sarasas.querySelector('li');
    if (pirmasElementas) {
        sarasas.removeChild(pirmasElementas);
    }
}

document.getElementById('trinti').addEventListener('click', trintiPirmaElementa);