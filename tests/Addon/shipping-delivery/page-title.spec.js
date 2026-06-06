const { test, expect } = require('../../../fixtures/base-fixture');

test('Check Document Title For Basket / Delivery Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'commit' });
    await expect(page).toHaveTitle(/Automation Exercise/);
});
