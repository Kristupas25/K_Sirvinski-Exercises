// Funkcija, kuri pakeičia visų <p> tag'ų teksto spalvą
function keistiParagrafuSpalva() {
    var paragrafai = document.getElementsByTagName('p');
    for (var i = 0; i < paragrafai.length; i++) {
        paragrafai[i].style.color = getRandomColor();
    }
}

// Funkcija, kuri generuoja atsitiktinę spalvą
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Surandame mygtuką pagal jo ID ir pridedame įvykio klausiklį
var mygtukas = document.getElementById('keisti-spalva');
mygtukas.addEventListener('click', keistiParagrafuSpalva);