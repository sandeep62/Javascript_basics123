class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
        encryptpassword(){
            return `${this.password} abs`
        }
        changeusername(){
            return `${this.username}`
        }
}
const san=new user("sandeep","sandeep@gamil.com","12324")
console.log(san.encryptpassword());


