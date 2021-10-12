function allConstruct(target, str_arr, memo = {}) {
    if (target in memo) {
        return memo[target]
    }
    let ans = []
    if (target === '') {
        return [[]];
    }
    for (let str of str_arr) {
        if (target.startsWith(str)) {
            let str_literal = target.replace(str, '')
            const ans_arr = allConstruct(str_literal, str_arr, memo)
            const ways = ans_arr.map(way => {
                return [str, ...way]
            })
            ans.push(...ways)
        }
    }
    memo[target] = ans
    return memo[target]

}
console.log(allConstruct('abcdef', ['ab', 'abc', 'c', 'cd', 'def', 'abcd']))