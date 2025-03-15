function fibonacci(n){
let list = [];
if(n === 1){
    list.push(0)
} else if (n === 2){
    list.push(0);
    list.push(1);
    } else if (n > 2){
        list.push(0);
        list.push(1);
        for(let i = 0; i < n - 2; i++){
            const new_number = list[i] + list[i+1];
            list.push(new_number);
        }
    }
return list;
}
console.log(fibonacci(12));