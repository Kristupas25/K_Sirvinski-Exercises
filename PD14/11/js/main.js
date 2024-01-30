// Pateikiamas naturalusis skaičius a
let a = 28;

// Funkcija, kuri randa visus daliklius ir grąžina jų masyvą
function rastiDaliklius(sk) {
    let dalikliai = [];
    for (let i = 1; i <= sk; i++) {
        if (sk % i === 0) {
            dalikliai.push(i);
        }
    }
    return dalikliai;
}

// Funkcija, kuri randa daliklių sumą
function rastiDalikliuSuma(dalikliai) {
    return dalikliai.reduce((suma, daliklis) => suma + daliklis, 0);
}

// Funkcija, kuri randa lyginių daliklių sumą
function rastiLyginiuDalikliuSuma(dalikliai) {
    return dalikliai.filter(daliklis => daliklis % 2 === 0).reduce((suma, daliklis) => suma + daliklis, 0);
}

// Rasti daliklius
let dalikliai = rastiDaliklius(a);

// Rasti daliklių sumą
let dalikliuSuma = rastiDalikliuSuma(dalikliai);

// Rasti lyginių daliklių sumą
let lyginiuDalikliuSuma = rastiLyginiuDalikliuSuma(dalikliai);

// Išvesti rezultatus
console.log("Dalikliai: " + dalikliai);
console.log("Daliklių suma: " + dalikliuSuma);
console.log("Lyginių daliklių suma: " + lyginiuDalikliuSuma);
