const { test, expect } = require('../../fixtures/base-fixture');

test('Check URL Route For Login / Registration Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await page.locator('input[data-qa="login-email"]').waitFor({ state: 'visible', timeout: 15000 });
    await expect(page).toHaveURL(/login/);
});
