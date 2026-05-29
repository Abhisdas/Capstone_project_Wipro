const { test, expect } = require('../../fixtures/base-fixture');

test('Check Signup Form Header Banner Visibility on login view', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByText('New User Signup!')
    ).toBeVisible();
});
