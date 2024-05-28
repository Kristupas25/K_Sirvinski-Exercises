function skaiciuotiRaides(eilute) {
    // Pašaliname visus tarpus iš eilutės
    var beTarpu = eilute.replace(/\s/g, '');
    // Grąžiname simbolių kiekį eilutėje be tarpų
    return beTarpu.length;
  }

  function parodytiRaidziuKieki() {
    var eilute = document.getElementById("eilute").value;
    if (eilute !== "") {
      var raidziuKiekis = skaiciuotiRaides(eilute);
      document.getElementById("rezultatas").innerText = "Raidžių kiekis eilutėje yra: " + raidziuKiekis;
    } else {
      document.getElementById("rezultatas").innerText = "Įveskite tekstą!";
    }
  }