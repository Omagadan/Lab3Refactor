"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPresenter = void 0;
class LoginPresenter {
    constructor(userService, view) {
        this.userService = userService;
        this.view = view;
    }
    login(username, password) {
        if (this.userService.authenticate(username, password)) {
            this.view.showSuccessMessage();
        }
        else {
            this.view.showErrorMessage();
        }
    }
}
exports.LoginPresenter = LoginPresenter;
