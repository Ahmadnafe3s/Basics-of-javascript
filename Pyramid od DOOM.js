function loadscript(src, callback) {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => { // this only works on links ...
        callback(null, src); // can take argument for outer function.. if success then error will null
    }
    script.onerror = () => {
        console.log('Incorrect Src'); // it will directly throw error 
        callback(new Error('Incorrect code' + src)) //Error Handling.....
    }
    document.body.appendChild(script)
}
function hello(error, src) { // passing arguments 
    if (error) {
        console.log(error);
        return
    }
    console.log('Script loaded NOw' + src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
function hello(error, src) { // passing arguments 
    if (error) {
        console.log(error);
        return
    }
    console.log('Script loaded NOw' + src);
}
loadscript("https://cdn2.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
function hello(error, src) { // passing arguments 
    if (error) {
        console.log(error);
        return
    }
    console.log('Script loaded NOw' + src);
}
loadscript("https://cdn3.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
function hello(error, src) { // passing arguments 
    if (error) {
        console.log(error);
        return
    }
    console.log('Script loaded NOw' + src);
}
loadscript("https://cdn4.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
function hello(error, src) { // passing arguments 
    if (error) {
        console.log(error);
        return
    }
    console.log('Script loaded NOw' + src);
}
loadscript("https://cdn5.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
function hello(error, src) { // passing arguments 
    if (error) {
        console.log(error);
        return
    }
    console.log('Script loaded NOw' + src);
}
loadscript("https://cdn6.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
function hello(error, src) { // passing arguments 
    if (error) {
        console.log(error);
        return
    }
    console.log('Script loaded NOw' + src);
}
loadscript("https://cdn7.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
function hello(error, src) { // passing arguments 
    if (error) {
        console.log(error);
        return
    }
    console.log('Script loaded NOw' + src);
}
loadscript("https://cdn8.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
function hello(error, src) { // passing arguments 
    if (error) {
        console.log(error);
        return
    }
    console.log('Script loaded NOw' + src);
}

