function canConstruct(target, str_arr, memo = {}) {
    if (target in memo) {
        return memo[target]
    }
    if (target === '') {
        return true;
    }
    for (let str of str_arr) {
        if (target.startsWith(str)) {
            let str_literal = target.replace(str, '')
            const ans = canConstruct(str_literal, str_arr, memo)
            if (ans) {
                memo[target] = true
                return true;
            }
        }
    }
    memo[target] = false;
    return false;

}
console.log(canConstruct('abcdefgh', ['ab', 'abc', 'cd', 'def', 'abcd']))