export class Shop {
    products: string[];
    brands: string[] = ['Weight-Less'];
    _sections: Map<string, any[]>;

    constructor(public aisleNames = ['Personal Hygiene', 'Coldrinks', 'Baked goods', 'Canned Goods']) {
    }

    set sections(sections: Map<string, any[]>) {
        this._sections = sections
    }

    updataSections(sections = new Map<string, any[]>(
        [
            [
                "Things",
                [{obj: "stuff"}]
            ]
        ]
                   )
    ) {
        console.log("This is deprecated, please use setter")
    }

    switchOnLights() {
        console.log('LightsOn')
    }

    updateProducts(products = ['Tennis Biscuit', 'EatSomeMore']) {
        this.products = products
    }
}

const ShopLocations = ['Cape Town CBD', 'Midrand', 'OtherPlace']