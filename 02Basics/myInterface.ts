interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

// Extending an existing interface
interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const hitesh: Admin = { dbId: 22, email: "h@h.com", userId: 2211, role: "admin", startTrial: () => {
    return "trial started"
}, getCoupon: (name: "hitesh10", off: 10) => {
    return 10
}, githubToken: "github"}