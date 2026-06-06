const { test, expect } = require('../../../fixtures/base-fixture');

test('Confirm Footer Section on Delivery Page inside Delivery layout', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'commit' });
    await expect(
        page.locator('#footer')
    ).toBeVisible();
});
