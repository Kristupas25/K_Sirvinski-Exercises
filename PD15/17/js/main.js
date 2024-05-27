function rangeArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

// Example usage:
console.log(rangeArray(1, 5)); // [1, 2, 3, 4, 5]
