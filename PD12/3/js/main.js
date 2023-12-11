let sienosIlgis = 4*100;
let sienosAukstis = 3*100;
let plytosKaina = 0.5;
let plytosIlgis = 20; //~cm
let plytosAukstis = 10; //~cm
let plytuKiekis = 0;
for(let i=0; i < sienosIlgis; i+=plytosIlgis){
    for(let j=0; j < sienosAukstis; j+=plytosAukstis){
        plytuKiekis++;
    }
}

console.log(`Plytų kiekis ${plytuKiekis}. Plytos kainuos ${plytuKiekis * plytosKaina}Eur.`)
