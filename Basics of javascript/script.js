alert('Please enter a number')
let a = prompt('Enter a number' , '500') // the second argument is optional number shows on the box
a = Number.parseInt(a)
alert('You entered a number')

let write = confirm('Do you want to write the number') // yes for true no for false

if (write) {
    document.write(a)  // if yes this will print
}
else{
    document.write('Please allow me')
}