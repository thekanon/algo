
/*
    배열에서 숫자 뽑아서 오브젝트에 넣고 해당 값이 
*/
function solution(arr) {
    let obj = {}
    for( let i = 0; i < arr.length; i++ ) {
        arr[i] = ((arr[i]+"").split("")).sort()
        obj[arr[i]] = obj[arr[i]] + 1 || 1
    }
    return Object.values(obj).length
}
console.log(
    solution(
        "3(hi)"
    )
)
console.log(
    solution(
        "2(3(hi)co)"
    )
)
console.log(
    solution(
        "10(p)"
    )
)
console.log(
    solution(
        "2(2(hi)2(co))x2(bo)"
    )
)
