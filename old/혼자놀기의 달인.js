/*
혼자놀기의 달인
8, 6, 3, 7, 2, 5, 1, 4
1, 2, 3, 4, 5, 6, 7, 8

0, 6, 3, 0, 2, 5, 0, 0  = 4

8, 0, 3, 7, 0, 0, 1, 4  = 3

8, 6, 0, 7, 2, 5, 1, 4  = 1

0, 6, 3, 0, 2, 5, 0, 0  = 4

그냥 0부터 끝까지 게임을 해보면 됨
*/
function solution(cards) {
    let max1 = 0
    let max2 = 0
    const playGame = (cards, index) => {
        let i = index
        let cnt = 0
        while(cards[i]!=-1){
            let tmp = cards[i]-1
            cards[i]=-1
            i = tmp
            cnt++
        }
        return cnt
    }
    for(let i in cards){
        const max = playGame(cards,i)
        if(max1<max){
            max2 = max1
            max1 = max
        }
        else if(max2<max){
            max2 = max
        }

    }
    return max1 * max2;
}
solution([8, 6, 3, 7, 2, 5, 1, 4])
//반례 1 하나의 상자 안에 다 들어갈때
solution([2,3,4,1]) // 0
//반례 2 모든 카드가 다른 상자에 들어갈때
solution([2,1,4,3]) //2