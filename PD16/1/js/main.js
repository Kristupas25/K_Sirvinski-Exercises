function skaiciausKvadratas(skaicius) {
    return skaicius * skaicius;
  }

  function parodytiKvadrata() {
    var skaicius = document.getElementById("skaicius").value;
    if (skaicius !== "") {
      var kvadratas = skaiciausKvadratas(skaicius);
      document.getElementById("rezultatas").innerText = "Skaičiaus kvadratas yra: " + kvadratas;
    } else {
      document.getElementById("rezultatas").innerText = "Įveskite skaičių!";
    }
  }