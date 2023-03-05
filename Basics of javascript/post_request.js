const createtodo = async () => { // async function 
    let options = {          // it is an an object
        method: 'POST', // this is method
        headers: {
            "content-type": "application/json" // header   
        },
        body: JSON.stringify({    // it returns elements of body into string..
            title: 'Sending',
            body: 'Here i am sending the message',
            userId: 100,
        }),
    }
    
    // url is inside the async func
    let a = await fetch('https://jsonplaceholder.typicode.com/posts', options)  // url is inside the async func
    let res = await a.json() //  always need to write return type.. in the fetched variable
    return res
}


const gettodo = async (id) => {
    let rep = await fetch('https://api.oceandrivers.com:443/v1.0/getAemetStation/aeropuertopalma/lastdata/')// without option means get
    let r = rep.json()
    return r
}



const print = async () => {
    let print = await createtodo() // async function always return a promise therefore need to create func await. 
    console.log(print);
    console.log(await gettodo()); // passing id to get things over internet..  
}

print()