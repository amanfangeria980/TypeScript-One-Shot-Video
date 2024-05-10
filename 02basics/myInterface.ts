interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    // startTrial : ()=>string
    // or 
    startTrial():string
    getCoupon(couponCode: string):number
}

const aman: User = {dbId:22, email: "aman@aman.com",userId: 24,startTrial: ()=>{
    return "trial started";
}
,
getCoupon: (couponName: "amanfang")=>{
    return 10;
}}

aman.email="aman@fang.com"

// reopening of the interface -> adding new field to the interface 

// Inheritance
interface Admin extends User{
    role: "admin" | "ta","learner"
}
