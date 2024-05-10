function addTwo(num: number): number {
    return num + 2;
}

addTwo(5);

function signUpUser(name: string, email: string, password: string, isPaid: boolean) { }

let loginUser = (name: string, isPaid: boolean = false) => { }

loginUser("Aman")

// function getValue(myVal: number){
//     if(myVal>5)return true;
//     return "200 OK";
// }


const getHello = (str: string): string => {
    return "";
}

const heros = [1,2,3]
// const heros = ["thor", "iron man", "spiderman"]

heros.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errMsg: string):void{
    console.log(errMsg);
}

// never : some functions never return a value

function handleError(errMsg:string):never{
    throw new Error(errMsg); 
}

//context switching as per heros array type

export { }