// Map method 

let arr = [21, 22, 23, 24, 25]

let a = arr.map((value, index) => {
    // console.log(value, index);
    return value + 1 // here a new array are returned whos all element has +1 value
})
// console.log(a);

// Filter 

let b = arr.filter((a) => {
    return a > 22
})

// console.log(b);


// reduce method

let arr2 = [4, 5, 6, 7, 8, 9]

const red = (a , b)=>{
    return a + b
}

let c = arr2.reduce(red)

console.log(c , arr2);

