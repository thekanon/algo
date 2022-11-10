/*
  N개의 마을로 이루어진 나라가 있습니다. 
  이 나라의 각 마을에는 1부터 N까지의 번호가 각각 하나씩 부여되어 있습니다. 
  각 마을은 
  [양방향]
  으로 통행할 수 있는 도로로 연결되어 있는데, 서로 다른 마을 간에 이동할 때는 이 도로를 지나야 합니다. 
  도로를 지날 때 걸리는 시간은 
  도로별로 다릅니다. 
  현재 1번 마을에 있는 음식점에서 [각 마을로 음식 배달]을 하려고 합니다. 
  각 마을로부터 음식 주문을 받으려고 하는데,  
  N개의 마을 중에서 K 시간 이하로 배달이 가능한 마을에서만 주문
  을 받으려고 합니다. 

  1. 그래프 만듬
  2. 방문한 마을을 인피니트로 초기화
  3. BFS로 탐색하면서 1부터 각 마을간의 최소 거리를 인피니트로 초기화한 배열에 넣음

*/

function solution(N, road, K) {
  var answer = 0;
  const graph = Array.from({ length: N + 1 }, () => []);
  const path = Array.from({ length: N + 1 }, () => Infinity);
  for (let i = 0; i < road.length; i++) {
    graph[road[i][0]].push([road[i][1], road[i][2]]);
    graph[road[i][1]].push([road[i][0], road[i][2]]);
  }

  const BFS = (startNode, k) => {
    const visited = []
    const needVisit = [startNode]

    path[startNode] = 0

    while (needVisit.length !== 0) {
      const node = needVisit.shift()

      for(let i of graph[node]){
        if( path[i[0]] > path[node]+i[1]){
          path[i[0]] = path[node]+i[1]
          needVisit.push(i[0])
        }
      }
    }
  }

  BFS(1,K)


  return path.filter( i => i <= K).length
}
console.log(
  solution(
    5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3
  )
)
console.log(
  solution(
    6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4
  )
)