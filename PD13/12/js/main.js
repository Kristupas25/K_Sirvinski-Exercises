let n = 120; // Visų prekių dėžių skaičius
let m = 30;  // Mašinoje talpinamų dėžių skaičius

// Apskaičiuojame, kiek kartų reikės nuvažiuoti
let kartu = Math.ceil(n / m);

console.log("Vairuotojas turės nuvažiuoti " + kartu + " kartus į sandėlį.");
