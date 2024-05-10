"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//generic 
function identityThree(val) {
    return val;
}
identityThree("3");
// good shortcut 
function identityFour(val) {
    return val;
}
//array & generics
function getSearchProducts(products) {
    // do some db operations
    const index = 3;
    return products[index];
}
const getMoreSearchProducts = (products) => {
    const index = 4;
    return products[index];
};
// following function can also extend Database interface
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, 4.6);
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
// narrowing
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
