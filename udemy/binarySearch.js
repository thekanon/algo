// 정렬된 배열과 값을 받아들이고 값이 존재하는 인덱스를 반환하는 binarySearch라는 함수를 작성하세요. 그렇지 않으면 -1을 반환합니다.
function binarySearch(arr, e) {
  let l = 0
  let r = arr.length - 1
  let c = parseInt((r - l) / 2)

  while (true) {
    if (arr[c] === e)
      return c
    else if (arr[c] < e) {
      l = c + 1
      c = parseInt((r - l) / 2) + l
    } else if (arr[c] > e) {
      r = c - 1
      c = parseInt((r - l) / 2) + l
    }
    if (l > r)
      return -1
  }
}
console.log(
  binarySearch([1, 2, 3, 4, 5], 5)
)
console.log(
  binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)
)

