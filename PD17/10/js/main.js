function rikiuotiSarasas(abc) {
    var sarasas = document.getElementById('sarasas');
    var items = Array.from(sarasas.getElementsByTagName('li'));

    items.sort(function(a, b) {
        var textA = a.textContent.toUpperCase();
        var textB = b.textContent.toUpperCase();
        if (abc) {
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        } else {
            return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        }
    });

    items.forEach(function(item) {
        sarasas.appendChild(item);
    });
}

document.getElementById('rikiuoti-abc').addEventListener('click', function() {
    rikiuotiSarasas(true);
});

document.getElementById('rikiuoti-zba').addEventListener('click', function() {
    rikiuotiSarasas(false);
});