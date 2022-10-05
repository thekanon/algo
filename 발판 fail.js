/*
    1. 특정 위치에서 플레이어가 움직이는 모든 경우의 수 구하는 프로그램 만들기
*/

function solution(board, aloc, bloc) {
    var answer = -1;
    let maxCnt = Number.MAX_SAFE_INTEGER
    const printArr  = (arr,path)=> {
        for(let i=0; i<arr.length; i++) {
            console.log(arr[i].join(' '))
        }
        console.log(path)
        console.log('----------------')
    }
    const exSearch = (arr, [x,y], [z,w],cnt,turn,path) => {
        // printArr(arr,path)
        if(turn==="A") {
            turn = "B"
            let tmpPath = path
            if (arr[x][y+1] === 1) {
                arr[x][y+1] = 0
                exSearch(arr, [x,y+1],[z,w], cnt+1,turn,path+="A "+x+(y+1)+",")
                path = tmpPath
                cnt--
                arr[x][y+1] = 1
            }
            if (arr[x][y-1] === 1) {
                arr[x][y-1] = 0
                exSearch(arr, [x,y-1],[z,w], cnt+1,turn,path+="A "+x+(y-1)+",")
                path = tmpPath
                arr[x][y-1] = 1
                cnt--
            }
            if (arr[x+1] && arr[x+1][y] === 1) {
                arr[x+1][y] = 0
                exSearch(arr, [x+1,y],[z,w], cnt+1,turn,path+="A "+(x+1)+y+",")
                path = tmpPath
                arr[x+1][y] = 1
                cnt--
            }
            if (arr[x-1] && arr[x-1][y] === 1) {
                arr[x-1][y] = 0
                exSearch(arr, [x-1,y],[z,w], cnt+1,turn,path+="A "+(x-1)+y+",")
                path = tmpPath
                arr[x-1][y] = 1
                cnt--
            }
            let moveFlag = 0
            moveFlag += arr[x][y+1] ? arr[x][y+1] : moveFlag
            moveFlag += arr[x][y-1] ? arr[x][y-1] : moveFlag
            moveFlag += arr[x-1] ? arr[x-1][y] : moveFlag
            moveFlag += arr[x+1] ? arr[x+1][y] : moveFlag

            if(moveFlag === 0) {
                maxCnt = Math.min(maxCnt, path.split(",").length)
                // console.log(path)
                printArr(arr,path)
                path=""
            }
            turn = "A"
        } else {
            turn = "A"
            let tmpPath = path
            if (arr[z][w+1] === 1) {
                arr[z][w+1] = 0
                exSearch(arr, [x,y],[z,w+1], cnt+1,turn,path+="B "+z+(w+1)+",")
                arr[z][w+1] = 1
                path = tmpPath
                cnt--
            }
            if (arr[z][w-1] === 1) {
                arr[z][w-1] = 0
                exSearch(arr, [x,y],[z,w-1], cnt+1,turn,path+="B "+z+(w-1)+",")
                arr[z][w-1] = 1
                path = tmpPath
                cnt--
            }
            if (arr[z+1] && arr[z+1][w] === 1) {
                arr[z+1][w] = 0
                exSearch(arr, [x,y],[z+1,w], cnt+1,turn,path+="B "+(z+1)+w+",")
                arr[z+1][w] = 1
                path = tmpPath
                cnt--
            }
            if (arr[z-1] && arr[z-1][w] === 1) {
                arr[z-1][w] = 0
                exSearch(arr, [x,y],[z-1,w], cnt+1,turn,path+="B "+(z-1)+w+",")
                arr[z-1][w] = 1
                path = tmpPath
                cnt--
            }
            let moveFlag = 0
            moveFlag += arr[z][w+1] ? arr[z][w+1] : moveFlag
            moveFlag += arr[z][w-1] ? arr[z][w-1] : moveFlag
            moveFlag += arr[z-1] ? arr[z-1][w] : moveFlag
            moveFlag += arr[z+1] ? arr[z+1][w] : moveFlag
            turn = "B"

            if(moveFlag === 0) {
                maxCnt = Math.min(maxCnt, path.split(",").length)
                // console.log(path)
                printArr(arr,path)
                path=""
                return
            }
        }
    }
    board[aloc[0]][aloc[1]] = 0
    board[bloc[0]][bloc[1]] = 0
    exSearch(board, aloc, bloc, 0, "A","")
    console.log(maxCnt)
    return answer;
}

solution([[1, 1, 1], [1, 1, 1], [1, 1, 1]], [1, 0], [1, 2])
solution([[1, 1, 1], [1, 0, 1], [1, 1, 1]], [1, 0], [1, 2])
// solution([[1, 1, 1, 1, 1]], [0, 0], [0, 4])
// solution([[1]], [0, 0], [0, 0])
