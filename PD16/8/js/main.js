function generuotiRaidiniusVariantus(zodis) {
    var variantai = [];
    
    // Funkcija, kuri generuoja visus raidinius variantus
    function generuotiVariantus(prefix, likusiEilute) {
        // Jei liko raidžių eilutėje, tęsiame generavimą
        if (likusiEilute.length === 0) {
            variantai.push(prefix); // Pridedame variantą į masyvą
        } else {
            // Kiekvienai raidės galimybei
            for (var i = 0; i < likusiEilute.length; i++) {
                // Suformuojame naują eilutę be šios raidės
                var naujaEilute = likusiEilute.substring(0, i) + likusiEilute.substring(i + 1);
                // Kviečiame funkciją rekursiškai, pridedant naują raidę prie prefikso
                generuotiVariantus(prefix + likusiEilute.charAt(i), naujaEilute);
            }
        }
    }
    
    // Pradinis kvietimas generuoti variantus su pradiniu tuščiu prefiksu ir pilnu žodžiu
    generuotiVariantus('', zodis);
  
    return variantai;
  }
  
  function generuotiVariantus() {
  var zodis = document.getElementById("zodis").value;
  if (zodis !== "") {
    var variantai = generuotiRaidiniusVariantus(zodis);
    document.getElementById("rezultatas").innerText = "Visi raidinių variantai iš žodžio '" + zodis + "': " + variantai.join(", ");
  } else {
    document.getElementById("rezultatas").innerText = "Įveskite žodį!";
  }
  }