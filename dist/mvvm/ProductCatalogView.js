"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCatalogView = void 0;
const Product_1 = require("../domain/Product");
class ProductCatalogView {
    constructor(viewModel) {
        this.viewModel = viewModel;
    }
    render() {
        console.log("Catalog:", this.viewModel.getProducts());
    }
    addProduct(name, price, quantity) {
        this.viewModel.addProduct(new Product_1.Product(Date.now().toString(), name, price, quantity));
        this.render();
    }
}
exports.ProductCatalogView = ProductCatalogView;
