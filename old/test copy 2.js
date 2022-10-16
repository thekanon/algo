/*
    유저와 이모티콘 비율이 정해지면 가입자와 금액 구하는 프로그램 작성
    
    이모티콘별 할인률 구하는 방법
        a
        b
        c
        d
        가 있을때

        a 10 20 30 40
            b 10 20 30 40
                c 10 20 30 40
*/
function solution(users, emoticons) {
    let tArr = []
    let maxResult = [-1,-1]

    DFS(0, emoticons.length, 0, [])

    for(let z=0;z<tArr.length;z++){
        let amount = 0;
        let emtplus = 0

        let emtObj = emoticons.map((v,i) => {
            return {
                amt: parseInt(v),
                ratio: tArr[z][i]
            }
        })


        for (let i = 0; i < users.length; i++) {
            let userAmount = 0
            for (let j = 0; j < emtObj.length; j++) {
                if (emtObj[j].ratio/100 >= users[i][0] / 100) {
                    userAmount += (emtObj[j].amt * (1 - emtObj[j].ratio/100))
                }
            }
            if (userAmount < users[i][1]) {
                amount += userAmount
            } else {
                emtplus++
            }
        }
        if(emtplus > maxResult[0]){
            maxResult = [emtplus, amount]
        }if(emtplus === maxResult[0] && amount > maxResult[1]){
            maxResult = [emtplus, amount]
        }
    }
console.log(maxResult)

    //
    // emtObj = [ { amt: 7000, ratio: 0.3 }, { amt: 9000, ratio: 0.4 } ]
    function DFS(n, m, i, arr) {
        if(arr.length>=m){
            tArr.push(arr)
            return arr
        }
        DFS(n,m,i+1,[...arr,10])
        DFS(n,m,i+1,[...arr,20])
        DFS(n,m,i+1,[...arr,30])
        DFS(n,m,i+1,[...arr,40])
    }
    
    // console.log(tArr)

    // return [amount, emtplus]
}
// solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]) //16
// solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]) //30
// solution([[40, 10000], [25, 10000]], [7000, 9000]) //[1, 5400]
solution([[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]], [1300, 1500, 1600, 4900]) // [4, 13860]
