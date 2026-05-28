const { test, expect } = require('@playwright/test');

test('Check Header Navigation Bar Presence in Delivery context', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.locator('.shop-menu')
    ).toBeVisible();
});
