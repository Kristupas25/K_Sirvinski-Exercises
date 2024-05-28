function celsijusIFarenheita(celsijus) {
    return celsijus * 9/5 + 32;
  }

  function parodytiFarenheita() {
    var celsijus = document.getElementById("celsijus").value;
    if (celsijus !== "") {
      var farenheitas = celsijusIFarenheita(celsijus);
      document.getElementById("rezultatas").innerText = celsijus + "°C yra " + farenheitas + "°F";
    } else {
      document.getElementById("rezultatas").innerText = "Įveskite Celsijaus laipsnius!";
    }
  }