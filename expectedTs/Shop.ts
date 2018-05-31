import { Array } from "@typical-linguist/collections-extension";

export class Shop {
    products: string[];
    brands: string[] = new Array<string>('Weight-Less');

    switchOnLights() {
        console.log('LightsOn')
    }
}
