function skaiciuotiKainaSuNuolaida(t, p) {
    // Apskaičiuojame kainą su nuolaida
    let nuolaida = (t * p) / 100;
    let kainaSuNuolaida = t - nuolaida;

    return kainaSuNuolaida;
}

let t = 500;  // Telefonui be nuolaidos kaina eurais
let p = 15;   // Nuolaidos procentas
let a = 100;  // Austėjos sutaupyti pinigai eurais

let kainaSuNuolaida = skaiciuotiKainaSuNuolaida(t, p);

console.log("Išmanusis telefonas su nuolaida kainuos: " + kainaSuNuolaida + " eurų.");

// Tikriname, ar sutaupyti pinigai užteks
if (a >= kainaSuNuolaida) {
    console.log("Sutaupyti pinigai užteks įsigyti išmanųjį telefoną.");
} else {
    console.log("Sutaupyti pinigai nepakaks įsigyti išmanųjį telefoną.");
}
