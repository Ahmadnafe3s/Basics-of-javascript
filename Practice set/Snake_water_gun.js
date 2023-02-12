let word = ['S' , 'W' , 'G']
let compPick = word[Math.round(Math.random() * 3)];

let again = true ;

while (again) {
    let user = prompt("Enter Snake(S) , Water(W) , Gun(G)")
    if (user == compPick) {
        alert('Draw')
    } else if(user == 'S' && compPick == 'W'){
        alert('Compuetr Won!')
    }
    else if(user == 'S' && compPick == 'G'){
        alert('You Won!')
    }
    else if(user == 'W' && compPick == 'S'){
        alert('Computer Won!')
    }
    else if(user == 'W' && compPick == 'G'){
        alert('You Won!')
    }
    else if(user == 'G' && compPick == 'W'){
        alert('Compuetr Won!')
    }
    else if(user == 'G' && compPick == 'S'){
        alert('You Won!')
    }else{
        alert('Undefined')
    }
    again = confirm('Do you want to play again')
}

