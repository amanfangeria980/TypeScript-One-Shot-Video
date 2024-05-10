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
