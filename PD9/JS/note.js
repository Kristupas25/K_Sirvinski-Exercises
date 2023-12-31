let numberX = 10;
let numberY = '20';

// 3. console.log(numberX == numberY); // true
console.log("3. Equal (loose):", numberX == numberY);

// 4. console.log(numberX === numberY); // false
console.log("4. Equal (strict):", numberX === numberY);

// 5. console.log(numberX != numberY); // false
console.log("5. Not Equal (loose):", numberX != numberY);

// 6. console.log(numberX !== numberY); // true
console.log("6. Not Equal (strict):", numberX !== numberY);

// 7. console.log(numberX > numberY); // false
console.log("7. Greater Than:", numberX > numberY);

// 8. console.log(numberX >= numberY); // false
console.log("8. Greater Than or Equal:", numberX >= numberY);

// 9. console.log(numberX < numberY); // true
console.log("9. Less Than:", numberX < numberY);

// 10. console.log(numberX <= numberY); // true
console.log("10. Less Than or Equal:", numberX <= numberY);

// 11. console.log((numberX != numberY)?'It is true':'It is false'); // It is true
console.log("11. Ternary Operator:", (numberX != numberY) ? 'It is true' : 'It is false');