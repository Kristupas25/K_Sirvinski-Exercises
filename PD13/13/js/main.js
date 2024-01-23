const p1 = 2.99;
const p2 = 4.99;
const p = 20; //nuolaida
const kopiuros = 10;

const p3 = (p2 - (p2 * p) / 100) + (p1 - (p1 * p) / 100);


if (kopiuros >= p3) {
    console.log(`Nu pasirodo iperki, bet kainuos ${p3.toFixed(2)}eur`);
} else {
    console.log(`neiperki nes bendrai kainuoja ${p3.toFixed(2)}eur, o tu turi tik ${kopiuros} euru`)
}