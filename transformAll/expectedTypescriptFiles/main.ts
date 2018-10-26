import {Array} from "@typical-linguist/collections-extension";
import {Brands} from "./Brands";
import {Shop} from "./Shop";

const midrandShop = new Shop(new Array<string>('Toiletries', 'Wine'));

function main() {
    const productsByBrand = new Array<Array<string | Array<string>>>(
        new Array<string | Array<string>>(
            'Bakers',
            new Array<string>('Tennis Biscuit', 'EatSomeMore')
        ),
        new Array<string | Array<string>>(
            'Cadbury',
            new Array<string>('Top Deck', 'Aero')
        )
    );

    midrandShop.products = productsByBrand.flatten().filter((product: string) => Object.getOwnPropertyNames(Brands).includes(product));
    midrandShop.brands = Object.getOwnPropertyNames(Brands);
    midrandShop.updateProducts(new Array<string>('Top Deck', 'Aero'))
}