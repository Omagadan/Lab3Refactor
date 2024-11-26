import { UserService } from "./UserService";
import { LoginView } from "./LoginView";

export class LoginPresenter {
  constructor(private userService: UserService, private view: LoginView) {}

  login(username: string, password: string): void {
    if (this.userService.authenticate(username, password)) {
      this.view.showSuccessMessage();
    } else {
      this.view.showErrorMessage();
    }
  }
}
