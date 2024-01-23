let x = 2;
let y = -2;
let z = 4;


if (x <= y && x <= z) {
    if (y <= z) {
        console.log(`rezultatas: ${x} ${y} ${z}`);
    } else {
        console.log(`rezultatas: ${x} ${z} ${y}`);
    }
} else if (y <= x && y <= z) {
    if (x <= z) {
        console.log(`rezultatas: ${y} ${x} ${z}`);
    } else {
        console.log(`rezultatas: ${y} ${z} ${x}`);
    }
} else {
    if (x <= y) {
        console.log(`rezultatas: ${z} ${x} ${y}`);
    } else {
        console.log(`rezultatas: ${z} ${y} ${x}`);
    }
}