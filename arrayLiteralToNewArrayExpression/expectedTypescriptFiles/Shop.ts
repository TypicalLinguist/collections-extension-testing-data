export class Shop {
    products: string[];
    brands: string[] = new Array<string>('Weight-Less');

    constructor(public aisleNames = new Array<string>('Personal Hygiene', 'Coldrinks', 'Baked goods', 'Canned Goods')){
    }

    switchOnLights() {
        console.log('LightsOn')
    }

    updateProducts(products = new Array<string>('Tennis Biscuit', 'EatSomeMore')) {
        this.products = products
    }
}

const ShopLocations = new Array<string>('Cape Town CBD', 'Midrand', 'OtherPlace')
