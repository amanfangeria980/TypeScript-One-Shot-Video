"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "aman",
    email: "aman@aman.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//works
//createUser({name: "aman",isPaid :false}) 
// doesn't work
//createUser({name: "aman",isPaid :false})
var newUser = { name: "aman", isPaid: false, email: "aman@aman.com" };
createUser(newUser);
function createCourse() {
    return { name: "Aman", price: 2000 };
}
function createEmployee(user) {
    user.isActive = true;
    return user;
}
var data = createEmployee({ name: "aman", email: "aman@aman.com", isActive: false });
console.log(data);
var myPerson = {
    _id: "12345",
    name: "aman",
    email: "aman@aman.com",
    isActive: true
};
