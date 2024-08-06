let [first,last,...rest] = [1,2,3,4,5,6];
let sum = 0
for (let value of rest){
    sum += value;
}
console.log(sum)