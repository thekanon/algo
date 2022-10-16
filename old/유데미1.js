/*
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
*/
function validAnagram(str1,str2) {
    const obj1 ={},obj2 = {};
    str1.split("").map((char) => {
        obj1[char] = obj1[char] + 1 || 1;
    })
    str2.split("").map((char) => {
        obj2[char] = obj2[char] + 1 || 1;
    })
    for(let key in obj1) {
        if(obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
validAnagram('aaz', 'zza') // false
