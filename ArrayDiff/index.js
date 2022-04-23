function arrayDiff(FirstArr, SecondArr) {
    let uniqueArr = []

    for (let i = 0; i < FirstArr.length; i++) {
        let FirstElement = FirstArr[i];

        let isUnique = true;

        for (let i = 0; i < SecondArr.length; i++) {
            const SecondElement = SecondArr[i];

            if (FirstElement === SecondElement) {
                isUnique = false
            }
        }

        if (isUnique) {
            uniqueArr.push(FirstElement)
        }
    }

    return uniqueArr
}

let [a, b] = [[1, 2, 2, 2, 3], []];

let result = arrayDiff(a, b);
console.log(result);
