/**
 * AccountGateway - Handles user authentication workflows
 * including sign-in, sign-up, and session termination.
 *
 * This page object encapsulates all interactions with
 * the authentication and registration interface.
 */
class AccountGateway {

    /**
     * Initializes locator references for the account gateway page
     * @param {import('@playwright/test').Page} browserPage - Active Playwright page context
     */
    constructor(browserPage) {
        this.browserPage = browserPage;

        // -- Sign-Up Form Elements --
        this.nameInputForSignup = browserPage.locator('input[data-qa="signup-name"]');
        this.emailInputForSignup = browserPage.locator('input[data-qa="signup-email"]');
        this.signupSubmitBtn = browserPage.getByRole('button', { name: 'Signup' });

        // -- Sign-In Form Elements --
        this.headerAuthLink = browserPage.getByRole('link', { name: 'Signup / Login' });
        this.signInEmailInput = browserPage.locator('input[data-qa="login-email"]');
        this.signInPasswordInput = browserPage.locator('input[data-qa="login-password"]');
        this.signInSubmitBtn = browserPage.getByRole('button', { name: 'Login' });
        this.sessionEndLink = browserPage.getByRole('link', { name: 'Logout' });

        // -- Error and Status Indicators --
        this.credentialMismatchAlert = browserPage.locator('text=Your email or password is incorrect!');
    }

    /**
     * Loads the base application URL in the active browser tab
     */
    async launchHomePage() {
        await this.browserPage.goto('https://automationexercise.com/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    }

    /**
     * Opens the authentication portal by clicking the header navigation item
     */
    async goToAuthPortal() {
        await this.headerAuthLink.waitFor({ state: 'visible' });
        await this.headerAuthLink.scrollIntoViewIfNeeded();
        await this.headerAuthLink.click({ force: true });
    }

    /**
     * Fills in the sign-in form and submits it
     * @param {string} userEmail - Email credential for sign-in
     * @param {string} userPassword - Password credential for sign-in
     */
    async executeSignIn(userEmail, userPassword) {
        await this.signInEmailInput.fill(userEmail);
        await this.signInPasswordInput.fill(userPassword);
        await this.signInSubmitBtn.waitFor({ state: 'visible' });
        await this.signInSubmitBtn.scrollIntoViewIfNeeded();
        await this.signInSubmitBtn.click({ force: true });
    }

    /**
     * Fills in the sign-up form and submits it
     * @param {string} fullName - Display name for the new account
     * @param {string} emailAddr - Email address for registration
     */
    async executeSignUp(fullName, emailAddr) {
        await this.nameInputForSignup.fill(fullName);
        await this.emailInputForSignup.fill(emailAddr);
        await this.signupSubmitBtn.waitFor({ state: 'visible' });
        await this.signupSubmitBtn.scrollIntoViewIfNeeded();
        await this.signupSubmitBtn.click({ force: true });
    }
}

module.exports = AccountGateway;
