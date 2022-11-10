/*
문제 설명

사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 
길이 5 이하의 모든 단어가 수록되어 있습니다. 사전에서 첫 번째 단어는 "A"이고, 
그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.

단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 
solution 함수를 완성해주세요.
제한사항

    word의 길이는 1 이상 5 이하입니다.
    word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.

1 0
2 00
3 000
4 0000
5 00000
6 00001
7 00002
8 00003
9 00004
10 00005
11 0001
12 00010
13 00011
14 00012
15 00013
16 00014
17 00015
18 0002
19 00020



*/
function solution(word) {
    var answer = 0;
    var arr = ['A','E','I','O','U'];
    /*
        일단 word와 비교함
        word와 다르고, str의 length가 5보다 작으면 str에 arr의 요소를 하나씩 추가함
        
    */
    const getNum = (word,str,cnt) => {
        // console.log(str)
        answer++
        if(word === str){
            // console.log(answer)
            return answer;
        } 
        if(str.length < 5){
            for(let i = 0; i < arr.length; i++){
                let temp = str + arr[i];
                cnt++;
                let result = getNum(word,temp,cnt);
                if(result) return result;
            }
        }
    }   

    for(let i=0;i<arr.length;i++){
        let result = getNum(word,arr[i],0)
        if(result) {
            console.log(answer)
            return answer;
        }
    }
    console.log(answer)
    return -1;
}
// solution("AAAAE")
// solution("AAAE")
solution("I")
// solution("EIO")