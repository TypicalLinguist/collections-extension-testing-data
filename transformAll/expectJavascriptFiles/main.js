"use strict";
exports.__esModule = true;
var Brands_1 = require("../Brands");
var Shop_1 = require("../Shop");
function main() {
    var midrandShop = new Shop_1.Shop();
    var productsByBrand = [
        ['Bakers', ['Tennis Biscuit', 'EatSomeMore']],
        ['Cadbury', ['Top Deck', 'Aero']]
    ];
    midrandShop.products = productsByBrand.flatten().filter(function (product) { return Object.getOwnPropertyNames(Brands_1.Brands).includes(product); });
    midrandShop.brands = Object.getOwnPropertyNames(Brands_1.Brands);
}
