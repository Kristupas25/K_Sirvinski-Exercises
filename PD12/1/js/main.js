const dienos = [5, 6, 4, 5 ,4];
let paskaitos = 0;
let time = 0;
for(let i = 0; i< dienos.length; i++) {
    paskaitos += dienos [i];
    time += dienos[i] * 45;
}

console.log(`Paskaitų skaičius per savaitę - ${paskaitos}. Tai sudaro ${time} minučių.`)
