// Daugybos lentelės spausdinimo funkcija
function spausdintiDaugybosLentele() {
    for (let i = 0; i <= 10; i++) {
        let eilute = "";
        for (let j = 0; j <= 10; j++) {
            eilute += (i * j) + "\t";
        }
        console.log(eilute);
    }
}

// Iškviečiame funkciją
spausdintiDaugybosLentele();

