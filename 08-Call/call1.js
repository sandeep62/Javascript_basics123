function Setusername(username){
    this.username=username
    console.log('called');
}

function createuser(username,email,password){
    // Setusername(username)  // here function setusername is called but after the excution it deletes it execution contest 
    //to hold the reference javascript uses the call and using this it defines the current context.
     Setusername.call(this,username);


    this.username=username
    this.email=email
    this.password=password

}
const chai=new createuser("chai","sandeep@gmail.com","1233442")
console.log(chai);