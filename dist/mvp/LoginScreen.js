"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginScreen = void 0;
const LoginPresenter_1 = require("./LoginPresenter");
const UserService_1 = require("./UserService");
class LoginScreen {
    constructor() {
        this.presenter = new LoginPresenter_1.LoginPresenter(new UserService_1.UserService(), this);
    }
    showSuccessMessage() {
        console.log("Login successful!");
    }
    showErrorMessage() {
        console.log("Login failed!");
    }
    render() {
        const username = "user"; // Simulado
        const password = "pass"; // Simulado
        this.presenter.login(username, password);
    }
}
exports.LoginScreen = LoginScreen;
