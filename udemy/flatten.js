// 배열의 배열을 받아들이고 모든 값이 평평한 새 배열을 반환하는 flatten이라는 재귀 함수를 작성하십시오.

function flatten(arr) {
    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") {
            arr = [...arr.slice(0, i), ...flatten(arr[i]), ...arr.slice(i + 1, arr.length)]
        }
    }
    return arr
}

console.log(
    flatten([1, 2, 3, [4, 5]])
);// [1, 2, 3, 4, 5]
console.log(
    flatten([1, [2, [3, 4], [[5]]]])
);// [1, 2, 3, 4, 5]
console.log(
    flatten([[1], [2], [3]])
); // [1,2,3]
console.log(
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
);// [1,2,3