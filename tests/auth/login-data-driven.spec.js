const { test, expect } = require('@playwright/test');
const AuthPage = require('../../pages/auth.page');

const credentialList = [
    {
        email: 'alex.dev.testing@gmail.com',
        password: 'securePass123',
        expected: 'Logout'
    },
    {
        email: 'bad.user.account@yahoo.com',
        password: 'wrongpassword11',
        expected: 'Your email or password is incorrect!'
    }
];

test.describe('Verify Auth Login Functionality', () => {
    credentialList.forEach(cred => {
        test(`Authenticate user: ${cred.email}`, async ({ page }) => {
            const authPage = new AuthPage(page);
            await authPage.openApp();
            await authPage.navigateToAuth();
            await authPage.performLogin(cred.email, cred.password);

            if (cred.expected === 'Logout') {
                await expect(authPage.logoutButton).toBeVisible();
            } else {
                await expect(authPage.loginErrorAlert).toContainText(cred.expected);
            }
        });
    });
});
