import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class ProductService {
  constructor(private repository: ProductRepository) {}

  addProduct(product: Product): void {
    this.repository.addProduct(product);
  }

  getAllProducts(): Product[] {
    return this.repository.getAllProducts();
  }
}
