import { ProductService } from "./application/ProductService";
import { InMemoryProductRepository } from "./infrastructure/InMemoryProductRepository";
import { LoginPresenter } from "./mvp/LoginPresenter";
import { UserService } from "./mvp/UserService";
import { ProductCatalogViewModel } from "./mvvm/ProductCatalogViewModel";

const productRepository = new InMemoryProductRepository();
const productService = new ProductService(productRepository);

productService.addProduct({
  id: "0",
  name: "Laptop",
  price: 1500,
  quantity: 5,
});
productService.addProduct({
  id: "0",
  name: "Headphones",
  price: 300,
  quantity: 10,
});

console.log("Product List:", productService.getAllProducts());

const fakeUserService = {
  authenticate: (username: string, password: string) =>
    username === "user" && password === "pass",
  validCredentials: { username: "user", password: "pass" },
};

const loginView = {
  showSuccessMessage: () => console.log("Login successful!"),
  showErrorMessage: () => console.log("Invalid credentials!"),
};

const loginPresenter = new LoginPresenter(fakeUserService, loginView);
loginPresenter.login("user", "pass"); // Probar un inicio de sesión exitoso
loginPresenter.login("user", "wrongpassword"); // Probar un inicio de sesión fallido
