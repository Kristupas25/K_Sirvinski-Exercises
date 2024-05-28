function arPalindromas(eilute) {
    // Pašaliname ne raidinius simbolius ir padarome viską mažosiomis raidėmis
    var isvalytaEilute = eilute.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Apverčiame išvalytą eilutę
    var apverstaEilute = isvalytaEilute.split('').reverse().join('');
    // Palyginame išvalytą eilutę su apversta versija
    return isvalytaEilute === apverstaEilute;
  }

  function patikrintiPalindroma() {
    var eilute = document.getElementById("eilute").value;
    if (eilute !== "") {
      var rezultatas = arPalindromas(eilute);
      document.getElementById("rezultatas").innerText = rezultatas ? "Tekstas yra palindromas!" : "Tekstas nėra palindromas.";
    } else {
      document.getElementById("rezultatas").innerText = "Įveskite tekstą!";
    }
  }