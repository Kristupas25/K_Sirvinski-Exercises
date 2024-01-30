// Ciklas ir sąlyga skaičių filtravimui
for (let skaicius = 1; skaicius <= 300; skaicius++) {
    let dalikliai = 0;

    for (let daliklis = 1; daliklis <= skaicius; daliklis++) {
        if (skaicius % daliklis === 0) {
            dalikliai++;
        }
    }

    if (dalikliai === 5) {
        console.log(skaicius);
    }
}
