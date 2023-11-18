/* class User {
    public email: string
    name: string
    private readonly city: string = "Jaipur"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
} */

class User {
    protected _courseCount = 1
    readonly city: string = "Jaipur"
    constructor(
        public email: string,
        public name: string,
        ) {}
    
    get getEmail(): string {
        return `${this.email}`
    }

    get courseCount(): number {
        return this.courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be greater than 1")
        }
        this.courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const hitesh = new User("h@h.com", "hitesh")
/* hitesh.city */ 