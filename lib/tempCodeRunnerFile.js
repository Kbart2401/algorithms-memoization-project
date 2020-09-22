function lucasNumberMemo(n, memo = {}) {
    if(memo[n]) return memo[n];
    if(n === 1) return 1;
    else if(n === 0) return 2;

    memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);

    return memo[n];
}
console.log(lucasNumberMemo(41)) //should be 7