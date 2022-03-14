function getSum(a, b) {
    if (a === b) return a;

    let [start, finish] = a < b ? [a, b] : [b, a];

    let sum = 0;
    for (let i = start; i <= finish; i++) {
        sum += i
    }

    return sum
}

let res = getSum(0, -1);
