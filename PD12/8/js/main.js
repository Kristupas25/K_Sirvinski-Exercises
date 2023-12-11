let sanaudos = 11;
let dienos = 0;

for(let kuras = 112; kuras > 0; kuras -=22){
    if (dienos % 2 !==0){
        kuras -=11;
        dienos++;
    }
    dienos++;
}
console.log(`Keliauti bus galima ${dienos} dienas`);
