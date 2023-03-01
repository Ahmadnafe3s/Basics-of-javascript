// classic for loop

let arry = [3, 4, 78, 5, 3, 5]

for (let index = 0; index < arry.length; index++) {
              console.log(arry[index]);

}

// for in loop 

for (let i in arry) {
    console.log(arry[i]); // it has we have to not declare the size of arry and variable only stores all the index of array such as keys of object
}

// For each loop

arry.forEach((element)=>{
    console.log(element);  // it only prints all the elements of a loop ...
})

// arry from

let name = 'nafees'

let arr = Array.from(name) // it convert string into array 
console.log(arr)

// O/P = [ 'n', 'a', 'f', 'e', 'e', 's' ]

// for of loop 

for(let a of arry){
    console.log(a); // it store elements of the array only work on iterated things
}