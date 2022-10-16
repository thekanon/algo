function solution(skill, skill_trees) {
    let cnt = 0
    for(let i of skill_trees){
        i = i.replace
        if(i === skill.slice(0,i.length)){
            cnt++
        }
    }
    return cnt;
}
/*
    skill_tree에서 언제배워도 상관없는 스킬들 다 빼면
    skill의 0~[1~skill.length]의 부분집합만 나옴
    예) skill = [A,B,C,D,E]일때
    skill_tree를 필터링하면
    A
    AB
    ABC
    ABCD
    ABCDE
    중 하나임
*/
let skill = "CBD"
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]
console.log(
    solution(skill,skill_trees)
)