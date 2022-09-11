/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

*/
function maxSubarraySum(arr,n) {
    if(arr.length === 0 || arr.length < n){
        return null
    }
    let j=0, cnt=0, tmp =0;
    for(let i=0;i<arr.length;i++) {
        cnt+=arr[i]
        if(i>=n-1){
            tmp = arr[j]
            arr[j++] = cnt
            cnt-=tmp
        }
    }
    return Math.max(...arr)

}
console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3)) // null
