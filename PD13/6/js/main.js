let dvizenklisSkaicius = 87; //Dviženklio skaičiaus reikšmę

let desimtys = Math.floor(dvizenklisSkaicius / 10);
let vientis = dvizenklisSkaicius % 10;

if (desimtys > vientis) {
    console.log("Didesnis skaitmuo yra desimtys: " + desimtys);
} else if (vientis > desimtys) {
    console.log("Didesnis skaitmuo yra vientis: " + vientis);
} else {
    console.log("Abu skaitmenys yra lygūs.");
}
