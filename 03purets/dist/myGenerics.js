"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function getSearchProducts(products) {
    // Do some Db operations
    const myIndex = 3;
    return products[myIndex];
}
// Arrow function sysntax for Generic Types
const getMoreSearchProducts = (products) => {
    // do some Db operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, { connection: "Hitesh", username: "Hitesh", password: "Hitesh" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
