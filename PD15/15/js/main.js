function removeElement(arr, element) {
    return arr.filter(e => e !== element);
}

// Example usage:
console.log(removeElement([1, 2, 3, 1, 4], 1)); // [2, 3, 4]
