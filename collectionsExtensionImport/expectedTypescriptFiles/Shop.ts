import {Array, Map} from "@typical-linguist/collections-extension";

export class Shop {
    products: string[];
    brands: string[] = new Array<string>("Weight-Less");
    _sections: Map<string, any[]>;

    constructor(public aisleNames = new Array<string>("Personal Hygiene", "Coldrinks", "Baked goods", "Canned Goods")) {
    }

    set sections(sections: Map<string, any[]>) {
        this._sections = sections
    }

    updataSections(sections = new Map<string, any[]>(
        new Array<any>(
            new Array<string | Array<{obj: string}>>(
                "Things",
                new Array<{obj: string}>({obj: "stuff"})
            ),
        )
                   )
    ) {
        console.log("This is deprecated, please use setter")
    }

    switchOnLights() {
        console.log("LightsOn")
    }

    updateProducts(products = new Array<string>("Tennis Biscuit", "EatSomeMore")) {
        this.products = products
    }
}

const ShopLocations = new Array<string>("Cape Town CBD", "Midrand", "OtherPlace")

