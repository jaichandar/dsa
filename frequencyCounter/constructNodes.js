function constructNote(str1, str2){
    if (!str1.length && !str2.length) return false;
    
    const hash = {};

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] in hash) {
            hash[str2[i]]++;
        } else {
            hash[str2[i]] = 1;
        }
    }
    for (let i = 0; i < str1.length; i++) {
        const value = str1[i];
        if ((value in hash) && hash[value] === 0) {
            return false;
        }
        if (value in hash) {
            hash[value]--;
        }
    }
    return true;
}

// const result = constructNote('aabbcc', 'bcabcaddff');
const result = constructNote('', '');
console.log(result);