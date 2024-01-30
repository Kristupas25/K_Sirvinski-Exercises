// Duomenys
let atlyginimai = [824.25, 1225.12, 459.16, 1500];

// Funkcija skaičiuoti naują atlyginimą
function skaiciuotiNaujaAtlygini(atlyginimas) {
    if (atlyginimas > 1000) {
        return atlyginimas * 1.05; // Didinama 5%
    } else {
        return atlyginimas * 1.1;  // Didinama 10%
    }
}

// Skaičiuojame naujus atlyginimus kiekvienam darbuotojui
let naujiAtlyginimai = atlyginimai.map(skaiciuotiNaujaAtlygini);

// Išvedame rezultatus
console.log("Seni atlyginimai: " + atlyginimai);
console.log("Nauji atlyginimai: " + naujiAtlyginimai);
