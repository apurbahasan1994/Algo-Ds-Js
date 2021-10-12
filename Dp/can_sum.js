const canSum = (target, arr, memo = {}) => {
    if (target in memo) {
        return memo[target]
    }
    if (target == 0) {
        return true;
    }
    if (target < 0) {
        return false;
    }
    for (let el of arr) {
        if (canSum(target - el, arr, memo) === true) {
            memo[target] = true
            return true;
        }
    }
    memo[target] = false
    return false;
}
console.log(canSum(7, [5, 3]))