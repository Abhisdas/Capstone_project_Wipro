const { test, expect } = require('@playwright/test');
const AuthPage = require('../../pages/auth.page');
const signupData = require('../../data/signup-data');

signupData.forEach((data) => {
    test(`Registration Validation for User: ${data.name || 'Empty Name'}`, async ({ page }) => {
        const authPage = new AuthPage(page);
        await authPage.openApp();
        await authPage.navigateToAuth();
        await authPage.performRegistration(data.name, data.email);

        if (data.expected === "success") {
            await expect(page).toHaveURL(/signup/);
        } else {
            await expect(authPage.registerButton).toBeVisible();
        }
    });
});
