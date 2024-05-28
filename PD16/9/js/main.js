function isdestytiPagalAbecede(eilute) {
    return eilute.split('').sort().join('');
}

function rodytiIsdestytaEilute() {
  var eilute = document.getElementById("eilute").value;
  if (eilute !== "") {
    var isdestytaEilute = isdestytiPagalAbecede(eilute);
    document.getElementById("rezultatas").innerText = "Išdėstyta pagal abėcėlę: " + isdestytaEilute;
  } else {
    document.getElementById("rezultatas").innerText = "Įveskite eilutę!";
  }
}