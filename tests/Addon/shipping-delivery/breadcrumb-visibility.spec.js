const { test, expect } = require('../../fixtures/base-fixture');

test('Check Shopping Cart Breadcrumb Node Visibility', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'commit' });
    await expect(
        page.getByText('Shopping Cart')
    ).toBeVisible();
});
