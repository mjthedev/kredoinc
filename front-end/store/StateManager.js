

export default class StateManager {

    constructor() {
    this.AllProductsState = null;
    this.ShirtsProductsState = null;
    this.PantsProductsState = null;
    this.ShoesProductsState = null;
    }

    AllowAllProducts() {
        this.AllProductsState = true;
        this.ShirtsProductsState = false;
        this.PantsProductsState = false;
        this.ShoesProductsState = false;
    }

    AllowShirtsProducts() {
        this.AllProductsState = false;
        this.ShirtsProductsState = true;
        this.PantsProductsState = false;
        this.ShoesProductsState = false;
    }

    AllowPantsProducts() {
        this.AllProductsState = false;
        this.ShirtsProductsState = false;
        this.PantsProductsState = true;
        this.ShoesProductsState = false;
    }
    AllowShoesProducts() {
        this.AllProductsState = false;
        this.ShirtsProductsState = false;
        this.PantsProductsState = false;
        this.ShoesProductsState = true;
    }
}