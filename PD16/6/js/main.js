function apverstiSkaiciu(skaicius) {
    // Paverčiame skaičių į eilutę, apverčiame eilutę, ir vėl paverčiame į skaičių
    var apverstaEilute = skaicius.toString().split('').reverse().join('');
    return parseFloat(apverstaEilute) * Math.sign(skaicius);
  }

  function parodytiApverstaSkaiciu() {
    var skaicius = document.getElementById("skaicius").value;
    if (skaicius !== "") {
      var apverstasSkaicius = apverstiSkaiciu(Number(skaicius));
      document.getElementById("rezultatas").innerText = "Apverstas skaičius yra: " + apverstasSkaicius;
    } else {
      document.getElementById("rezultatas").innerText = "Įveskite skaičių!";
    }
  }