// Pradinė ląstelių skaičius
let lasteliuSkaicius = 1;

// Ciklas skaičiavimams
for (let valandos = 3; valandos <= 24; valandos += 3) {
    lasteliuSkaicius *= 2;
    console.log("Po " + valandos + " valandų bus " + lasteliuSkaicius + " ląstelės.");
}
