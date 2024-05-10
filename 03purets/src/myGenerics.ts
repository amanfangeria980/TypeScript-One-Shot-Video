const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

//generic 
function identityThree<Type>(val: Type): Type {
    return val
}

identityThree("3")

// good shortcut 
function identityFour<T>(val: T):T{
    return val;
}

//array & generics

function getSearchProducts<T>(products: T[]):T{

    // do some db operations
    const index=3;
    return products[index];
}

const getMoreSearchProducts = <T,>(products: T[]):T =>{
    const index=4;
    return products[index];
}


// Generic Classes

interface Database{
    connection: string,
    username: string,
    password: string
}
// following function can also extend Database interface

function anotherFunction<T,U extends number>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3,4.6);


interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product)
    }
}

// narrowing
function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID")
        return
    }
    id.toLowerCase();
}

// in operator narrowing

interface User{
    name: string,
    email: string,
}
interface Admin{
    name: string,
    email: string,
    isAdmin: Boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }

}