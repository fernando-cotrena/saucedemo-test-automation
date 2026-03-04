import { loginActions } from '../../../support/ui/actions/login.actions';
import { loginAssertions } from '../../../support/ui/assertions/login.assertions';

describe('Login Functionality', () => {
  const users = {
    valid: 'standard_user',
    locked: 'locked_out_user',
    performance: 'performance_glitch_user',
  };
  const password = 'secret_sauce';

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Should login successfully with valid credentials', () => {
    loginActions.login(users.valid, password);
    loginAssertions.verifyLoginSuccess();
  });

  it('Should login successfully with performance user', () => {
    loginActions.login(users.performance, password);
    loginAssertions.verifyLoginSuccess();
  });

  it('Should display error for locked out user', () => {
    loginActions.login(users.locked, password);
    loginAssertions.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });

  it('Should display error for invalid password', () => {
    loginActions.login(users.valid, 'invalid_pwd');
    loginAssertions.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });

  it('Should display error when credentials are empty', () => {
    loginActions.visit();
    loginActions.clickLogin();
    loginAssertions.verifyErrorMessage('Epic sadface: Username is required');
  });
});
