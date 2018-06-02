export class Shop {
    products: string[];
    brands: string[] = new Array<string>('Weight-Less');

    switchOnLights() {
        console.log('LightsOn')
    }
}

const ShopLocations = new Array<string>('Cape Town CBD', 'Midrand', 'OtherPlace')