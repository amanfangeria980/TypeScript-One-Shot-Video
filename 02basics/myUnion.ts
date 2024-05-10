let score: number | string = 33;

score = 44;
score = "555"

type Emp = {
    id: number,
    name: string
}
type Admin = {
    id: number,
    username: string
}

let aman: Emp | Admin = { username: "amanfang", id: 123 }

// function getDBId(id: number | string) {
//     console.log(`DB id is : ${id}`);
// }
// getDBId(3);
// getDBId("3");


// union narrowing
function getDBId(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}

// array

const data1: number[] = [1, 2, 3];
const data2: (string | number)[] = ["1", 2, 3]

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";


