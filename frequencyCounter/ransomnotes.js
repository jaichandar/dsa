const ransomNotes = (ransomNote, magazine) => {
    const hash1 = {};
    const hash2 = {};

    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];

        if (char in hash1) {
            hash1[char]++;
        } else {
            hash1[char] = 1;
        }
    }

    for (let j = 0; j < ransomNote.length; j++) {
        const char = ransomNote[j];

        if (char in hash2) {
            hash2[char]++;
        } else {
            hash2[char] = 1;
        }
    }

    for (let key in hash2) {
        if (!(key in hash1)) {
            return false;
        }

        if (hash2[key] > hash1[key]) {
            return false;
        }
    }
    return true;
}

const result = ransomNotes('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj');
// const result = ransomNotes('aa', 'ab');
console.log(result);