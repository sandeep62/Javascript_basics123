// to avoid pollution of global scope we use iife
(function chai(){
    console.log("db connected");

})();   // here ; is neccesary to tell that where it has to stop
// otherwise it will throw an error on next line of the code 

//using arrow operator
((username)=>{
    console.log(username);
})("sandeep")

// to write named iife and unnamed iife in the same page must give the ;after the named iife or unnamed iife

