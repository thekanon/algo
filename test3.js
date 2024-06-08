/**
 * 어떤 문자열 s 가 주어졌을 때, 당신은 이 s 가 다음과 같은 규칙을 활용하여 만들어낼 수 있는 문자열인지 판별하는 프로그램을 작성하고자 합니다. 
 * 규칙은 다음과 같습니다. 
 * 1. 맨 처음에는 한 글자짜리 문자열 "a"로 시작합니다. 
 * 2. 3번 규칙을 0번 이상 반복합니다. 
 * 3. 현재 문자열에 있는 'a'의 개수를 x 라고 할 때, 다음 두 행동 중 하나를 합니다. ◦ 
 *   - 문자열의 양 옆에 각각 x 개만큼의 'b를 추가합니다. 예를 들어, 현재 문자열이 "aba"라면 이 행동을 취한 뒤 문자열은 "bbababb"가 됩니다. 
 *   - 문자열의 맨 앞 또는 맨 뒤에 'a'를 추가합니다. 예를 들어, 현재 문자열이 "aba"라면 이 행동을 취한 뒤 문자열은 "aaba" 또는 "abaa"가 됩니다 
 * - "abab"는 "a" -> "bab" -> "abab" 로 만들어낼 수 있습니다. • "bbaa"는 주어진 규칙으로 만들어낼 수 없는 문자열입니다. 
 * - "bababa"는 주어진 규칙으로 만들어낼 수 없는 문자열입니다. 
 * - "bbbabababbbaa"는 "a" -> "bab" -> "abab" -> "ababa" -> "bbbabababbb" -> "bbbabababbba" -> "bbbabababbbaa" 로 만들어낼 수 있습니다.
 * 
 * 문자열 배열 a 가 매개변수로 주어집니다. 
 * a 에 있는 모든 문자열에 대해 해당 문자열이 주어진 규칙을 활용하여 만들어낼 수 있는 문자열이면 참값을, 그렇지 않다면 거짓값을 차례대로 배열에 담아 retumn 하도록 solution 함수를 완성해주세요.
 * 제한사항
 * 1<=a의길이<1,000,000 
 * 1<=a 의 모든 문자열의 길이 500,000 
 * a 의 모든 문자열은 'a','b'로만 이루어져 있습니다. 
 * M 의 모든 문자열의 길이의 합1,000,000
 * 
 * 입력값 〉
  ["abab", "bbaa", "bababa", "bbbabababbbaa"]
  기댓값 〉
  [true, false, false, true]
 */

  function isValidString(s) {
    if (s === "a") {
        return true;
    }
    let len = s.length;

    if (s[0] === 'b' && s[len - 1] === 'b') {
        let bCount = Math.min(s.indexOf('a'), len - 1 - s.lastIndexOf('a'));
        if (bCount >= 1 && s.slice(0, bCount) === 'b'.repeat(bCount) && s.slice(len - bCount) === 'b'.repeat(bCount)) {
            return isValidString(s.slice(bCount, len - bCount));
        }
    }

    if (s[0] === 'a') {
        return isValidString(s.slice(1));
    }
    if (s[len - 1] === 'a') {
        return isValidString(s.slice(0, len - 1));
    }

    return false;
}

function solution(a) {
    return a.map(isValidString);
}

// // 테스트 케이스 실행
// const input_data = ["abab", "bbaa", "bababa", "bbbabababbbaa"];
// const output = solution(input_data);
// console.log(output); // [true, false, false, true]


 // 테스트 케이스 6: 혼합된 유효 및 유효하지 않은 문자열
console.log(6)
console.log(solution(["a", "ab", "bab", "babab", "bbababbb", "bbbabababbbaa", "bbbabababbbaab", "aaaabbbb"])); // [true, true, true, false, true, true, false, false]
// 설명: 각 문자열의 유효성을 개별적으로 평가합니다.

 // 테스트 케이스 7: 대규모 입력 테스트
let largeTestCase = [];
for (let i = 0; i < 100000; i++) {
    largeTestCase.push("a".repeat(500) + "b".repeat(500));
}
console.log(solution(largeTestCase)); // [false, false, ..., false] (100000개)
// 설명: 대규모 입력 테스트로 시간 효율성을 확인합니다.

 // 테스트 케이스 8: 다양한 복잡한 유효 문자열
console.log(solution(["a", "bab", "bbababb", "bbbbbabbbbbb", "bbbbbababbbbbb", "bbababbbaa", "bbbabababbb", "bbbabababbba", "bbbabababbbaa"])); // [true, true, true, true, true, true, true, true, true]
// 설명: 다양한 규칙을 조합하여 만든 유효한 문자열들입니다.

 // 테스트 케이스 9: 길이가 1,000,000에 가까운 문자열
let longValidString = "a";
for (let i = 0; i < 9; i++) {
    longValidString = "b".repeat(longValidString.length) + longValidString + "b".repeat(longValidString.length);
}
console.log(solution([longValidString])); // [true]
// 설명: 점진적으로 규칙을 적용하여 길이를 증가시킨 유효한 문자열입니다.
