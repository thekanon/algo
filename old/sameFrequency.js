/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. 
Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:

Time: O(N)
Sample Input:
    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/
function sameFrequency(a,b) {
    let a_str = a.toString()
    let b_str = b.toString()
    if(a_str.length !== b_str.length) return false
    let a_map = {}
    let b_map = {}
    for(let i of a_str){
        a_map[i] = (a_map[i] || 0) + 1
    }
    for(let i of b_str){
        b_map[i] = (b_map[i] || 0) + 1
    }
    return (JSON.stringify(a_map) === JSON.stringify(b_map))
}
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
