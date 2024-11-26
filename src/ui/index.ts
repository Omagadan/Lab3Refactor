import { Product } from "../domain/Product";
import { InMemoryProductRepository } from "../infrastructure/InMemoryProductRepository";
import { ProductService } from "../application/ProductService";

const repository = new InMemoryProductRepository();
const service = new ProductService(repository);

const product1 = new Product("1", "Laptop", 1200, 5);
const product2 = new Product("2", "Phone", 800, 10);

service.addProduct(product1);
service.addProduct(product2);

console.log("All Products:", service.getAllProducts());
