var a = 2, b = 5;
function strategy_2(a, b, x) {
 if(x >= 1 && x < 3){
    return Math.sin(x);
 } else{
    if(x == 3) {
        if(a * x > 2) {
            return Math.sqrt(a * x - 2);
        } else {
            error = 1;
        }
    } else {
        if (x > 3 && x < 5) {
            return b * x + a;
        } else {
            error = 2;
        }
    }
 }
 switch (error) {
    case 1:
        console.log('Підкорінний вираз виходить від’ємним');
        break;
    case 2:
        console.log('Функція не визначена');
        break;
    default:
        console.log('Все ок');
 }
}
console.log(strategy_2(a, b, 4));