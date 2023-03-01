const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Nice, you triggered this alert message!', 'success')
  })
}


let a = document.getElementsByClassName('card-title') // never forget to select index..

 a[0].style.color = 'red' 

// const sty = (a)=>
// {
//     return a.style.color = 'red'
// }

// sty(a)

let b = document.getElementById('js') // id 

console.log(b);

b.style.background = 'teal'

b.style.color = 'red'

let c = document.querySelectorAll('.card-title')
console.log(c);

c[1].style.color = 'green' // manipualting particular card [1]
c[2].style.color = 'orange'
c[3].style.color = 'blue'

let d = document.getElementsByTagName('a')

console.log(d);
