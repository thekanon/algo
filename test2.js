/**
 * 유저가 달성한 점수에 따라 실시간 랭킹을 보여주는 랭킹 페이지가 있습니다.
 * 랭킹 페이지는 한 페이지에 K명씩 닉네임을 보여주며, 랭킹이 산정되는 규칙은 다음과 같습니다.
 * 1. 점수가 높은 유저의 랭킹이 더 높습니다.
 * 2. 점수가 같다면 해당 점수를 먼저 달성한 유저의 랭킹이 높습니다.
 * 3. 어떤 유저가 이전 기록보다 더 높은 점수를 달성하면, 이전 기록은 사라지고 새로운 기록이 랭킹에 반영됩니다.
 * 4. 어떤 유저가 이전 기록보다 더 낮거나 같은 점수를 달성했다면 이 기록은 무시합니다.
 * 
 * 시즌이 바뀌면서 랭킹이 초기화되어 랭킹 페이지가 비어있는 상태가 됐습니다. 
 * 이때 각 유저의 닉네임과 점수가 해당 점수를 달성한 순서대로 주어지면, 1페이지는 몇 번 바뀌는지 알아보려 합니다. 
 * 단 랭킹 페이지에는 유저 닉네임만 표시되므로 점수 변화가 있더라도 랭킹에 변화가 없다면 랭킹 페이지는 바뀌지 않습니다.
 * 
 * 한 페이지에 표시되는 닉네임 수 K, 유저의 닉네임과 점수가 달성 순서대로 들어있는 배열 user_scores가 매개변수로 주어질 때, 랭킹 1페이지는 몇 번 바뀌는지 return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * - K는 1 이상 100 이하인 자연수입니다.
 * - user_scores의 길이는 1<=1000 입니다.
 * - user_scores의 각 원소는 유저 닉네임과 해당 유저가 달성한 점수로 이루어진 문자열입니다.
 *  - 유저 닉네임과 달성 점수는 "닉네임 점수" 형태의 문자열로 주어집니다.
 *  - 닉네임과 점수는 공백(스페이스 바) 한 개로 구분되어 주어집니다.
 *  - 닉네임은 알파벳 소문자와 숫자로만 이루어져 있으며, 길이는 1 이상 10 이하입니다.
 *  - 점수는 숫자로만 이루어져 있으며, 길이는 1 이상 9 이하이고 0으로 시작하지 않습니다.
 *  - 모든 유저는 닉네임 하나만 사용하며, 서로 다른 유저의 닉네임이 같은 경우는 없습니다.
 * user_scores의 원소는 각 유저가 해당 점수를 달성한 순서대로 들어있습니다.
 *  - 따라서 같은 점수를 동시에 달성한 유저는 없다고 가정해도 좋습니다.
 * 
 * 입출력 예
 * K, user_scores, result
 * 3, ["alex111 100", "cheries2 200", "coco 150", "luna 100", "alex111 120", "coco 300", "cheries2 110"], 4
 * 3, ["alex111 100", "cheries2 200", "alex111 200", "cheries2 150", "coco 50", "coco 200"], 3
 * 2, ["cheries2 200", "alex111 100", "coco 150", "puyo 120"], 0


 */

function solution(K, user_scores) {
  let answer = 0;
  let userScores = new Map();
  let rankingPage = [];

  function getRankingPage() {
      let users = Array.from(userScores.entries());
      users.sort((a, b) => {
          if (b[1] === a[1]) {
              return user_scores.indexOf(a[0] + ' ' + a[1]) - user_scores.indexOf(b[0] + ' ' + b[1]);
          }
          return b[1] - a[1];
      });
      return users.slice(0, K).map(user => user[0]);
  }

  for (let record of user_scores) {
      let [user, score] = record.split(' ');
      score = parseInt(score, 10);

      // 기록 갱신 조건
      if (!userScores.has(user) || userScores.get(user) < score) {
          userScores.set(user, score);
      } else {
          continue;
      }

      // 랭킹 페이지 업데이트 및 변화 확인
      let newRankingPage = getRankingPage();
      if (newRankingPage.join(',') !== rankingPage.join(',')) {
          answer++;
          rankingPage = newRankingPage;
      }
  }

  return answer;
}

// 테스트 케이스 1: 기본적인 상황
console.log(solution(3, ["user1 100", "user2 200", "user3 300"])); // 1
// 설명: 모든 유저가 처음 입력되었을 때 랭킹 페이지는 한번만 갱신됨

// 테스트 케이스 2: 동일한 점수 갱신이 없는 경우
console.log(solution(2, ["user1 50", "user2 60", "user3 70", "user1 80"])); // 3
// 설명: user1의 점수가 80으로 갱신되며 1페이지에 영향을 미침

// 테스트 케이스 3: 기존 점수보다 낮은 점수를 입력할 경우
console.log(solution(2, ["user1 100", "user2 200", "user1 50", "user3 150"])); // 2
// 설명: user1의 50점은 무시됨

// 테스트 케이스 4: 점수 갱신이 없는 경우
console.log(solution(3, ["user1 100", "user2 200", "user3 300", "user4 50"])); // 1
// 설명: 첫 3명으로 인해 랭킹 페이지는 한 번만 갱신됨

// 테스트 케이스 5: 순서가 바뀌는 경우
console.log(solution(3, ["user1 100", "user2 150", "user3 200", "user1 250", "user2 100", "user3 150"])); // 2
// 설명: user1의 점수가 갱신되어 랭킹 페이지가 갱신됨

// 테스트 케이스 6: 모든 점수가 동일한 경우
console.log(solution(3, ["user1 100", "user2 100", "user3 100", "user4 100", "user5 100"])); // 1
// 설명: 점수 갱신이 없으므로 페이지 갱신은 한번만 발생

// 테스트 케이스 7: 페이지가 자주 바뀌는 경우
console.log(solution(3, ["user1 100", "user2 200", "user3 150", "user4 250", "user5 50", "user6 300"])); // 4
// 설명: 각 유저의 점수가 갱신되면서 페이지가 자주 바뀜

// 테스트 케이스 8: K가 1인 경우
console.log(solution(1, ["user1 100", "user2 200", "user3 150", "user4 250", "user5 50"])); // 4
// 설명: 매번 1위가 바뀌면서 페이지가 자주 갱신됨

// 테스트 케이스 9: K가 최대인 경우
console.log(solution(100, ["user1 100", "user2 200", "user3 150", "user4 250", "user5 50", "user6 300"])); // 1
// 설명: 100명을 다 채우지 않으므로 한 번만 갱신

// 테스트 케이스 10: 마지막 기록이 중간 기록보다 낮은 경우
console.log(solution(3, ["user1 200", "user2 300", "user3 400", "user1 100"])); // 1
// 설명: 마지막 기록은 무시됨
