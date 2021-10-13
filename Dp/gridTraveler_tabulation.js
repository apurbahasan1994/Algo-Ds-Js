const gridTraveler = (m, n) => {
    const arr = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    arr[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = arr[i][j]
            if (j + 1 <= n) arr[i][j + 1] += current
            if (i + 1 <= m) arr[i + 1][j] += current
        }
    }
    return arr[m][n]
}
console.log(gridTraveler(3, 3))