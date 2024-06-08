// 배열과 값을 받아들이고 값이 존재하는 인덱스를 반환하는 linearSearch라는 함수를 작성하세요. 값이 배열에 없으면 -1을 반환합니다.

function linearSearch(arr, e) {
    // add whatever parameters you deem necessary - good luck!
    // return arr.indexOf(e)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === e) return i
    }
    return -1
}
console.log(
    linearSearch([10, 15, 20, 25, 30], 15) // 1
);
console.log(
    linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
);
console.log(
    linearSearch([100], 100) // 0
);
console.log(
    linearSearch([1, 2, 3, 4, 5], 6) // -1
);
console.log(
    linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
);
console.log(
    linearSearch([100], 200) // -1
);