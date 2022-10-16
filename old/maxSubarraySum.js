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
function maxSubarraySum(arr, n) {
    if(n>arr.length) return null
    let result = -Infinity
    let tmp = 0
    for(let i=0;i<n;i++){
        tmp += arr[i]
    }
    for(let i=n;i<arr.length;i++){
        tmp=tmp-arr[i-n]+arr[i]
        result = Math.max(result,tmp)
    }
    return result
}
console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) ) // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null