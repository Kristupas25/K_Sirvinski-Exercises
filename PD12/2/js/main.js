let puodelis = 7;
let deze = 0;
for(let i = 0; i < 7; i++){
    if(puodelis >= 3){
        puodelis -=3;
        deze++;
    }
}

console.log(`Pilnu dėžučių skaičius: ${deze}. Nesupakuotų puodelių skaičius: ${puodelis}.`);
