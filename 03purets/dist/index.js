"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "";
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token Deleted!");
    }
}
const aman = new User("aman@aman.com", "Aman");
