export class Shop {
    products: Array<string>;
    brands: Array<string> = new Array<string>("Weight-Less");
    _sections: Map<string, Array<any>>;

    constructor(public aisleNames = new Array<string>("Personal Hygiene", "Coldrinks", "Baked goods", "Canned Goods")) {
    }

    set sections(sections: Map<string, Array<any>>) {
        this._sections = sections
    }

    updataSections(sections = new Map<string, Array<{ obj: string; }>>(
        new Array<any>(
            new Array<string | Array<{ obj: string; }>>(
                "Things",
                new Array<{ obj: string; }>({obj: "stuff"})
            )
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

    stockCount(...stockValues: any[]) {
        stockValues = new Array<any>(stockValues);
        console.log(stockValues)
    }
}

const ShopLocations = new Array<string>("Cape Town CBD", "Midrand", "OtherPlace")
