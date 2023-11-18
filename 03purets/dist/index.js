"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    get getEmail() {
        return `${this.email}`;
    }
    get courseCount() {
        return this.courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be greater than 1");
        }
        this.courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("h@h.com", "hitesh");
/* hitesh.city */ 
