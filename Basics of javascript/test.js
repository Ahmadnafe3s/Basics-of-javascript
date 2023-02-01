let n = prompt("Enter number :- ") // use to take input it is predefiend string

n = Number.parseInt(n) // converting into int

for (let i = 1 ; i <= 100  ; i++) {
    if (i % n == 0) {
        console.log(i);
    }
    
}

// for in loop

const obj = {
    zeeshan : 90,
    faizan : 30,
    ramesh : 12,
    dr_saquib : 11,
}

obj['nafees'] = 300

for(let a in obj){
    console.log('Mark of ' , a /* keys */ , 'is' , obj[a] /*key values*/);
}

for(let b of 'nafees'){
    console.log(b);
}