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