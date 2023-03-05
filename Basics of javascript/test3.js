// var listen = setInterval(function() {

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         if (data[0].name)
//           console.log(data[0].name);
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
  
//   }, 2000);//2 second

const obj ={
 name1 : 'Nafees',
 name2 : 'Waquar'
}

// for(let a in obj){
//   console.log(obj[a]);
// }

let arr = [10,11,12,13,14]

arr.forEach((value , index)=>{
  console.log(value , index);
})

let b = arr.map((value)=>{
  return value + 1
})

console.log(b);