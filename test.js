/**
 * 당신은 쇼핑몰에서 상품을 검색할 수 있습니다.
 * 검색어를 입력하면 검색어를 부분 문자열로 갖는 모든 상품들이 검색됩니다.
 * 
 * 부분 문자열이란 문자열의 연속된 일부를 의미합니다.
 * 예를들어 abcde의 부분 문자열로 abc나 bcde등이 있고, ac나 ea는 부분 문자열이 아닙니다.
 * 
 * 특정 단어로 검색해서 검색된 상품의 개수가 하나일때, 
 * 해당 단어를 상품의 고유 검색어라고 합니다. 당신은 상품마다 고유 검색어 중 가장 짧은 고유 검색어 목록을 구하려 합니다.
 * 
 * 검색어 목록은 사전 순서대로 빠른 순으로 정렬되고, 중복되지 않아야 합니다.
 * 검색어 목록은 공백 하나로 검색어들을 구분하는 형태입니다.
 * 
 * 만약 고유 검색어가 없다면 None을 목록에 담습니다.
 * 
 * 예를들어 쇼핑몰에 pencil, cilicon, contrabase, picturelist 네가지 상품이 있다면, 각 상품의 가장 짧은 고유 검색어 목록은 다음과 같습니다.
 * 
 * pencil : en nc pe
 * cilicon : ico ili lic
 * contrabase : a b
 * picturelist : u
 * 
 * pencil의 고유 검색어를 예시로 들어보겠습니다.
 * pencil의 고유검색어 중 길이가 1인 검색어는 존재하지 않습니다.
 * - p를 검색하면 pencil과 picturelist 두가지 상품이 검색되므로 p는 pencil의 고유 검색어가 아닙니다.
 * - en nc pe 중 하나를 검색했을때 pencil 하나만 검색됩니다. 따라서 pencil의 가장 짧은 고유 검색어는 en nc pe 3가지 입니다.
 * - enc, nci, pencil 등도 고유 검색어지만, 더 짧은 고유 검색어가 있으므로 제외됩니다.
 * 
 * 쇼핑몰에 등록된 상품의 이름을 담은 문자열 배열 goods가 매개변수로 주어졌을때, 가장 짧은 고유 검색어 목록을 goods에서 주어진 상품 순서대로 문자열 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 * 
 * 예시
 * 입력
 *  ["pencil", "cilicon", "contrabase", "picturelist"]
 * 출력
 *  ["en nc pe", "ico ili lic", "a b", "u"]
 */

function solution(goods) {
  function generateSubstrings(word) {
      let substrings = new Set();
      for (let len = 1; len <= word.length; len++) {
          for (let start = 0; start <= word.length - len; start++) {
              substrings.add(word.substring(start, start + len));
          }
      }
      return Array.from(substrings);
  }

  function isUniqueSubstring(substring, word, goods) {
      let count = 0;
      for (let otherWord of goods) {
          if (otherWord.includes(substring)) {
              count++;
              if (count > 1) return false;
          }
      }
      return count === 1;
  }

  return goods.map(word => {
      let substrings = generateSubstrings(word).sort((a, b) => a.length - b.length || a.localeCompare(b));
      let uniqueSubstrings = [];

      for (let substring of substrings) {
          if (isUniqueSubstring(substring, word, goods)) {
              uniqueSubstrings.push(substring);
          }
      }

      if (uniqueSubstrings.length === 0) {
          return "None";
      }

      let minLength = uniqueSubstrings[0].length;
      let result = uniqueSubstrings.filter(substring => substring.length === minLength);
      return result.sort().join(" ");
  });
}



// 예시 입력
const goods = ["pencil", "cilicon", "contrabase", "picturelist"];
console.log(solution(goods));  // ["en nc pe", "ico ili lic", "a b", "u"]
