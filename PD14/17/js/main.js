// Pradiniai duomenys
let n = 3;
let trukmes = [18, 10, 10]; // m1, m2, m3 ir t.t.

// Apskaičiuojame vidutinę trukmę
let vidutineTrukme = trukmes.reduce((suma, trukme) => suma + trukme, 0) / n;

// Apskaičiuojame, kelių pacientų vizitai užtrunka ilgiau nei 20 minučių
let ilgesniUz20Min = trukmes.filter(trukme => trukme > 20).length;

// Išvedame rezultatus
console.log("Vidutinė trukmė vienam pacientui: " + vidutineTrukme + " min");
console.log("Pacientų vizitai ilgesni nei 20 min: " + ilgesniUz20Min);
