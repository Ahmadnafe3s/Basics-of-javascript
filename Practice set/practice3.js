// //WAP to enter correct number

let cn = 45

let i 

while (i != cn) {
    i = prompt('enter the correct number')
    console.log('please try again');
}
console.log('done');

// WAP TO FIND MEAN OF NUMBERS

const mean = (a,b,c,d)=>{
console.log('mean = ' , (a+b+c+d)/4);
}

mean(5,6,7,8)

// WAP TO PRINT 4 STUDENTS MARKS

let marks={
    nafees : 120,
    faizan : 30 ,
    zeeshan : 38,
    meraj : 45,
}

for(let i = 0 ; i < Object.keys(marks).length ; i++){
    console.log('marks of' , Object.keys(marks)[i] ,'=' , marks[Object.keys(marks)[i]]);
}

// WAP TO PRINT 4 STUDENTS MARKS BY FOR IN LOOP

for(let a in marks){
    console.log('marks of ' , a , '=' , marks[a]); 
}