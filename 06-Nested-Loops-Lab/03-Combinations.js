function combinations(input) {
    const n = Number(input[0]);

    let ans = 0;

    for (let i = 0; i <= n; i++) {
        let remaining = n - i;
        for (let j = 0; j <= remaining; j++) {
            ans++;
        }
    }

    console.log(ans);
}