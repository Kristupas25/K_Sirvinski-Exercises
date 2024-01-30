// Duomenys
let eilute = "JavaScript for all";

// Funkcija, kuri atspausdina eilutę atvirkščiai
function atspausdintiAtvirksciai(eilute) {
    let stekas = [];

    // Įdedame simbolius į steką
    for (let i = 0; i < eilute.length; i++) {
        stekas.push(eilute[i]);
    }

    // Atspausdiname simbolius iš steko (atvirkščiai)
    while (stekas.length > 0) {
        console.log(stekas.pop());
    }
}

// Iškviečiame funkciją su duotais duomenimis
atspausdintiAtvirksciai(eilute);
