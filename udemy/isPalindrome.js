// 전달된 문자열이 팰린드롬이면 true를 반환하는 isPalindrome이라는 재귀 함수를 작성하십시오(앞으로와 뒤로 동일하게 읽음). 그렇지 않으면 false를 반환합니다.
function isPalindrome(s) {
    if (s.length < 2)
        return true
    if (s[0] !== s[s.length - 1])
        return false
    return isPalindrome(s.substring(1, s.length - 1))
}
console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
