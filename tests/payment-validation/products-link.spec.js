const { test, expect } = require('@playwright/test');

test('Confirm Products Catalog Link on Payment Gateway View', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.getByRole('link', { name: 'Products' })
    ).toBeVisible();
});
