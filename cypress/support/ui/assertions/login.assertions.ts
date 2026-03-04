import { loginPage } from '../pages/login.page';

class LoginAssertions {
  verifyLoginSuccess() {
    cy.url().should('include', '/inventory.html');
  }

  verifyErrorMessage(expectedMessage: string) {
    loginPage.errorMessage.should('be.visible').and('contain.text', expectedMessage);
  }
}

export const loginAssertions = new LoginAssertions();
