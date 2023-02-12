//Problem number 1 .. 
// Problem 2 .. after all confirm ask to us that do you want to check again if ok the code run again..
// Problem 3 .. if enter wrong number it show us an error

let a
while (a != false) { // loop will be iterate till it becomes false

    let age = prompt('Enter your age :- ')
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("You have entered incorrect number")
        break // it will stop the iteration
    }
    alert(age >= 18 ? 'You Can drive' : 'You cant drive');
    a = confirm('Do you want to check again')
}


