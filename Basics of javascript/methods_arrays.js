// //METHODS OF ARRAYS

// 1 - tostring it turn array into string

let num = [1, 2, 3, 4, 5, 6]

let b = num.toString()

console.log(b);

// 2 - join

 let num2 = [12, 13, 13, 56, 78]

let c = num2.join('-') //it join the arrays by given symbol 12-23-4-4

console.log(c);

// pop

num2.pop() // it removes last number of arrays

console.log(num2)

// 3 push 

num2.push(45)
console.log(num2); // it adds a new element within the array of last index 

// 4 Shift

let r = num2.shift()
console.log(num2 , r); // it removes the 1st element of array and returns it

// 5 unshift

let y = num2.unshift(23) // it adds elemet begening of the array
console.log(num2);

// 6 reverse

 num2.reverse()
 console.log(num2); // it reverse the original array

// 8 delete 

let num3 = [10, 11, 12, 13, 14, 16, 17]

delete num3[0] // it is not a methos instead it is a operator

console.log(num3)

// NOTE :- the lenght of array will not be affect

// 9 concat

let num4 = [21, 22, 23, 24, 25, 26, 27] // used to add multiple arrays it does't affect original array
console.log(num3.concat(num4));

// 10 sort 

let s = [9, 7, 666, 44, 5, 27, 343, 1]

const compare = (a, b) => { // if compare are negaive then smallest number will take place of lagest number it will sort in assending order for desending order b - a negative term will take 1st place
    return a - b
}

s.sort(compare) // it changes the original value of array

console.log(s);


// 11 slice

let sl = [2, 3, 4, 5, 6, 7]

console.log(sl.slice(2));

// 12 Splice

let dl = sl.splice(1, 3, 23, 34, 55, 67)  // 1st argument is beginig and 2nd is how index supposed to delete form beginig and other element will take the place of deleted index it modifies original array and returns deleted values..

console.log(sl , dl);