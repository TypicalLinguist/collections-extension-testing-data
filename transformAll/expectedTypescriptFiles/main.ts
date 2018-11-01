import {Array, Map} from "@typical-linguist/collections-extension";
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

    midrandShop.products = (productsByBrand.flatten().filter((product: string) => (Object.getOwnPropertyNames(Brands) as Array<string>).includes(product)) as Array<any>);
    midrandShop.brands = (Object.getOwnPropertyNames(Brands) as Array<string>);
    midrandShop.updateProducts(new Array<string>('Top Deck', 'Aero'))
}