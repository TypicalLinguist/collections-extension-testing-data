import {Brands} from "./Brands";
import {Shop} from "./Shop";

const midrandShop = new Shop(['Toiletries', 'Wine']);

function main() {

    const productsByBrand = [
        ['Bakers', ['Tennis Biscuit', 'EatSomeMore']],
        ['Cadbury', ['Top Deck', 'Aero']]
    ];

    midrandShop.products = productsByBrand.flatten().filter((product: string) => Object.getOwnPropertyNames(Brands).includes(product));
    midrandShop.brands = Object.getOwnPropertyNames(Brands);
    midrandShop.updateProducts(['Top Deck', 'Aero'])
}