/*

*/
function solution(today, terms, privacies) {
    const termsObj = {}
    const result = []
    const addMonth = (date, month) => {
        var str = date.split(".")
        str[1] = parseInt(str[1]) + month
        if (str[1] > 12) {
            str[0] = parseInt(str[0]) + parseInt(str[1]/12)
            str[1] = str[1] % 12
        }
        return str.join(".")
    }
    const diffDate = (date1, date2) => {
        var str1 = date1.split(".").map((v) => parseInt(v))
        var str2 = date2.split(".").map((v) => parseInt(v))

        if(str1[0] > str2[0]){
            return -1
        }else if(str1[0] === str2[0]){
            if(str1[1] >str2[1]){
                return -1
            }else  if(str1[1] === str2[1]){
                if(str1[2] >=str2[2]){
                    return -1
                }
            }
        }
        return 0        
    }
    for(const args of terms){
        termsObj[args.split(" ")[0]] =args.split(" ")[1]
    }

    for(let i=0;i<privacies.length;i++){
        const args = privacies[i]
        let a = addMonth(args.split(" ")[0], parseInt(termsObj[args.split(" ")[1]]))
        // console.log(today,a)
        if(diffDate(today, a)==-1){
            result.push(i+1)
        }
    }

    // console.log(result)
    return result
}
solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]) //[1,3]
solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]) //1,4,5