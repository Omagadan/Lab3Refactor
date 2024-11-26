import { CartItem } from "../domain/CartItem";
import { PaymentProcessor } from "../domain/PaymentProcessor";

export class ShoppingCart {
  private items: CartItem[] = [];

  constructor(private paymentProcessor: PaymentProcessor) {}

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  checkout(): void {
    const total = this.calculateTotal();
    this.paymentProcessor.processPayment(total);
  }
}
