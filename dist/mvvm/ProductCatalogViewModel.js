"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCatalogViewModel = void 0;
class ProductCatalogViewModel {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
        this.notify();
    }
    getProducts() {
        return this.products;
    }
    notify() {
        console.log("Products updated:", this.products);
    }
}
exports.ProductCatalogViewModel = ProductCatalogViewModel;
