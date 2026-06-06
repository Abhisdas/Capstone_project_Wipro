const { test, expect } = require('../../../fixtures/base-fixture');

test('Confirm Footer Section Renders on Payment Gateway View', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'commit' });
    await expect(page.locator('#footer')).toBeVisible();
});
