 // Surandame mygtuką pagal jo ID
 var mygtukas = document.getElementById('keisti-fona');

 // Pridedame įvykio klausiklį mygtukui
 mygtukas.addEventListener('click', function() {
     // Pakeičiame tinklalapio fono spalvą
     document.body.style.backgroundColor = getRandomColor();
 });

 // Funkcija, kuri generuoja atsitiktinę spalvą
 function getRandomColor() {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
 }