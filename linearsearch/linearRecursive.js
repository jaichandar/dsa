const linearSearch = (array, i, val) => {

    if (array && array.length && val) {

        if (i >= array.length) {
            if (array[i] !== val) {
                return -1
            }
        }

        if (array[i] === val) {
            return array[i];
        } else {
            return linearSearch(array, i + 1, val);
        }

    } else {
        throw new Error('Invalid Inputs');
    }

}

const result = linearSearch([1,2,3,4,5,6], 0, 3);
console.log(result);