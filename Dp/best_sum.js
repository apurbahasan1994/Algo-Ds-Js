function bestSum(target, nums, memo = {}) {
    if (target in memo) {
        return memo[target]
    }
    let shortestCombination = null
    if (target == 0) {
        return []
    }
    if (target < 0) {
        return null
    }
    for (let item of nums) {
        ans = bestSum(target - item, nums, memo)
        if (ans !== null) {
            const combination = [...ans, item]
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
                memo[target] = shortestCombination
            }
        }
    }
    memo[target] = shortestCombination
    return memo[target]
}
console.log(bestSum(100, [2, 3, 5, 25]))