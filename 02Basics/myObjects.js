"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A function that accepts an object as an argument
var User = {
    name: "hitesh",
    email: "hitesh@example.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "hitesh", isPaid: false });
// An object that returns an object
function createCourse() {
    return { name: "Reactjs", price: 399 };
}
