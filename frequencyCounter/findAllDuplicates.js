const findAllDuplicates = (arr) => {
    const hash = {};
    const result = [];

    arr.forEach((val) => {
        if (val in hash) {
            hash[val]++;
        } else {
            hash[val] = 1;
        }
    })

    for (let key in hash) {
        if (hash[key] > 1) {
            result.push(Number(key))
        }
    }

    return result;
}

const result = findAllDuplicates([4,3,2,7,8,2,3,1]);
console.log(result);