"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolePaymentProcessor = void 0;
class ConsolePaymentProcessor {
    processPayment(amount) {
        console.log(`Processing payment for: $${amount}`);
    }
}
exports.ConsolePaymentProcessor = ConsolePaymentProcessor;
