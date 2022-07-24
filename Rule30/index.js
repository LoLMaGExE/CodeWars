function rule30(list, n) {
    const lastList = list;
    const innerList = [];

    for (let j = 0; j < n; j++) {
        innerList.length = 0;
        for (let i = -1; i < lastList.length + 1; i++) {
            const subList = [lastList[i - 1], lastList[i], lastList[i + 1]];
            const newState = getNextState(...subList);
            innerList.push(newState);
        }

        lastList.length = 0;
        lastList.push(...innerList);
    }
    return lastList;
}

function getNextState(first, middle, last) {
    return first && middle && last
        ? 0
        : first && middle && !last
            ? 0
            : first && !middle && last
                ? 0
                : !first && !middle && !last
                    ? 0
                    : 1;
}

const startArr = [1];
const n = 10;
const res = rule30(startArr, n);
