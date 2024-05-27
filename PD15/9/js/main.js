function sumAndProduct(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const product = arr.reduce((acc, curr) => acc * curr, 1);
    return { sum, product };
}

// Example usage:
console.log(sumAndProduct([1, 2, 3, 4])); // { sum: 10, product: 24 }
