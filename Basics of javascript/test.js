let sen = 'Hey bro what you are doing there'

let find

while (sen.includes(find) != true) {

    find = prompt("Enter Word")
    if (sen.includes(find)) {
        console.log("Yes the word", find, 'is include');
    }
    else {
        console.log("No the word", find, 'is include')
    }
}

//the method includes return true.........

let x 

while (x % 2 == 0 != true) {
    x = prompt('Enter number')
    x = Number.parseInt(x)
    console.log(x % 2 == 0 ? 'yes this is even' : 'no this is not even' );
}