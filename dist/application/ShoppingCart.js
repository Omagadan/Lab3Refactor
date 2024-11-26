"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    checkout() {
        const total = this.calculateTotal();
        this.paymentProcessor.processPayment(total);
    }
}
exports.ShoppingCart = ShoppingCart;
