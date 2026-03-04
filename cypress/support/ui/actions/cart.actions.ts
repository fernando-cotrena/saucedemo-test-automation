import { cartPage } from '../pages/cart.page';

class CartActions {
  addFirstProduct() {
    cartPage.addToCartButtons.first().click();
  }

  addMultipleProducts(count: number) {
    for (let i = 0; i < count; i++) {
      cartPage.addToCartButtons.eq(i).click();
    }
  }

  addProductByName(productName: string) {
    cartPage.getProductAddToCartBtn(productName).click();
  }

  goToCart() {
    cartPage.cartLink.click();
  }
}

export const cartActions = new CartActions();
