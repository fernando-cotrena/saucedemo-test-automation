import { loginPage } from '../pages/login.page';

class LoginActions {
  visit() {
    cy.visit('/');
  }

  typeUsername(username: string) {
    loginPage.usernameInput.clear().type(username);
  }

  typePassword(password: string) {
    loginPage.passwordInput.clear().type(password);
  }

  clickLogin() {
    loginPage.loginButton.click();
  }

  login(username?: string, password?: string) {
    this.visit();
    if (username) this.typeUsername(username);
    if (password) this.typePassword(password);
    this.clickLogin();
  }
}

export const loginActions = new LoginActions();
