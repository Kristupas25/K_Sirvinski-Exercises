let a = 15; // Čia įrašykite skaičių a
let b = 8;  // Čia įrašykite skaičių b
let c = 20; // Čia įrašykite skaičių c

// Rikiuojame skaičius mažėjimo tvarka
let skaiciai = [a, b, c].sort((x, y) => y - x);

// Sumuojame du didžiausius skaičius
let suma = skaiciai[0] + skaiciai[1];

console.log("Dviejų didžiausių skaičių suma yra: " + suma);
