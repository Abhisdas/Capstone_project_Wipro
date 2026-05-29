const { test, expect } = require('../../fixtures/base-fixture');

test('Check Login Form Header Banner Visibility', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByText('Login to your account')
    ).toBeVisible();
});
