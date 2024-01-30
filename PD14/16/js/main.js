// Funkcija, kuri tikrina, ar skaičius yra palindromas
function arPalindromas(skaicius) {
    const skaiciausString = skaicius.toString();
    const atvirkstinisString = skaiciausString.split('').reverse().join('');
    return skaiciausString === atvirkstinisString;
}

// Ieškome pirmųjų 10 natūraliųjų skaičių, kurių kvadratai yra palindromai
let skaicius = 1;
let palindromaiRasti = 0;

while (palindromaiRasti < 10) {
    const kvadratas = skaicius * skaicius;

    if (arPalindromas(kvadratas)) {
        console.log(`Skaičius: ${skaicius}, Kvadratas: ${kvadratas}`);
        palindromaiRasti++;
    }

    skaicius++;
}