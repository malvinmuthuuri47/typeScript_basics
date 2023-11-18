function addTwo(num: number): number {
    return num + 2
    // return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("john")
signUpUser("John", "John@example.com", false)
loginUser("John", "John@example.com")

/* function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return "200 OK"
} */

/* const getHello = (s: string): string => {
    return ""
} */

const heroes = ["thor", "spiderman", "ironman"]
// const heroes = [1, 2, 3]
heroes.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errMsg: string): void{
    console.log(errMsg);
}

function handleError(errMsg: string): never{
    throw new Error(errMsg);
}

export {}