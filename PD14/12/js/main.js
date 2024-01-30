// Pateiktas natūralusis skaičius a
let a = 17;

// Funkcija, kuri tikrina, ar skaičius yra pirminis
function arPirminis(sk) {
    if (sk <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(sk); i++) {
        if (sk % i === 0) {
            return false;
        }
    }
    return true;
}

// Tikriname ar skaičius yra pirminis
let rezultatas = arPirminis(a);

// Išvedame rezultatą
if (rezultatas) {
    console.log(a + " yra pirminis skaičius.");
} else {
    console.log(a + " nėra pirminis skaičius.");
}
