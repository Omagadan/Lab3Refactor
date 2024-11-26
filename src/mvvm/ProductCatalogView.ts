import { ProductCatalogViewModel } from "./ProductCatalogViewModel";
import { Product } from "../domain/Product";

export class ProductCatalogView {
  constructor(private viewModel: ProductCatalogViewModel) {}

  render(): void {
    console.log("Catalog:", this.viewModel.getProducts());
  }

  addProduct(name: string, price: number, quantity: number): void {
    this.viewModel.addProduct(
      new Product(Date.now().toString(), name, price, quantity)
    );
    this.render();
  }
}
