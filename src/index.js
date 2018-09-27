// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    let money = currency;
    let h=0,q=0,d=0,n=0,p=0;
    let obj={};
    if(currency>=10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if(currency<=0){
        return {};
    }
    else{
        h = Math.floor(money/50);
        money%=50;
        q = Math.floor(money/25);
        money%=25;
        d = Math.floor(money/10);
        money%=10;
        n = Math.floor(money/5);
        money%=5;
        p = money;
        if (h >=1) obj.H = h;
        if (q >=1) obj.Q = q;
        if (d >=1) obj.D = d;
        if (n >= 1) obj.N = n;
        if (p >= 1) obj.P = p;
        return obj;
    }
    // Return an object containing the minimum number of coins needed to make change
}
