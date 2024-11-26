import { Product } from "../domain/Product";

export class ProductCatalogViewModel {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
    this.notify();
  }

  getProducts(): Product[] {
    return this.products;
  }

  private notify(): void {
    console.log("Products updated:", this.products);
  }
}
