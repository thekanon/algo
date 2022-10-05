/*
    마주보는 사람이 있는지 검사하는 함수
    E = W
    S = N
*/
function solution(train) {
    var answer = -1;
    var objTrain = {}
    var objPath = {}
    const checkFacingEachOther = (arr) => {
        for( let i = 0; i < arr.length; i++ ) {
            for(let j =0 ; j < arr.length; j++ ) {
                if(arr[i][j+1] && arr[i][j]==="E" && arr[i][j+1]==="W"){
                    return false
                } else if(arr[i][j-1] && arr[i][j]==="W" && arr[i][j-1]==="E"){
                    return false
                } else if(arr[i+1] && arr[i][j]==="S" && arr[i+1][j]==="N"){
                    return false
                } else if(arr[i-1] && arr[i][j]==="N" && arr[i-1][j]==="S"){
                    return false
                }
            }
        }
        return true
    }
    const recursionTrain = (arr, count,path) => {
        if( checkFacingEachOther(arr) ) {
            if(answer === -1 || answer > count) {
                answer = count
            }
            objTrain = {}
            return
        }
        if(!objPath[path]) {
            objPath[path] = true
        } else {
            return
        }
        if(!objTrain[arr.map(e=>e.join("")).join(",")]) {
            objTrain[arr.map(e=>e.join("")).join(",")] = true
        } else {
            return 
        }
        for( let i = 0; i < arr.length; i++ ) {
            for( let j = 0; j < arr.length; j++ ) {
                if( arr[i][j] === "E") {
                    arr[i][j] = "W"
                    recursionTrain(arr, count+1,i+""+j)
                    arr[i][j] = "E"
                } else if( arr[i][j] === "W" ) {
                    arr[i][j] = "N"
                    recursionTrain(arr, count+1,i+""+j)
                    arr[i][j] = "W"
                } else if( arr[i][j] === "N" ) {
                    arr[i][j] = "S"
                    recursionTrain(arr, count+1,i+""+j)
                    arr[i][j] = "N"
                } else if( arr[i][j] === "S" ) {
                    arr[i][j] = "E"
                    recursionTrain(arr, count+1,i+""+j)
                    arr[i][j] = "S"
                }
            }
        }
    }

    for(let i= 0; i < train.length; i++ ) {
        train[i] = train[i].split("")
    }
    checkFacingEachOther(train)
    recursionTrain(train, 0,-1)
    console.log(answer)
    return answer;
}
// solution(["ESS", "EEW", "NNW"])
solution(["EW", "EW", "EW"])
