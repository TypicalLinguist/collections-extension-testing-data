export class Shop {
    products: string[];
    brands: string[] = ['Weight-Less'];

    switchOnLights() {
        console.log('LightsOn')
    }

    updateProducts(products = ['Tennis Biscuit', 'EatSomeMore']) {
        this.products = products
    }
}

const ShopLocations = ['Cape Town CBD', 'Midrand', 'OtherPlace']