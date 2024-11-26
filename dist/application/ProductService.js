"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(repository) {
        this.repository = repository;
    }
    addProduct(product) {
        this.repository.addProduct(product);
    }
    getAllProducts() {
        return this.repository.getAllProducts();
    }
}
exports.ProductService = ProductService;
