const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            const arr2Index = arr2.indexOf(arr1[i] * arr1[i]);
            if (arr2Index === -1) {
                return false;
            }
            arr2.splice(arr2Index, 1)
        }
        return true;
    }
}
const result = same([1,2,3,5], [1,9,4,11]);
console.log(result);