/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:

Time - O(n)
Space - O(n)
Bonus:
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
