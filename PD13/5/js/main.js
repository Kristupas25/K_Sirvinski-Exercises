let apskritimoPlotas = Math.PI * Math.pow(radius, 2);
let kvadratoPlotas = Math.pow(sideLength, 2);
let stačiakampioPlotas = length * width;

let didziausiasPlotas = Math.max(apskritimoPlotas, kvadratoPlotas, stačiakampioPlotas);

console.log("Didžiausias plotas yra: " + didziausiasPlotas);
