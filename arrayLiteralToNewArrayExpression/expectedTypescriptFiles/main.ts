import {Brands} from "./Brands";
import {Shop} from "./Shop";

function main() {
    const midrandShop = new Shop();

    const productsByBrand = new Array<(string | string[])[]>(
        ['Bakers', ['Tennis Biscuit', 'EatSomeMore']], ['Cadbury', ['Top Deck', 'Aero']]
    );

    midrandShop.products = productsByBrand.flatten().filter((product: string) => Object.getOwnPropertyNames(Brands).includes(product));
    midrandShop.brands = Object.getOwnPropertyNames(Brands);
    midrandShop.updateProducts(new Array<"Top Deck" | "Aero">('Top Deck', 'Aero'))
}
