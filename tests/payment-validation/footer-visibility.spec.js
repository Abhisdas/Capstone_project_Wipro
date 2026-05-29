const { test, expect } = require('@playwright/test');

test('Confirm Footer Section Renders on Payment Gateway View', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(page.locator('#footer')).toBeVisible();
});
