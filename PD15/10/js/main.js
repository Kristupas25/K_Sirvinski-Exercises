function removeDuplicates(arr) {
    return [...new Set(arr.map(e => e.toLowerCase()))];
}

// Example usage:
console.log(removeDuplicates(['A', 'a', 'B', 'b', 'A'])); // ['a', 'b']
