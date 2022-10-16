/*
    1. grid의 각 문자열별로 상하좌우를 탐색한다.
    2. 탐색 함수 : S,L,R의 조간에 따른다, 격자를 넘어갈때를 고려한다.
    3. 사이클이 만들어지면 사이클의 탐색 경로를 저장한다.
    4. 중복된 사이클은 검증하여 제거한다.
    5. 저장된 사이클의 길이를 구하고 오름차순으로 정렬한다.
*/
function solution(grid) {
    var answer = [];

    /* 
        x,y : 좌표
        dir : 빛 방향 코드
        path : 시작 방향
    */
    const search = (x,y, dirCode, path) => {
                
    }
    search(0,0,grid[0][0],"D")
    console.log(answer)
    return answer;
}
solution(["SL", "LR"])
solution(["S"])
solution(["R", "R"])