const nuolaida = 20;
const telas = 500;
const austeja = 200;

const tn = (telas - (telas * nuolaida) / 100);

if (austeja > tn) {
    console.log('Iperka !!!');
} else {
    console.log('Neiperka :(');
}