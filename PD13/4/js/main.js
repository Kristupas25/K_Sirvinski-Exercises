const a = 17;
const b = -6;
const c = 13;

const diskriminantas = b * b - 4 * a * c;

if (diskriminantas > 0){
    const x1 = (-b + Math.sqrt(diskriminantas)) / (2 * a);
    const x2 = (-b - Math.sqrt(diskriminantas)) / (2 * a);
    console.log("X1 = ", x1, "X2 = ", x2);
}
else if (diskriminantas === 0){
    x1 = -b / (2 * a);
    console.log("x1 = ", x1);
} 
else{
    console.log("Kažkas blogai");
}
