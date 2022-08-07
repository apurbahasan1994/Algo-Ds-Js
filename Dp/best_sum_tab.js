const best_sum = (target, arr) => {
    const table = Array(target + 1).fill(null)
    table[0] = []
    for (let i = 0; i < target; i++) {
        for (let ele of arr) {
            if (i + ele <= target) {
                if (table[i] != null) {
                    let newArr = [...table[i], ele]
                    if (!table[i + ele] || table[i + ele].length >= newArr.length) {
                        table[i + ele] = newArr
                    }

                }
            }

        }
    }
    return table[target]
}
console.log(best_sum(8, [2, 3, 5]))