// Parašykite programą, kuri nustato ar skaičius a yra skaičiaus b daliklis.
const a = 5;
const b = 10;

if (b != 0) {
    if (b % a === 0) {
        console.log('daliklis');
    } else {
        console.log('ne');
    }
} else {
    console.log('nejuokauk');
}