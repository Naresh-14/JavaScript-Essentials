function interest(p,m=1,r=10) {
    return  p * (1+m*r/100)
}

let price = 1000
let months = 12
let ratio = 2 
let result = interest(price,months,ratio)
console.log(result)