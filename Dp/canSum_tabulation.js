const canSum = (target, arr) => {
    const table = Array(target + 1).fill(false)
    table[0] = true
    for (let i = 0; i <= target; i++) {
        for (let el of arr) {
            if (i + el <= target) {
                if (table[i] === true) {
                    table[i + el] = true
                }
            }
        }
    }
    return table[target]


}
console.log(canSum(7, [5, 4, 3]))