/*
    Given a sorted array of integers, write a function called search, 
    that accepts a value and returns the index where the value passed to the function is located. 
    If the value is not found, return -1
*/
function search(arr, n) {
    let mid = Math.floor(arr.length / 2)
    //binary search
    const binarySearch = (arr, n, start, end)=> {
        console.log(n, start, end)
        if(start > end) return -1
        let mid = Math.floor((start + end) / 2)
        if(arr[mid] === n) return mid
        if(arr[mid] < n) return binarySearch(arr, n, mid+1, end)
        if(arr[mid] > n) return binarySearch(arr, n, start, mid-1)
    }
    return binarySearch(arr, n, 0, arr.length-1)
}
console.log(search([1, 2, 3, 4, 5, 6,7,8,9,10], 4)) // 3
console.log(search([1, 2, 3, 4, 5, 6,7,8,9,10], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6,7,8,9,10], 11)) // -1