/*
    compressed로 하나의 문자열 리턴하는 함수 만듬
*/
function solution(compressed) {
    var answer = '';
    const getString = (arr) => {
        let str = ""
        for( let i = 0; i < arr.length; i++ ) {
            if( arr[i] === "(" ) {
                let repN = parseInt(arr.slice(0,i).join("").match(/^[0-9]*/g))
                let count = 0
                let temp = []
                for( let j = i+1; j < arr.length; j++ ) {
                    if( arr[j] === "(" ) {
                        count++
                    }
                    if( arr[j] === ")" ) {
                        if( count === 0 ) {
                            for( let k = 0; k < repN; k++ ) {
                                str += getString(temp)
                            }
                            i = j
                            break
                        } else {
                            count--
                        }
                    }
                    temp.push(arr[j])
                }
            } else {
                str += arr[i]
            }
        }
        var regex = /^[0-9]*/g;
        var result = str.match(regex);

        // if(result && result[0]) {
        //     let count = result[0]
        //     str = str.slice(count.length)
        //     str = str.repeat(parseInt(count))
        // }
        str = str.replace(/[0-9]*/g, "")
        return str
    }
    compressed = compressed.split("")
    return getString(compressed)
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

