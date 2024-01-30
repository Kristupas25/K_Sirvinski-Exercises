let a = 100; // Čia įrašykite voko vidinio matmens a reikšmę
let b = 150; // Čia įrašykite voko vidinio matmens b reikšmę
let c = 80;  // Čia įrašykite atviruko matmens c reikšmę
let d = 120; // Čia įrašykite atviruko matmens d reikšmę

// Patikriname, ar atvirukas tilps į voką su 1 mm tarpo kiekvienoje pusėje
if ((c + 2 <= a) && (d + 2 <= b)) {
    console.log("Atvirukas tilps į voką.");
} else {
    console.log("Atvirukas netilps į voką.");
}
