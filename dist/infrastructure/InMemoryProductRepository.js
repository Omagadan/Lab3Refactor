"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryProductRepository = void 0;
class InMemoryProductRepository {
    constructor() {
        this.products = new Map();
    }
    addProduct(product) {
        this.products.set(product.id, product);
    }
    getProductById(id) {
        return this.products.get(id);
    }
    getAllProducts() {
        return Array.from(this.products.values());
    }
    updateProduct(product) {
        this.products.set(product.id, product);
    }
    deleteProduct(id) {
        this.products.delete(id);
    }
}
exports.InMemoryProductRepository = InMemoryProductRepository;
