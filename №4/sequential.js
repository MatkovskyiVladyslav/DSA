var a = 6, b = 7;
function strategy_1(a, b, x) {
    if (x >= -1 && x < 3){
            return Math.sin(x);
    }
    if (x == 3) {
        if(a * x < 2){
            console.log('Підкорінний вираз виходить від’ємним');
        } else{
            return Math.sqrt(a * x - 2);
        }
    }
    if (x > 3 && x < 5) {
        return b * x + a;
    } else{
        console.log('Функція невизначена');
    }
}
console.log(strategy_1(a, b, 3));