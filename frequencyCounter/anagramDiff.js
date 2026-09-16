const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const lookup = {};
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] in lookup) {
            lookup[str1[i]]++; 
        } else {
            lookup[str1[i]] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        if (!(char in lookup)) {
            return false;
        }
        lookup[char]--;
    }
    return true;
}

const result = anagram('anagram', 'nagaram');
console.log(result);