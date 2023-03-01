try {
    let a = 5
    // console.log('It ran successfully ' + a);
    console.log(nafees);
    throw new Error("This is error")
} catch (error) {
    console.log(error.message);
    // console.log(faizan);
}
finally{
    console.log("close the console"); // it works in all cases if both error or runs
}