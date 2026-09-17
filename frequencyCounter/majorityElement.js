const majorityElement = (nums) => {
    const hash = {};

    nums.forEach((val) => {
        if (val in hash) {
            hash[val]++;
        } else {
            hash[val] = 1;
        }
    })
    let max = 0
    let value = 0;

    for (let key in hash) {
        if (hash[key] > value) {
            max = Number(key);
            value = Number(hash[key]);
        }
    }
    return max;
}

const result = majorityElement([2,2,1,1,1,2,2]);
console.log(result);