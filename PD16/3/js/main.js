function trikampioPlotas(baze, aukstis) {
    return (baze * aukstis) / 2;
  }

  function parodytiPlota() {
    var baze = document.getElementById("baze").value;
    var aukstis = document.getElementById("aukstis").value;
    if (baze !== "" && aukstis !== "") {
      var plotas = trikampioPlotas(baze, aukstis);
      document.getElementById("rezultatas").innerText = "Trikampio plotas su baze " + baze + " ir aukščiu " + aukstis + " yra: " + plotas;
    } else {
      document.getElementById("rezultatas").innerText = "Įveskite bazę ir aukštį!";
    }
  }