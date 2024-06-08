// 배열과 콜백을 받는 someRecursive라는 재귀 함수를 작성하세요. 콜백에 전달될 때 배열의 단일 값이 true를 반환하면 함수는 true를 반환합니다. 그렇지 않으면 false를 반환합니다.
// SAMPLE INPUT / OUTPUT

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, isOdd) {
    if (arr.length == 0)
        return false
    else if (isOdd(arr.pop()))
        return true
    return someRecursive(arr, isOdd)

}
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)) // false
