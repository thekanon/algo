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

for문 하나로 줄여야함
3 2 7 2 4 6 5 1 3 2 7 2 4 6 5 1
이므로 q1+q2+q1+q2 한번만 돌리면 됨.

만약 필요한 값보다 모자라면 q2에서 q1에 넣어야함
만약 필요한 값보다 많으면 q1에서 q2에 넣어야함
만약 q1과 q2의 합이 필요한 값과 같으면 그때의 result를 리턴

*/
function solution(queue1, queue2) {
    const arr = [...queue1, ...queue2, ...queue1, ...queue2]
    let eq = arr.reduce((acc, cur) => acc + cur, 0)
    let total = queue1.reduce((acc, cur) => acc + cur, 0)
   
    if(eq % 4 === 1){
        return -1
    }

    for(let i=queue1.length, j=0; i < arr.length;){
        console.log(total,eq/4)
        if( total<eq/4 ){
            total += arr[i]
            i++
        }else if(total > eq/4){
            total -= arr[j]
            j++
        } else if(total === eq/4){
            return i+j-queue1.length
        }
    }
    return -1;
}
let queue1 = [3, 2, 7, 2]
let queue2 = [4, 6, 5, 1]
// let queue1 = [1, 2, 1, 2]
// let queue2 = [1, 10, 1, 2]	
// let queue1 = [2, 1, 4, 2]
// let queue2 = [5, 3, 4, 3]	
// let queue1 = [1, 1]
// let queue2 = [1, 5]	
console.log(
    solution(queue1,queue2)
)