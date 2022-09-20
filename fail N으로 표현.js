/*
    N으로 표현
    12 = 5 + 5 + (5 / 5) + (5 / 5)
    12 = 55 / 5 + 5 / 5
    12 = (55 + 5) / 5

    +5부터 시작해서 
    55 할지
    5+5 할지
    5-5 할지
    5*5 할지
    5/5 할지

    분기처리함

    풀었는데 반만 맞음
    반례 찾아야함.

*/
function solution(N, number) {
    var answer = -1;
    if(number>32000 || N>9)
        return -1
    const drawExpression = (num, count,str) => {
        if (count > 8 ) {
            // answer = -1
            return
        }
        if (num === number) {
            if(answer === -1 || answer > count) {
                console.log(str,count,answer)
                answer = count            
            }
            return
        }
        if(count!==0){
            drawExpression(num + N, count + 1, str + '+'+ N)  
            drawExpression(num - N, count + 1, str + '-'+ N)  
            drawExpression(num * N, count + 1, str + '*'+ N)  
            drawExpression(parseInt(num / N), count + 1, str + '/'+ N) 
            drawExpression(num+1, count + 2, str + '+('+ N+"/"+N+")")      
            drawExpression(num-1, count + 2, str + '-('+ N+"/"+N+")")      

        }
        drawExpression(parseInt(num +""+N), count + 1, str+''+N)  
    }
    drawExpression(0, 0,"")
    return answer;
}
console.log(solution(5, 12))
// console.log(solution(2, 11))
// console.log(solution(4, 31))
// console.log(solution(4, 17))
// console.log(solution(5, 26))
// console.log(solution(8, 5800))
// (444-44)*4