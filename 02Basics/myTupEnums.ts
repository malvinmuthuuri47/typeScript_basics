// const user: (string | number)[] = [1, "hc"]

// Tuples and type maintain the order
let user: [string, number, boolean]

user = ["hc", 1233, false]

type User = [number, string]

const newUser: User = [112, "john@example.com"]

newUser[0] = 34
newUser[1] = "Matt"