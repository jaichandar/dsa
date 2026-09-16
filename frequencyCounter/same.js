const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    const hash1 = {};
    const hash2 = {};
    arr1.forEach((val) => {
        if (val in hash1) {
            hash1[val]++;
        } else {
            hash1[val] = 1;
        }
    })
    arr2.forEach((val) => {
        if (val in hash2) {
            hash2[val]++;
        } else {
            hash2[val] = 1;
        }
    })
    for (let val in arr1) {
        const square = val * val;
        if (!(square in hash2)) {
            return false;
        }

        if (hash2[square] !== hash1[val]) {
            return false;
        }
    }
    return true;
}

const result = same([1,2,3,5], [4,1,9,11]);
console.log(result);