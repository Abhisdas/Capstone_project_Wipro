const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Products Catalog Link on Payment Gateway View', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'commit' });
    await expect(
        page.getByRole('link', { name: 'Products' })
    ).toBeVisible();
});
