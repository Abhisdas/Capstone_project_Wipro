const { test, expect } = require('@playwright/test');

test('Check Shopping Cart Breadcrumb Node Visibility', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.getByText('Shopping Cart')
    ).toBeVisible();
});
