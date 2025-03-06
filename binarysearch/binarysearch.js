const binarySearch = (array, target) => {

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor(start + end / 2);

        if (array[middle] === target) {
            return middle // index
        }
        // } else if (array[middle])
    }

}

const result = binarySearch([1,2,3,4,5,6,7,8,9,0], 8);
console.log(result);