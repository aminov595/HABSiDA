
let number = prompt('напишите число')

if(number === 100 != number >= 100){
alert('gut')
}else {
    alert('error')
}
console.log(number)


let numbers = [
    4, 16, 19,22,11,144,967,19124
]
let even = []
let odd = []

for (let item of numbers){
    if(item % 2 === 0 ){
        even.push(item)
    }else if (
        item % 1 === 0
    ){
        odd.push(item)
    }
}
console.log(even)
console.log(odd)
