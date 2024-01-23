let a = 40;
let b = 30;
let c = 55;


if (a >= b && a >= c) {
    if (b >= c) {
        sum = a + +b;
        console.log(`didziausia suma yra ${sum} ir tai sudaryta is a ir b`)
    } else {
        sum = a + +c;
        console.log(`didziausia suma yra ${sum} ir tai sudaryta is a ir c`)
    }
} else if (b >= a && b >= c) {
    if (a >= c) {
        sum = b + +a;
        console.log(`didziausia suma yra ${sum} ir tai sudaryta is b ir a`)
    } else {
        sum = b + +c;
        console.log(`didziausia suma yra ${sum} ir tai sudaryta is b ir c`)
    }
} else {
    if (a >= b) {
        sum = c + +a;
        console.log(`didziausia suma yra ${sum} ir tai sudaryta is c ir a`)
    } else {
        sum = c + +b;
        console.log(`didziausia suma yra ${sum} ir tai sudaryta is c ir b`)
    }
}

