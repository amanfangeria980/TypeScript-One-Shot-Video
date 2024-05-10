const User = {
    name: "aman",
    email: "aman@aman.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

//works
//createUser({name: "aman",isPaid :false}) 

// doesn't work
//createUser({name: "aman",isPaid :false})

let newUser = { name: "aman", isPaid: false, email: "aman@aman.com" }

createUser(newUser);

function createCourse(): { name: string, price: number } {
    return { name: "Aman", price: 2000 }
}

// Type aliases

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createEmployee(user: User): User {
    user.isActive = true;
    return user;
}

let data = createEmployee({ name: "aman", email: "aman@aman.com", isActive: false })

console.log(data)

// READONLY and optional
type Person = {
    readonly _id:string
    name: string
    email: string
    isActive: boolean
    creditCardNumber?: number
    // making this optional using ?, it'll not give error if we don't pass this
}

let myPerson: Person= {
    _id: "12345",
    name: "aman",
    email: "aman@aman.com",
    isActive: true
}

// cannot change _id as it's readonly.

type cardNumber = {
    cardNumber: string
}

type cardDate={
    cardDate: string
}

type CardDetails = cardNumber & cardDate & {
    cvv: number
}


export { }