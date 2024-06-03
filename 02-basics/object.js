// object can be created in two ways
const tinderuser={}// non singleton object 

const tinderuser1=new Object();//singleton object
// console.log(tinderuser);

const username={
    username1:{
        firstname:"sansin",
        lastname:"sin"
    }// nested objects can be created as same as the loop and array
}
// console.log(username.username1.firstname);

const obj1={1:"a",22:"b"}
const obj2={11:"a",23:"b"}
const obj5={10:"a",24:"b"}
const obj4={21:"a",25:"b"}
// const bird=Object.assign({obj1,obj2,obj4})// we can concate using assign operator
// console.log(bird);
// console.log({...obj1,...obj2,...obj4}) //using spread operator we can concate 


// console.log(username)
// console.log(Object.keys);
// console.log(Object.values(username));
console.log(username.hasOwnProperty('firstname'));