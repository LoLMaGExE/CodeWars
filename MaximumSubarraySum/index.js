var maxSequence = function (arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length ; j++) {
            const element = arr[j];

            sum += element;
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
        
    }

    return maxSum;
};

let data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let res = maxSequence(data);
console.log(res);
