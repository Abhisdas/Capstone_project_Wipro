const { test, expect } = require('@playwright/test');
const AuthPage = require('../../pages/auth.page');
const loginData = require('../../data/login-data');

loginData.forEach((data) => {
    test(`Login Validation for User: ${data.email || 'Empty Email'}`, async ({ page }) => {
        const authPage = new AuthPage(page);
        await authPage.openApp();
        await authPage.navigateToAuth();
        await authPage.performLogin(data.email, data.password);

        if (data.expected === "success") {
            await expect(page).toHaveURL(/automationexercise/);
        } else {
            if (data.email === "" || data.password === "") {
                await expect(authPage.loginButton).toBeVisible();
            } else {
                await expect(authPage.loginErrorAlert).toBeVisible();
            }
        }
    });
});
