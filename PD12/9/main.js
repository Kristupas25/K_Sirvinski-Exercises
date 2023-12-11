let autobusai = [
    { laikas: [1, 50], keleiviai: 17 },
    { laikas: [2, 0], keleiviai: 25 },
  ];
  
  let keleiviuBendras = 0;
  for (let autobusas of autobusai) {
    keleiviuBendras += autobusas.keleiviai;
  }
  
  let laikasVidutinis = 0;
  for (let autobusas of autobusai) {
    let [valandos, minutes] = autobusas.laikas;
    let minutem = valandos * 60 + minutes;
    laikasVidutinis += minutem;
  }
  
  let maziauAutobuse = 0;
  for (let autobusas of autobusai) {
    if (autobusas.keleiviai < 10) {
      maziauAutobuse++;
    }
  }
  
  console.log(`isviso keliauja: ${keleiviuBendras} ||keliones vidutine trukme ${laikasVidutinis} ||autobusu skaicius kur maziau nei 10 keleiviu ${maziauAutobuse}`);
