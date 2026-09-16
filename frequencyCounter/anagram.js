const anagram = (str1, str2) => {
    if (str1 === str2) return true;
    if (str1.length !== str2.length) return false;

    const hash1 = {};
    const hash2 = {};

    for (let char of str1) {
        if (char in hash1) {
            hash1[char]++;
        } else {
            hash1[char] = 1;
        }
    }
    
    for (let char of str2) {
        if (char in hash2) {
            hash2[char]++;
        } else {
            hash2[char] = 1;
        }
    }

    for (let key in hash1) {
        if (!(key in hash2)) {
            return false;
        }
        if (hash1[key] !== hash2[key]) {
            return false;
        }
    }
    return true;
}

const result = anagram('qwerty', 'qeywrt');
console.log(result);