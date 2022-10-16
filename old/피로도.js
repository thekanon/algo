/*
    0번째부터 던전 돌 수 있는지 체크
    못돌면 다음꺼부터 돌 수 있는지 체크
    예)
        0 1 2 3 4 5 6 7 8 9 일때
        0 2 3 에서 4를 못가면 5로 6으로 7로 계속확인
        안되면 3에서 4로 5로 6으로 계속확인

    반례찾기
    80일때 
    80, [[80, 20], [50, 40], [30, 10]]
    3

    80, [[80, 20],[80, 20],[80, 20],[80, 20]]
*/
function solution(k, dungeons) {
    var answer = -1;
    // 0번째부터 던전 돌 수 있는지 체크
    // 못돌면 1번째 돌 수 있는지 체크
    // 끝까지가면 종료
    // 이미 돈 던전은 제외
    const visitDungens = []
    for(var i = 0; i < dungeons.length; i++) {
        visitDungens.push(false)
    }

    const gotoDungeon = (n,i, fatigue,visitDungens) => {
        answer = Math.max(answer, n)
        for(var j = 0; j < dungeons.length; j++) {
            if(visitDungens[j]) {
                continue
            }
            if(fatigue >= dungeons[j][0]) {
                visitDungens[j] = true
                gotoDungeon(n+1,0, fatigue-dungeons[j][1],visitDungens)
                visitDungens[j] = false
            }
        }
        return 
    }
    
    gotoDungeon(0,0,k,visitDungens)
    console.log(answer)
    return answer
}
solution(80, [[80, 20], [50, 40], [30, 10]])
solution(80, [[80, 20],[80, 20],[80, 20],[80, 20]]) //1
