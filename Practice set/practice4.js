//THIS PRACTICE IS ON THE STRINGS

console.log("har\"".length);

// include , startwith , endwith functions of string

// includes
let sen = 'my name is nafees ahmad my home town is tulsipur'

let inc = prompt('Enter word >')

console.log(sen.includes(inc) ? 'word is present' : 'word is not present');

//startwith

console.log('the word :' , inc , sen.startsWith(inc) ? 'is start form sen' : 'is not start form sen');

// Extract a number from a string 

let str = 'this is for Rs 1000'

let amount = Number.parseInt(str.slice(15))

console.log(typeof amount);

console.log(amount);


// replace


let rep = str.replace('1000' , '5000')
console.log(rep);