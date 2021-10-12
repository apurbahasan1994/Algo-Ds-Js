function counConstruct(target, arr, memo = {}) {
    if (target in memo) {
        return memo[target]
    }
    let ans = 0
    if (target == '') {
        return 1
    }
    for (let str of arr) {
        if (target.startsWith(str)) {
            let str_literal = target.replace(str, '')
            ans += counConstruct(str_literal, arr, memo)
        }
    }
    memo[target] = ans
    return memo[target]


}
console.log(counConstruct('abc', ['ab', 'c', 'abc', 'cd', 'def', 'abcd']))