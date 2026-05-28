const { test, expect } = require('@playwright/test');

test('Check Subscription Footer Area Visibility inside Delivery Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.getByText('Subscription')
    ).toBeVisible();
});
