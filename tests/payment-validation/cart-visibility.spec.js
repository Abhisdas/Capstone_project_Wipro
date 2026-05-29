const { test, expect } = require('@playwright/test');

test('Confirm Cart Section Renders on Payment Gateway View', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(page.getByText('Shopping Cart')).toBeVisible();
});
