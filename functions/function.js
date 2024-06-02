function toadd(number1,number2){
    return (number1+number2)
}
// console.log(toadd())

function login(name="empty"){
    if(name===undefined)
        {
            console.log("please enter username:")
            return
        }
    console.log(`${name} welcome to our coommunity`)
    return
}
// console.log(login());


//pass object  inside the function as parameter

const username={
    name:"sandeep",
    price:234
}
const tinderuser={
    name:"san",
    email:"sand@gmail.com",
    gender:"male",
    price:234
}
function details(anyusername){
    console.log(`username : ${anyusername.name}, price : ${anyusername.price}, 
    email:${anyusername.email},gender: ${anyusername.gender} `);
}
details(tinderuser);

// pass array in functions
const arr1=[200,200,400,400]
function secondelement(anynumber){
    return anynumber[1]
}
// console.log(secondelement(arr1))
console.log(secondelement([100,300,200]));