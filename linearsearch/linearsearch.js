exports.linearSearch = (array, value) => {
    if (array && array.length && value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return array[i]
            }
        }
        return -1;
    } else {
        throw new Error('Invalid input')
    }
}
