class CartPage {
  get inventoryItems() { return cy.get('.inventory_item'); }
  get addToCartButtons() { return cy.get('[data-test^="add-to-cart-"]'); }
  get cartBadge() { return cy.get('.shopping_cart_badge'); }
  get cartLink() { return cy.get('.shopping_cart_link'); }
  
  getProductAddToCartBtn(productName: string) {
    return cy.contains('.inventory_item', productName).find('button');
  }
}

export const cartPage = new CartPage();
