const howSum = (target, arr, memo = {}) => {
    if (target in memo) {
        return memo[target]
    }
    if (target === 0) {
        return []
    }
    if (target < 0) {
        return null
    }
    for (const item of arr) {
        let ans = howSum(target - item, arr, memo)
        if (ans !== null) {
            memo[target] = [...ans, item]
            return memo[target]
        }
    }
    memo[target] = null
    return null
}

console.log(howSum(300, [7, 15]))