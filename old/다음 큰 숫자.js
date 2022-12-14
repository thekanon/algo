function solution(n) {
    var answer = 0;
    const toBinary = (n) => {
        return n.toString(2)
    }
    const get1Count = (n) => {
        return n.split('').filter((v) => v === '1').length
    }

    for(let i=n+1; i<=1000000; i++) {
        if(get1Count(toBinary(n)) === get1Count(toBinary(i))) {
            return i
        }
    }
}
