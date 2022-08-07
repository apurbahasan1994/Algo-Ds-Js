function powerSum(arr, level) {
    let sum = 0;
    pow = level;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            const ans = powerSum(arr[i], ++pow);
            pow = level;
            sum = sum + ans;
        }
        else {
            sum += arr[i];
        }
    }
    return Math.pow(sum, level);
}

function main(arr) {
    const ans = powerSum(arr, 1);
    return ans;
}
console.log(main([1, 2, [3, 4], [[2]]]));
console.log(main([1, 2, [3] ]));