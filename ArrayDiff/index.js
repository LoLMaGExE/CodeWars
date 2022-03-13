function arrayDiff(a, b) {
    let uniqueList = []

    for (let i = 0; i < a.length; i++) {
        let aElement = a[i];

        let isUnique = true;

        for (let i = 0; i < b.length; i++) {
            const bElement = b[i];

            if (aElement === bElement) {
                isUnique = false
            }
        }

        if (isUnique) {
            uniqueList.push(aElement)
        }
    }

    return uniqueList
}

let [a, b] = [[1, 2, 2, 2, 3], []];

let result = arrayDiff(a, b);
console.log(result);
