/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and 
checks whether the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
1. st1을 돌면서 str2를 찾음

*/
function isSubsequence(str1, str2) {
    let index = 0
    let cnt = 0
    for (let i = 0; i < str1.length; i++) {
        while (index < str2.length) {
            if (str1[i] === str2[index]) {
                cnt++
                index++;
                break;
            }
            index++;
        }
    }
    if(cnt === str1.length) return true;
    return false;
}
console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))