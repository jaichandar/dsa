exports.linearSearch = (array, i, val) => {

    if (!array || !array.length || !val) {
        return 'Invalid Inputs'
    }

    if(i > array.length) {
        return -1;
    }

    if (array[i] === val) {
        return i;
    } else {
        return linearSearch(array, i + 1, val)
    }

}