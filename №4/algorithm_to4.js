function SevenThirty (m){
    if (!Number.isInteger(m) || m < 1) {
        console.log("Кількість має бути цілим додатним числом");
        return;
    }
    for (let n = 1; n <=m; n++) {
        let x = Math.cos(n + 2) / (Math.pow(n, 2) + 3);
        console.log(x);
    }
}
SevenThirty(7)