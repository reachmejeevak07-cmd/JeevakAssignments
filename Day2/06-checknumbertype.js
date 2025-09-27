function checknumbertype(number){
    if(number >0){
        return "positive number";
    }
    else if (number < 0) {
        return "Negative number";
    }
    else {
        return "Neutral number";
    }
}
let number = 15;
console.log(checknumbertype(number));
