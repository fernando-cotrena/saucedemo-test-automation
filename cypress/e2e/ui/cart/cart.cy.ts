import { cartActions } from '../../../support/ui/actions/cart.actions';
import { cartAssertions } from '../../../support/ui/assertions/cart.assertions';
import { loginActions } from '../../../support/ui/actions/login.actions';

describe('Cart Functionality', () => {
  beforeEach(() => {
    loginActions.login('standard_user', 'secret_sauce');
  });

  it('Should add a single product to the cart', () => {
    cartActions.addFirstProduct();
    cartAssertions.verifyCartBadge('1');
  });

  it('Should add multiple products to the cart', () => {
    cartActions.addMultipleProducts(3);
    cartAssertions.verifyCartBadge('3');
  });

  it('Should fail intentionally when validating incorrect cart badge', () => {
    cartActions.addFirstProduct();
    cartAssertions.verifyIncorrectCartBadge('2');
  });
});
