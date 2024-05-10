let greetings: string = "Hello Hitesh";


console.log(greetings);


// type inference: it automatically understand this basic thing
let userId = 3334.5; //it understands it is a number

//any : not a good practice to use
var hero;

function getHero(){
    return "thor";
}

hero=getHero();
//here is it being inferred as any, which is not good, in these cases, we have to explicitly define the type




export {}