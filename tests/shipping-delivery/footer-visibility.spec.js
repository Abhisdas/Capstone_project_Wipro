const { test, expect } = require('@playwright/test');

test('Check Footer Block Visibility inside Delivery layout', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.locator('#footer')
    ).toBeVisible();
});
