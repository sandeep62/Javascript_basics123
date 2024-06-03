const Marvel=["ironman","thor",["sandeep","jatan","anjali",["rahul"]],"Captain"]
const Dc=["superman","batman"]
const all=[...Dc,...Marvel]  //spread operator 
// console.log(all);

console.log(all.flat(Infinity)) // flat operator is widely used to spread the multiple inner array .