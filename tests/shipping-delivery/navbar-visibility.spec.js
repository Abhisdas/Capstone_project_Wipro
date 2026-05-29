const { test, expect } = require('@playwright/test');

test('Confirm Top Menu Bar on Delivery Page in Delivery context', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.locator('.shop-menu')
    ).toBeVisible();
});
