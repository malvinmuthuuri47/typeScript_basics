let score: number | string = 33

score = 44
score = "44"

type user = {
    name: string;
    id: number
}

type Admin = {
    userName: string,
    id: Number
}

let hitesh: user | Admin = {name: "hitesh", id: 334}

hitesh = {userName: "hitesh", id: 334}

function getDbId(id: number | string) {
    // Making some API calls
    console.log(`DB id is: ${id}`)
}

getDbId(3)
getDbId("3")

// Arrays
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = ["1", "2", 3]

// Literal value assignment
let seatAllotment: "aisle" | "middle" | "window"
