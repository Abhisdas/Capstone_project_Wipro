const { test, expect } = require('@playwright/test');

test('Check Basket Section Visibility for Billing', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.getByText('Shopping Cart')
    ).toBeVisible();
});
