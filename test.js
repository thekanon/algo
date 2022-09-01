/*
1. que1이 que2보다 크면 que1빼서 que2에 넣는 작업 수행
2. 반복

이거 시간초과남
shift랑 push가 시간초과를 일으키는 것 같음

i.      j
3 2 7 2 4 6 5 1 3 2 7 2 4 6 5 1
          ij
1 2 1 2	1 10 1 2 1 2 1 2 1 10 1 2

i가 1이고
j가 4일때 정답임

i는 shift 1회를 뜻함
j는 

i=5
j=5
len=4

i = 5
i+(len-j) = 

i+(i+len-j) = 

4-4 = 0
4-4 = 0

4-1 = 3
4-7 = -3

1, 2, 1, 2,	1, 10, 1, 2, 1, 2, 1, 2, 1, 10, 1, 2
*/
function solution(queue1, queue2) {
    var answer = -1;

    const arr = [...queue1, ...queue2, ...queue1, ...queue2]
    let eq = (queue1.reduce((acc, cur) => acc + cur, 0) + queue2.reduce((acc, cur) => acc + cur, 0))
    let total = 0

    if(eq % 2 === 1){
        return -1
    }
    let len1 = queue1.length
    let len2 = queue2.length
    for(let i = 0; i < arr.length; i++){
        let totalArr = []
        for(let j = i; j < arr.length; j++){
            if(total === eq/2){
                answer = i - len1 + 1
                console.log(totalArr)
                console.log(arr.slice(j,j+((arr.length/2)-totalArr.length)))
                total = 0
                totalArr = []
                return
                break
            } else if(total > eq/2){
                total = 0
                totalArr = []
                break
            }
            total += arr[j]
            totalArr.push(arr[j])
        }
    }

    return answer;
}
// let queue1 = [3, 2, 7, 2]
// let queue2 = [4, 6, 5, 1]
// let queue1 = [1, 2, 1, 2]
// let queue2 = [1, 10, 1, 2]	
let queue1 = [4, 4, 5, 2]
let queue2 = [5, 1, 1, 2]	
// let queue1 = [1, 1]
// let queue2 = [1, 5]	
console.log(
    solution(queue1,queue2)
)