var countBits = function(n) {
    let number = n
    let bits = 0;

    while (number > 0) {
        if (number % 2 === 1) {
            bits++;
            number = Math.floor(number / 2);
        } else {
            number = Math.ceil(number / 2);
        }
    }
    
    return bits
  };

let number = 10; // 10010

let result = countBits(number)
console.log(result);