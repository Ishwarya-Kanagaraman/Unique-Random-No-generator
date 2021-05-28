function getRand(digit,s=''){
    let randomNo=Math.floor(Math.random()*9)+1;
    if(digit===0){
        return s;
    }
    return s.includes(randomNo) ? getRand(digit,s)  :    getRand(--digit,s +randomNo);
}

console.log(getRand(8));