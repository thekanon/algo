/*
문자열을 받아들이고 거꾸로 새 문자열을 반환하는 reverse라는 재귀 함수를 작성하십시오.

*/

function reverse(s) {
    // add whatever parameters you deem necessary - good luck!
    if (s.length === 1) return s
    return s[s.length - 1] + reverse(s.slice(0, s.length - 1))
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'