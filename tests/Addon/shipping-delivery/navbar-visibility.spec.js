const { test, expect } = require('../../../fixtures/base-fixture');

test('Confirm Top Menu Bar on Delivery Page in Delivery context', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'commit' });
    await expect(
        page.locator('.shop-menu')
    ).toBeVisible();
});
