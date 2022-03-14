function solution(str) {
    let res = [];
    str = str.length % 2 === 0 ? str : str + "_";

    for (let i = 0; i < str.length; i += 2) {
        res.push(str[i] + str[i + 1]);
    }

    return res;
}

let res = solution("kdlfjfkjsdf");
console.log(res);
