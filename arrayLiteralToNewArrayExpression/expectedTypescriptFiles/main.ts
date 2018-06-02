import {Brands} from "./Brands";
import {Shop} from "./Shop";

const midrandShop = new Shop(new Array<"Toiletries" | "Wine">('Toiletries', 'Wine'));

function main() {

    const productsByBrand = new Array<(string | string[])[]>(['Bakers', ['Tennis Biscuit', 'EatSomeMore']], ['Cadbury', ['Top Deck', 'Aero']]);

    midrandShop.products = productsByBrand.flatten().filter((product: string) => Object.getOwnPropertyNames(Brands).includes(product));
    midrandShop.brands = Object.getOwnPropertyNames(Brands);
    midrandShop.updateProducts(new Array<"Top Deck" | "Aero">('Top Deck', 'Aero'))
}
