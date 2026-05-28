const { test, expect } = require('@playwright/test');

test('Check Catalog Navigation Header Link in Delivery Context', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.getByRole('link', { name: 'Products' })
    ).toBeVisible();
});
