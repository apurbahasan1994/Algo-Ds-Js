const how_sum = (target, arr) => {
    const table = Array(target + 1).fill(null)
    table[0] = []
    for (let i = 0; i < target; i++) {
        for (let ele of arr) {
            if (i + ele <= target) {
                if (table[i] != null) {
                    table[ele + i] = [...table[i], ele]
                }
            }

        }
    }
    return table[target]
}
console.log(how_sum(7, [5, 4, 3]))