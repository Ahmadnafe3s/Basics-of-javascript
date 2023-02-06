//Problem 1 adding number in the array

let arr = [1, 2, 3, 4, 5, 6]
 let a = prompt("enter a number ")
 a = Number.parseInt(a)
 console.log(arr);

//problem 2 Add number in array untill enter 0

let arr2 = []

let b // it will be declare initially

while (b != 0) {
    b = prompt("enter a number ")
    b = Number.parseInt(b)
    arr2.push(b)
}
arr2.pop() // it will remove last element of array such as zero

console.log(arr2);

// problem 3 filter for numbers divisible by 2 of array

let arr3 = [33, 12, 45, 6, 7, 4, 2]

const fil=((a)=>{
    return a % 2 == 0
})

let c = arr3.filter(fil)

console.log(c);


// problem 4 create an array of sqaure numbers

let arr4 = [2, 3, 4, 3, 4, 4]

const sqaure = ((value) => {
    return value * value
})

let m = arr4.map(sqaure)

console.log('This is original array = ', arr4);
console.log('This is mapped array = ', m);


//Problem 5 reduce an array

let arr5 = [1, 2, 3, 4, 5]

let r = arr5.reduce((x , y)=>{

return x * y

})

console.log(r);

let s = arr5.toString()

console.log(s , typeof s);

