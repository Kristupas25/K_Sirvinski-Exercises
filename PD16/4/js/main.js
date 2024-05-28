function faktorialas(skaicius) {
    if (skaicius === 0 || skaicius === 1) {
      return 1;
    }
    return skaicius * faktorialas(skaicius - 1);
  }

  function parodytiFaktoriala() {
    var skaicius = document.getElementById("skaicius").value;
    if (skaicius !== "") {
      var rezultatas = faktorialas(Number(skaicius));
      document.getElementById("rezultatas").innerText = skaicius + "! yra " + rezultatas;
    } else {
      document.getElementById("rezultatas").innerText = "Įveskite skaičių!";
    }
  }