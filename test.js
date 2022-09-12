/*
Multiple Pointers - averagePair

Write a function called averagePair. 
Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)
Space: O(1)
Sample Input:
    averagePair([1,2,3],2.5) // true
    averagePair([1,3,3,5,6,7,10,12,19],8) // true
    averagePair([-1,0,3,4,5,6], 4.1) // false
    averagePair([],4) // false
*/
function areThereDuplicates(...args) {
    let map = {}
    for(let i of args){
        map[i] = (map[i] || 0) + 1
    }
    for(let i in map){
        if(map[i] > 1) return true
    }
    return false
}
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 
