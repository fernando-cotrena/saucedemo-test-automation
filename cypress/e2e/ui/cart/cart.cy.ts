import { cartActions } from '../../../support/ui/actions/cart.actions'
import { cartAssertions } from '../../../support/ui/assertions/cart.assertions'
import { loginActions } from '../../../support/ui/actions/login.actions'

describe('Cart Functionality', () => {
  beforeEach(() => {
    loginActions.login('standard_user', 'secret_sauce')
  })

  it('Should add a single product to the cart', () => {
    cartActions.addFirstProduct()
    cartAssertions.verifyCartBadge('2')
  })

  it('Should add multiple products to the cart', () => {
    cartActions.addMultipleProducts(3)
    cartAssertions.verifyCartBadge('3')
  })

})
