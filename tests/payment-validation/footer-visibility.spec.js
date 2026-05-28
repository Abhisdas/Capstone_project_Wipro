const { test, expect } = require('@playwright/test');

test('Check Footer Block Visibility for Billing page', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.locator('#footer')
    ).toBeVisible();
});
