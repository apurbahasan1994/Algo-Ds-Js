function allConstruct(target, str_arr) {
    const table = Array(target.length + 1).fill().map(() => {
        return []
    })
    table[0].push([])
    for (let i = 0; i <= target.length; i++) {
        for (let str of str_arr) {
            if (target.slice(i, i + str.length) === str) {

                const combination = table[i].map(subarray => [...subarray, str])
                if (i + str.length <= target.length) {
                    table[i + str.length].push(...combination)
                }


            }


        }

    }
    return table[target.length]

}
console.log(allConstruct('abcdef', ['ab', 'abc', 'c', 'cd', 'def', 'abcd', 'ef']))