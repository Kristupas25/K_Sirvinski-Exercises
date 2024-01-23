const apskritimoSpindulys = 2;
const apskritimoPlotas = Math.PI * Math.pow(apskritimoSpindulys, 2);

const kvadratoKrastine = 5;
const kvadratoPlotas = Math.pow(kvadratoKrastine, 2);

const staciakampioIlgis = 5;
const staciakampioKrastine = 3;
const staciakampioPlotas = staciakampioIlgis * staciakampioKrastine;

if (apskritimoPlotas >= kvadratoPlotas && apskritimoPlotas >= staciakampioPlotas) {
    console.log("apskritimas rulit");
} else if (kvadratoPlotas >= apskritimoPlotas && kvadratoPlotas >= staciakampioPlotas) {
    console.log("kvadratas rulit");
} else if (staciakampioPlotas >= apskritimoPlotas && staciakampioPlotas >= kvadratoPlotas) {
    console.log("staciakampis rulit");
} else {
    console.log("nu cia jau nieko nedariau toliau");
}