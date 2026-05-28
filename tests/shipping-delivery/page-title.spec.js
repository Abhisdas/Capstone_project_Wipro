const { test, expect } = require('@playwright/test');

test('Check Document Title For Basket / Delivery Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(page).toHaveTitle(/Automation Exercise/);
});
