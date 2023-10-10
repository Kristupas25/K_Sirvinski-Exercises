let isTrue = true;
let isFalse = false;

// 3. console.log(isTrue && isTrue); // true
console.log("3. AND:", isTrue && isTrue);

// 4. console.log(isTrue && isFalse); // false
console.log("4. AND:", isTrue && isFalse);

// 5. console.log(isFalse && isFalse); // false
console.log("5. AND:", isFalse && isFalse);

// 6. console.log(isTrue || isTrue); // true
console.log("6. OR:", isTrue || isTrue);

// 7. console.log(isTrue || isFalse); // true
console.log("7. OR:", isTrue || isFalse);

// 8. console.log(isFalse || isFalse); // false
console.log("8. OR:", isFalse || isFalse);

// 9. console.log(!isTrue); // false
console.log("9. NOT:", !isTrue);

// 10. console.log(!isFalse); // true
console.log("10. NOT:", !isFalse);

// 11. console.log(!isFalse && isTrue); // true
console.log("11. NOT AND:", !isFalse && isTrue);

// 12. console.log(!isFalse && !isTrue); // false
console.log("12. NOT AND:", !isFalse && !isTrue);

// 13. console.log(!isFalse || isTrue); // true
console.log("13. NOT OR:", !isFalse || isTrue);