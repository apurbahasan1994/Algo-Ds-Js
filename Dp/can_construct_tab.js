function canConstruct(target, str_arr) {
    const table = Array(target.length + 1).fill(false)
    table[0] = true
    for (let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (let str of str_arr) {
                if (target.slice(i, i + str.length) === str) {
                    table[i + str.length] = true
                }
            }
        }
    }
    return table[target.length]

}
console.log(canConstruct('abcdefgh', ['ab', 'abc', 'cd', 'def', 'abcd']))