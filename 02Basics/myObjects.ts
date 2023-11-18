// A function that accepts an object as an argument
/* const User = {
    name: "hitesh",
    email: "hitesh@example.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: "hitesh", isPaid: false}) */


// An object that returns an object
/* function createCourse():{name: string, price: number}{
    return {name: "Reactjs", price: 399}
} */

// Type Aliasing
/* type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User {
    return {name: '', email: '', isActive: true}
}

createUser({name: '', email: '', isActive: true}) */

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "John",
    email: "John@example.com",
    isActive: true
}

export {}