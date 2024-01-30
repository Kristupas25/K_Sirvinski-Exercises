let p1 = 30;  // Pirmos prekės kaina eurais
let p2 = 50;  // Antros prekės kaina eurais
let p = 10;   // Nuolaidos procentas
let s = 60;   // Pirkėjo turimi pinigai eurais

// Apskaičiuojame nuolaidą kiekvienai prekei
let nuolaida1 = (p1 * p) / 100;
let nuolaida2 = (p2 * p) / 100;

// Apskaičiuojame kiek pirkėjas sumokės po nuolaidos
let galutineKaina1 = p1 - nuolaida1;
let galutineKaina2 = p2 - nuolaida2;

// Apskaičiuojame kiek iš viso kainuos abi prekės
let visoKaina = galutineKaina1 + galutineKaina2;

// Tikriname, ar pirkėjo pinigai užteks
if (s >= visoKaina) {
    console.log("Pirkėjui užteks pinigų. Galutinė kaina: " + visoKaina + " eurų.");
} else {
    console.log("Pirkėjui nepakaks pinigų.");
}
