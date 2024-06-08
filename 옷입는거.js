/*
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 
오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 
다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

종류	이름
얼굴	동그란 안경, 검정 선글라스
상의	파란색 티셔츠
하의	청바지
겉옷	긴 코트
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

제한사항
clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
같은 이름을 가진 의상은 존재하지 않습니다.
clothes의 모든 원소는 문자열로 이루어져 있습니다.
모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
스파이는 하루에 최소 한 개의 의상은 입습니다.

1. 의상의 종류 확인
2. 의상의 종류별로 갯수 확인
3. 의상 종류만큼 제곱하면 안되나? <-안됨

상의 2개
하의 2개
액세서리 2개

각 AB CD EF일때

이렇게 나오면
(상의, 하의, 액세서리)
A B C D E F = 6개
+
(상의+하의, 상의+액세서리, 하의+액세서리) :
AC AD BC BD
AE AF BE BF
CE CF DE DF
= 12개
+
(상의+하의+액세서리) :
ACE ACF ADE ADF BCE BCF BDE BDF
= 8개

6+12+8 = 26개

상의 2개 
하의 2개
AB CD일때

A B C D = 4개

AC AD BC BD = 4개

상의 3개
하의 3개
ABC DEF일때

A B C D E F = 6개
AD AE AF BD BE BF CD CE CF = 9개

상의 3개
하의 3개
액세서리 3개일때
ABC DEF GHI일때

상하액 1개씩
A B C D E F G H I = 9개

상하 하액 상액 2개씩
AG AH AI BG BH BI CG CH CI 
DG DH DI EG EH EI FG FH FI
AG AH AI BG BH BI CG CH CI = 27개

상하액 3개씩
ADG ADH ADI AEG AEH AEI AFG AFH AFI
BDG BDH BDI BEG BEH BEI BFG BFH BFI
CDG CDH CDI CEG CEH CEI CFG CFH CFI
= 27개

종류별로 경우의수 이럼
5개일때

A B C D E = 5개

AB AC AD AE BC BD BE CD CE DE = 10개

ABC ABD ABE ACD ACE ADE BCD BCE BDE CDE = 10개

ABCD ABCE ABDE ACDE BCDE = 5개

ABCDE = 1개

뽑을 옷의 종류^갯수




*/
function solution(clothes) {
    var cnt = 0;
    var obj = {};

    const nCr = (n, r, arr, start, pick) => {
        if (r === 0) {
            var r = obj[pick[0]].length
            for (var i = 1; i < pick.length; i++) {
                
                r *= obj[pick[i]].length
            }
            cnt += r
            return r;
        }
        for (var i = start; i < n; i++) {
            pick.push(arr[i]);
            nCr(n, r - 1, arr, i + 1, pick);
            pick.pop();
        }
    }


    clothes.map((v) => {
        obj[v[1]] = obj[v[1]] ? [...obj[v[1]], v[0]] : [v[0]];
    })

    //옷 종류 n개에서 i개뽑는 nCr 재귀함수
    var arr = Object.keys(obj);
    var n = arr.length;
    for (var i = 1; i <= n; i++) {
        nCr(n, i, arr, 0, []);
    }
    return cnt;
}
// console.log(
//     solution(
//         [
//             ["A", "T1"], 
//             ["B", "T1"], 
//             ["C", "T2"],
//             ["D", "T2"],
//             ["E", "T3"],
//             ["F", "T3"],
//             ["G", "T4"],
//             ["H", "T4"],
//         ]
//     )
// )

// console.log(
//     solution(
//         [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
//     )
// )
console.log(
    solution(
        // 26
        [
            ["a", "headgear"], 
            ["b", "headgear"], 
            ["c", "eyewear"], 
            ["d", "eyewear"], 
            ["g", "headgear"], 
            ["h", "eyewear"], 
            ["i", "face"], 
            ["e", "face"], 
            ["f", "face"]
        ]
            
    )
)
// console.log(
//     solution(
//         [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]
//     )
// )


