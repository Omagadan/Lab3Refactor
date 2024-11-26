"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor() {
        this.validCredentials = { username: "user", password: "pass" };
    }
    authenticate(username, password) {
        return (username === this.validCredentials.username &&
            password === this.validCredentials.password);
    }
}
exports.UserService = UserService;
