// Pradiniai duomenys
let n = 10;
let m = 30;

// Ciklas ir sąlygos skaičių filtravimui
for (let skaicius = n; skaicius <= m; skaicius++) {
    if (skaicius % 3 === 0 && skaicius % 10 !== 3) {
        console.log(skaicius);
    }
}
