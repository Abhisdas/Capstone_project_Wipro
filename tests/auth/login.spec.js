const { test, expect } = require('@playwright/test');
const AccountGateway = require('../../pages/auth.page');
const loginData = require('../../data/login-data');

loginData.forEach((entry) => {
    test(`Sign-In Workflow for Account: ${entry.email || 'Blank Email'}`, async ({ page }) => {
        const gateway = new AccountGateway(page);
        await gateway.launchHomePage();
        await gateway.goToAuthPortal();
        await gateway.executeSignIn(entry.email, entry.password);

        if (entry.expected === "success") {
            await expect(page).toHaveURL(/automationexercise/);
        } else {
            if (entry.email === "" || entry.password === "") {
                await expect(gateway.signInSubmitBtn).toBeVisible();
            } else {
                await expect(gateway.credentialMismatchAlert).toBeVisible();
            }
        }
    });
});
