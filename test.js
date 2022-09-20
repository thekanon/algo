/*
    1. 문자열 붙이기, /,+,-,*를 수행
    1개일때 : N 
    2개일때 : N(+*-/)N 4개
    3개일때 : 
        N(+*-/)N(+*-/)N 16개

    4개일때
        1(+*-/)1(+*-/)1(+*-/)1 (3 1, 1,3)
        2
*/
function solution(N, number) {
    var arr =[]
    if(N==number) return 1;
    for(let i=1; i<=8; i++){
        var str = parseInt((N+"").repeat(i))
        arr.push([str])
        for(let j=1;j<i;j++){
            for(let k of arr[j-1]){
                for(let l of arr[i-j-1]){
                    arr[i-1].push(k+l)
                    arr[i-1].push(k-l)
                    arr[i-1].push(k*l)
                    arr[i-1].push( isNaN(k/l) ? 0 : k/l )
                }
            }
            if(arr[i-1].indexOf(number)!=-1) return i
        }
    }
    return -1
}
console.log(solution(5, 12));
console.log(solution(2, 11));
console.log(solution(3,31));
console.log(solution(4,17));
/*

11
    12
    21
        13
        22
        31
            14
            23
            32
            41
                15
                24
                33
                42
                51
    11
    12 21
    13 22 31 4




    arr[i].push(parseInt(""+arr[i-1][j]+N))
    arr[i].push(parseInt(arr[i-1][j]+N))
    arr[i].push(parseInt(arr[i-1][j]-N))
    arr[i].push(parseInt(arr[i-1][j]*N))
    arr[i].push(isNaN(parseInt(arr[i-1][j]/N)) ? 0 : parseInt(arr[i-1][j]/N) )
*/
