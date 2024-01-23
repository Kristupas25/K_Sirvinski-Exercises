// s = vienam asmeniui per menesi gauna (minimum)
// k = lieka paskolai moketi
// n = sudaro asmeniu
// t = atlyginimas
// m = atlyginimas

const s = 500;
const k = 250;
const n = 3;
const t = 1250;
const m = 1000;
const bend = (t + m) / n;

if (bend >= s && s * n >= k) {
    console.log("Bankas suteiks paskolą");
} else {
    console.log("Bankas paskolos nesuteiks");
}