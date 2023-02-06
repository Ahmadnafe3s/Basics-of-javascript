alert('Please enter a number')
let a = prompt('Enter a number' , '500')
a = Number.parseInt(a)
alert('You entered a number')

let write = confirm('Do you want to write the number')

if (write) {
    document.write(a)
}
else{
    document.write('Please allow me')
}