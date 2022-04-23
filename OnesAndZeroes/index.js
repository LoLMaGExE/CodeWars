const binaryArrayToNumber = arr => {
    let num = 0;

    console.log(arr);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
        const i = arr.length - index - 1;
        
        const iElement = element * Math.pow(2, i)
        console.log(element, i, iElement);
        num += iElement
    }    
    return num
};

console.log(binaryArrayToNumber([0,0,0,1,1,0]));