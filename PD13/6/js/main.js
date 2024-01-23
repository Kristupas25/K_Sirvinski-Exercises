const a = 54;
const b = [...a.toString()];

if (b[0] > b[1]) {
    console.log("pirmas didesnis");
} else if (b[0] < b[1]) {
    console.log("antras didesnis");
} else {
    console.log("jie lygus");
}