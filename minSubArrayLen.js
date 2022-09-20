/**
 * 1 2 3 4 5
 * 12 23 34 45
 * 123 234 345
 * 1234 2345
 * 12345
 */
function minSubArrayLen(arr, n) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    if(sum<n) return 0

    for(let i=1;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr.slice(j, j+i).reduce((acc, cur) => acc + cur, 0) >= n){
                return i
            }
        }
    }
    return
}
console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0