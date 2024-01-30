// Duomenys
let sausioTemperaturos = [-11.5, -10.3, -12, -6.5, -5, -15.5];
let vasarioTemperaturos = [-16, -14.5, -11, -10.3, -3.5, 0];
let kovoTemperaturos = [-3, -2.5, 0, 5, 9.5, 11.2];

// Funkcija skaičiuoti vidutinę temperatūrą
function skaiciuotiVidutineTemperatura(menesioTemperaturos) {
    let suma = 0;

    for (let i = 0; i < menesioTemperaturos.length; i++) {
        suma += menesioTemperaturos[i];
    }

    return suma / menesioTemperaturos.length;
}

// Skaičiuojame vidutines temperatūras kiekvienam mėnesiui
let sausioVidutine = skaiciuotiVidutineTemperatura(sausioTemperaturos);
let vasarioVidutine = skaiciuotiVidutineTemperatura(vasarioTemperaturos);
let kovoVidutine = skaiciuotiVidutineTemperatura(kovoTemperaturos);

// Bendros vidutinės temperatūros skaičiavimas
let bendraTemperatura = (sausioVidutine + vasarioVidutine + kovoVidutine) / 3;

// Išvedame rezultatus į konsolę
console.log("Sausio vidutinė temperatūra: " + sausioVidutine);
console.log("Vasario vidutinė temperatūra: " + vasarioVidutine);
console.log("Kovo vidutinė temperatūra: " + kovoVidutine);
console.log("Bendra vidutinė temperatūra: " + bendraTemperatura);
