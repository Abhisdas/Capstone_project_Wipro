const { test, expect } = require('../../fixtures/base-fixture');

test('Check Catalog Navigation Header Link in Delivery Context', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'commit' });
    await expect(
        page.getByRole('link', { name: 'Products' })
    ).toBeVisible();
});
