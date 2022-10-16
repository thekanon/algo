/*
    퍼즐 조각 채우기
    만들 기능
    공간
        0. 공간 추출
            0이 연결된 부분을 추출(재귀함수)
    조각
        0. 조각 추출
        1. 조각 회전
        2. 조각 끼우기

*/
function solution(game_board, table) {
    var answer = 0;
    const getpiece = (arr, tableFlag) => {
        const fillArr = (ii, jj, cnt) => {
            arr[ii][jj] = cnt;
            if (jj-1 >= 0 && arr[ii][jj - 1] === tableFlag) {   //좌
                fillArr(ii, jj - 1, cnt);
            }

            if (jj <= arr[ii].length && arr[ii][jj + 1] === tableFlag) {   //우
                fillArr(ii, jj + 1, cnt);
            } 
            if (ii + 1 < arr.length && arr[ii + 1][jj] === tableFlag) {          //하
                fillArr(ii + 1, jj, cnt);
            }
            if (ii-1 >= 0 && arr[ii - 1][jj] === tableFlag) {   //좌
                fillArr(ii - 1, jj, cnt);
            }
            return;
    }

        let cnt = 2
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] === tableFlag) {
                    fillArr(i, j, cnt++);
                }
            }
        }
        //공간 구함
        printArray(arr)
        //구한 공간을 이용해 조각을 구함
        const piece = [];
        for (let i = 2; i < cnt; i++) {
            let x1 = -1, x2 = -1, y1 = -1, y2 = -1;
            for (let j = 0; j < arr.length; j++) {
                for (let k = 0; k < arr[j].length; k++) {
                    if (arr[j][k] === i) {
                        if (x1 === -1) {
                            x1 = j;
                            y1 = k;

                            x2 = j;
                            y2 = k;
                        } else {
                            if (y1 > k) {
                                y1 = k;
                            }
                            if (k > y2) {
                                y2 = k;
                            }
                            x2 = j;
                        }
                    }
                }
            }
            // 각 조각의 인덱스로 새로운 배열 생성
            // console.log(x1,y1,x2,y2)
            let tmp = []
            for (let j = x1; j <= x2; j++) {
                tmp.push([])
                for (let k = y1; k <= y2; k++) {
                    if (arr[j][k] === i) {
                        tmp[tmp.length - 1].push(1)
                    } else {
                        tmp[tmp.length - 1].push(0)
                    }
                }

            }
            //공간 조각 배열에 넣기
            piece.push(tmp)
        }
        // piece.map(e=>printArray(e))
        // console.log("*".repeat(50))
        return piece;
    }
    const arrRotation = (arr) => {
        let tmp = [];
        for (let i = 0; i < arr[0].length; i++) {
            tmp.push([])
            for (let j = 0; j < arr.length; j++) {
                tmp[i].push(arr[arr.length - 1 - j][i])
            }
        }
        return tmp;
    }

    const spacePiece = getpiece(game_board, 0).map(e => JSON.stringify(e));
    // console.log(spacePiece)
    // console.log(arrRotation(tablePiece[3]))
    // console.log(arrRotation([[1,2,3],[4,5,6],[7,8,9]]))

//[0, 1, 0, 1, 1, 1, 1, 0, 1]
//[0, 1, 0, 0, 0, 1, 1, 0, 1]
    const tablePiece = getpiece(table, 1);
    for (let i = 0; i < tablePiece.length; i++) {
        for (let j = 0; j < 4; j++) {
            tablePiece[i] = arrRotation(tablePiece[i])
            if (spacePiece.indexOf(JSON.stringify(tablePiece[i])) !== -1) {
                // console.log(tablePiece[i])
                // printArray(tablePiece[i])
                // console.log(spacePiece[spacePiece.indexOf(JSON.stringify(tablePiece[i]))])
                spacePiece.splice(spacePiece.indexOf(JSON.stringify(tablePiece[i])), 1)
                answer += tablePiece[i].reduce((a, b) => a + b.reduce((c, d) => c + d, 0), 0)
                // console.log(answer)
                break
            }
            // console.log(JSON.stringify(tablePiece[i]))
        }
    }
    return answer;
}
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let str = ""
        for (let j = 0; j < arr[i].length; j++) {
            str += arr[i][j] + " "
        }
        console.log(str)
    }
    console.log("=====================================")
}
//case1
var game_board = [[1, 1, 0, 0, 1, 0], [0, 0, 1, 0, 1, 0], [0, 1, 1, 0, 0, 1], [1, 1, 0, 1, 1, 1], [1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 0, 0]];
var table = [[1, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 0], [0, 1, 1, 0, 1, 1], [0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 1, 0], [0, 1, 0, 0, 0, 0]];


// var game_board = [
//     [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, ],
//     [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, ],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, ],
//     [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, ],
//     [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, ],
//     [0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, ],
//     [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, ],
//     [0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, ],
//     [1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, ],
//     [0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, ],
//     [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, ],
//     [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, ]]
// var table = [
//     [1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, ],
//     [1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, ],
//     [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, ],
//     [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, ],
//     [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, ],
//     [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, ],
//     [1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, ],
//     [1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, ],
//     [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, ],
//     [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, ],
//     [1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, ],
//     [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, ]]
console.log(solution(game_board, table))
//case2
// var game_board = [[0,0,0],[1,1,0],[1,1,1]]	
// var table = [[1,1,1],[1,0,0],[0,0,0]]
// console.log(solution(game_board, table))
