import { LoginPresenter } from "./LoginPresenter";
import { UserService } from "./UserService";
import { LoginView } from "./LoginView";

export class LoginScreen implements LoginView {
  private presenter: LoginPresenter;

  constructor() {
    this.presenter = new LoginPresenter(new UserService(), this);
  }

  showSuccessMessage(): void {
    console.log("Login successful!");
  }

  showErrorMessage(): void {
    console.log("Login failed!");
  }

  render(): void {
    const username = "user"; // Simulado
    const password = "pass"; // Simulado
    this.presenter.login(username, password);
  }
}
