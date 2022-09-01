/*
6
14
20


1. 만들어야 하는 값 구함(각 큐를 전부 더하고 2로 나눔)
2. 
*/
function solution(queue1, queue2) {
    var answer = -1;

    const work = (flag) => {
        if(flag){
            const el = queue1.shift()
            queue2.push(el)
        } else {
            const el = queue2.shift()
            queue1.push(el)
        }
        console.log(queue1,sum(queue1))
        console.log(queue2,sum(queue2))
        console.log()
    }
    const sum = (arr) => {
        return arr.reduce((acc, cur) => acc + cur, 0)
    }
    if((sum(queue1) + sum(queue2)) %2 !== 0){
        return -1
    }

    for(let i = 0; i < 100; i++){
        if(sum(queue1) === sum(queue2)){
            answer = i
            break
        }
        if(sum(queue1) > sum(queue2)){
            work(true)
        } else {
            work(false)
        }
    }    
    return answer;
}
// let queue1 = [3, 2, 7, 2]
// let queue2 = [4, 6, 5, 1]
let queue1 = [1, 2, 1, 2]
let queue2 = [1, 10, 1, 2]	
// let queue1 = [1, 1]
// let queue2 = [1, 5]	
console.log(
    solution(queue1,queue2)
)