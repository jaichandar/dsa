
// 1.
// const countUnique = (arr) => {
//     if (!arr.length) return 0;
//     let i = 0;
//     let unique = 1;
    
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             unique++;
//         }
//         i++;
//     }

//     console.log(unique, "<--  after iteration");
// }

// 2.

const countUnique = (arr) => {    
    if (!arr.length) return 0;
    
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }

    return i + 1;
}

const result = countUnique([-2,-1,-1,0,1]);
console.log(result);