function solution(name) {
  var answer = 0;
  let str = name.split("");
  let moveCountArr = [];
  let checkArr = [];
  
  str.map(el => {
      let up = el.charCodeAt()-"A".charCodeAt();
      let down = "Z".charCodeAt() - el.charCodeAt()+1;
      let move = up>down ? down : up
      moveCountArr.push(move)
      checkArr.push(0)
  })
  let idx = 0;
  let addCnt = 0;
  for(let i=0;i<str.length;i++){
      if(str[i]!="A"){
          idx = i
          break;
      }
      addCnt++;
          
  }
  moveCountArr[0]+=addCnt
  for(let i=0;i<str.length;i++){
      // for(let j=i;j<str.)
      let l = calLeftCnt(str,idx)
      let r = calRightCnt(str,idx)
      str[idx]="A"
      console.log(l,r)

      answer += l<r ? l : r;
      
      idx = l<r ? idx-l : idx+r;
      idx = idx < 0 ? str.length+idx : idx;
      idx = str.length <= i ? i-str.length : idx
      console.log(idx,str)
  }
  var sum = moveCountArr.reduce((a, b) => a + b, 0);
  console.log(moveCountArr)
  return answer+sum;
}
function calLeftCnt(str,idx){
  //현재 문자열에서 A가 아닌값까지 얼마나 이동했는지 리턴한다.(뒤로)
  let cnt = 0;
  if(str[idx]=="A"){
      return 0;
  }
  for(let i=idx-1;i>=0;i--){
      cnt++
      if(str[i]!="A"){
          return cnt;
      }
  }
  for(let i=str.length-1;i>idx;i--){
      cnt++
      if(str[i]!="A"){
          return cnt;
      }
  }
  return 0
}
function calRightCnt(str,idx){
  //현재 문자열에서 A가 아닌값까지 얼마나 이동했는지 리턴한다.
  let cnt = 0;
  if(str[idx]=="A"){
      return 0;
  }
  for(let i=idx+1;i<str.length;i++){
      cnt++
      if(str[i]!="A"){
          return cnt;
      }
  }
  for(let i=0;i<idx;i++){
      cnt++;
      if(str[i]!="A"){
          return cnt;
      }
  }
  return 0
}