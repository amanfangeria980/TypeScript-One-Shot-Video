// class User{
//     email:string
//     name:string
//     private city: string =""
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }

// const aman = new User("aman@aman.com","Aman")



class User {
    private _courseCount=1;
    private readonly city: string = ""
    constructor(public email: string,
        public name: string) {
        this.email = email;
        this.name = name;
    }

    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount=courseNum
    }

    private deleteToken(){
        console.log("Token Deleted!")
    }
}

const aman = new User("aman@aman.com", "Aman")



