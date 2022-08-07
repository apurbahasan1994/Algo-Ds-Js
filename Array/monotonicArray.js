function checkIfMonotonic(arr) {

    return checkMonotonicDecreasing(arr) || checkMonotonicIncreasing(arr);
}

function checkMonotonicIncreasing(arr) {

    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;

}
function checkMonotonicDecreasing(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < arr[i + 1]) {
            return false;
        }
    }
    return true;

}
console.log(checkIfMonotonic([1,2,3]));
console.log(checkIfMonotonic([3,2,1]));
console.log(checkIfMonotonic([1,2,2]));
console.log(checkIfMonotonic([3,3,3]));
console.log(checkIfMonotonic([3]));
console.log(checkIfMonotonic([]));
console.log(checkIfMonotonic([2,2,3,1]));
console.log(checkIfMonotonic([1,2,3,1]));