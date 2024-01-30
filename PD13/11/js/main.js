let s = 2000; // Minimalios pajamos vienam šeimos nariui per mėnesį
let k = 500;  // Likęs kiekis eurų paskolai mokėti
let n = 3;    // Šeimos narių skaičius
let t = 800;  // Tėvo atlyginimas per mėnesį
let m = 700;  // Motinos atlyginimas per mėnesį

// Skaičiuojame šeimos pajamas
let seimosPajamos = n * (t + m);

// Patikriname, ar sąlygos paskolai gauti yra tenkinamos
if (seimosPajamos >= s && k >= 0) {
    console.log("Bankas suteiks paskolą.");
} else {
    console.log("Bankas paskolos nesuteiks.");
}
