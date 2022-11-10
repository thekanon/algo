function solution(n, roads, sources, destination) {
  //그래프 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  const path = Array.from({ length: n + 1 }, () => Infinity);
  for (let i = 0; i < roads.length; i++) {
      graph[roads[i][0]].push(roads[i][1]);
      graph[roads[i][1]].push(roads[i][0]);
  }

  const BFS = (startNode, graph) => {
      const visited = []; // 탐색을 마친 노드들
      let needVisit = []; // 탐색해야할 노드들
    
      path[startNode] = 0;
      needVisit.push(startNode); // 노드 탐색 시작
    
      while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.

        for(let i of graph[node]) {
          if(path[i] > path[node]+1) {
              path[i] = path[node]+1;
              needVisit.push(i);
          }
        }
      }
    };
    


  BFS(destination, graph);

  return sources.map((source) => path[source] === Infinity ? -1 : path[source]);
}
console.log(
  solution(
      5, [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]], [1, 3, 5], 5
  )
)