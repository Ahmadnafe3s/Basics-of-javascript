//Arrays are the collection of the items 

let marks = [23 , 88 , 34 , true , 'not present']

console.log('Marks of 1 =' , marks[0]);
console.log('Marks of 2 =' , marks[1]);
console.log('Marks of 3 =' , marks[2]); //printing index wise
console.log('Marks of 4 =' , marks[3]);
console.log('Marks of 5 =' , marks[4]);


marks[5] = 55 //adding value 

console.log('Marks of 6 =' , marks[5]);

console.log('This is the length of mark =' , marks.length);


// printing by iteration

for (let index = 0; index < marks.length; index++) {
    
    console.log(marks[index]);
}

