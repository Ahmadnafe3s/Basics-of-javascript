let x = Math.random() * 100
x = Number.parseInt(x)

let g, times = 0

while (g != x) {
    g = prompt("Enter Number :- ")
    g = Number.parseInt(g)
    if (g > x) {
        console.log('Number', g, 'is Greater');
    }
    else if (g < x) {
        console.log('Number', g, 'is lesser');
    }
    else if (g == x) {
        console.log('Number', g, 'Guessed');
    }
    times++
}

console.log('Number of iteration :-', times);