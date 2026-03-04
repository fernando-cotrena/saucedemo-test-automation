import { cartPage } from '../pages/cart.page';

class CartAssertions {
  verifyCartBadge(expectedCount: string) {
    cartPage.cartBadge.should('have.text', expectedCount);
  }

  verifyIncorrectCartBadge(expectedCount: string) {
    // Intentionally fail by checking wrong text
    cartPage.cartBadge.should('have.text', expectedCount);
  }
}

export const cartAssertions = new CartAssertions();
