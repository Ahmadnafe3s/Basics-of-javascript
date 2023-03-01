
let d1 = document.getElementById("d1")
console.log(d1);
console.log(d1.matches('.box')); // if class will not be present it will show false


console.log(sp2.closest('.con')); // get closet element
console.log(sp2.closest('#sp2')); // if class present on itself gets element itself

console.log(d2.contains(sp2));  // it returns true and false if class present on contaners any child..