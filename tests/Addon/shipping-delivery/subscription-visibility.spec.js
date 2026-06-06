const { test, expect } = require('../../../fixtures/base-fixture');

test('Check Subscription Footer Area Visibility inside Delivery Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'commit' });
    await expect(
        page.getByText('Subscription')
    ).toBeVisible();
});
