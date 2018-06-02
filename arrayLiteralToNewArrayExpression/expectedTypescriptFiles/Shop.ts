export class Shop {
    products: string[];
    brands: string[] = new Array<"Weight-Less">('Weight-Less');

    switchOnLights() {
        console.log('LightsOn')
    }

    updateProducts(products = new Array<"Tennis Biscuit" | "EatSomeMore">('Tennis Biscuit', 'EatSomeMore')) {
        this.products = products
    }
}

const ShopLocations = new Array<"Cape Town CBD" | "Midrand" | "OtherPlace">('Cape Town CBD', 'Midrand', 'OtherPlace')
