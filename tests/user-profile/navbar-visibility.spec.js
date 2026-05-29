const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Top Menu on Profile View Presence in login view', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.locator('.shop-menu')
    ).toBeVisible();
});
