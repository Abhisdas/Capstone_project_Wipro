const { test, expect } = require('../../fixtures/base-fixture');

test('Check Login Button Presence on Authentication View', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByRole('button', { name: 'Login' })
    ).toBeVisible();
});
