const intersection = (num1, num2) => {
    const hash1 = {};

    num1.forEach((val) => {
        if (val in hash1) {
            hash1[val]++;
        } else {
            hash1[val] = 1;
        }
    })

    const result = [];

    num2.forEach((val) => {
        if (val in hash1 && hash1[val] > 0) {
            result.push(val);
            hash1[val]--;
        }
    })

    return result;
}

const result = intersection([4,9,5], [9,4,9,8,4]);
console.log(result);