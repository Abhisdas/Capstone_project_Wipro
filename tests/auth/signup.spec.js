const { test, expect } = require('../../fixtures/base-fixture');
const AccountGateway = require('../../pages/auth.page');
const signupData = require('../../data/signup-data');

signupData.forEach((candidate) => {
    test(`Registration Attempt for: ${candidate.name || 'Blank Name'}`, async ({ page }) => {
        const gateway = new AccountGateway(page);
        await gateway.launchHomePage();
        await gateway.goToAuthPortal();
        await gateway.executeSignUp(candidate.name, candidate.email);

        if (candidate.expected === "success") {
            await expect(page).toHaveURL(/signup/);
        } else {
            await expect(gateway.signupSubmitBtn).toBeVisible();
        }
    });
});
