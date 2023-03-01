const asy = async()=>{
    let p = new Promise((resolve , reject)=>{
    setTimeout(() => {
      resolve(10)
    }, 3000);
})
let b =  p
return b
}

let a =  asy()

a.then((x)=>{
    console.log('Hey this is resolve with value '+ x);
}).catch