let x = 5;

let discriminant = 172 - 6 * x + 13;

if (discriminant > 0) {
    console.log("Lygtis turi du skirtingus sprendinius.");
} else if (discriminant === 0) {
    console.log("Abu sprendiniai sutampa.");
} else {
    console.log("Lygtis neturi sprendinių realiųjų skaičių aibėje.");
}
