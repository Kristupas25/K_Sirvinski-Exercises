let egle = [167, 134 ,145, 156, 155, 176];
let atsakymas = 0;

for(let i = 0; i< egle.length; i++){
    atsakymas += egle[i];
}
let vidurkis = atsakymas / egle.length;

console.log(`Eglutės aukščio vidurkis: ${vidurkis} cm`)
