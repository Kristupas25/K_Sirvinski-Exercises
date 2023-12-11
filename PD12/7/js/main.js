let begikai = [22, 20, 25,25];
let answer = 0;
let pirmas = begikai[0];

for(let i = 1; i < begikai.length; i++){
    if(begikai[i] < pirmas){
        pirmas = begikai[i];
    }
}

for (let i = 0; i < begikai.length; i++){
    answer += begikai[i];
}
let vidurkis = answer / begikai.length;
let skirtumas = vidurkis - pirmas;

console.log(`Greičiausio bėgiko laikas: ${pirmas}sek.. Jis buvo: ${skirtumas} sek geresnis už vidurkį.`);
