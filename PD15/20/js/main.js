function findNaNIndices(arr) {
    const indices = [];
    arr.forEach((value, index) => {
        if (Number.isNaN(value)) {
            indices.push(index);
        }
    });
    return indices;
}

// Example usage:
console.log(findNaNIndices([1, NaN, 2, NaN, 3])); // [1, 3]
