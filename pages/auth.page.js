/**
 * Page Object Model representing the Authentication & Registration flows
 */
class AuthPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        // Registration Locators
        this.regNameField = page.locator('input[data-qa="signup-name"]');
        this.regEmailField = page.locator('input[data-qa="signup-email"]');
        this.registerButton = page.getByRole('button', { name: 'Signup' });

        // Login Locators
        this.authPageLink = page.getByRole('link', { name: 'Signup / Login' });
        this.loginEmailField = page.locator('input[data-qa="login-email"]');
        this.loginPasswordField = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.logoutButton = page.getByRole('link', { name: 'Logout' });

        // Feedback Locators
        this.loginErrorAlert = page.locator('text=Your email or password is incorrect!');
    }

    /**
     * Navigate to the home page of the application under test
     */
    async openApp() {
        await this.page.goto('https://automationexercise.com/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    }

    /**
     * Click the login/registration navigation link in the header
     */
    async navigateToAuth() {
        await this.authPageLink.waitFor({ state: 'visible' });
        await this.authPageLink.scrollIntoViewIfNeeded();
        await this.authPageLink.click({ force: true });
    }

    /**
     * Perform login action
     * @param {string} email
     * @param {string} password
     */
    async performLogin(email, password) {
        await this.loginEmailField.fill(email);
        await this.loginPasswordField.fill(password);
        await this.loginButton.waitFor({ state: 'visible' });
        await this.loginButton.scrollIntoViewIfNeeded();
        await this.loginButton.click({ force: true });
    }

    /**
     * Perform registration registration action
     * @param {string} name
     * @param {string} email
     */
    async performRegistration(name, email) {
        await this.regNameField.fill(name);
        await this.regEmailField.fill(email);
        await this.registerButton.waitFor({ state: 'visible' });
        await this.registerButton.scrollIntoViewIfNeeded();
        await this.registerButton.click({ force: true });
    }
}

module.exports = AuthPage;
