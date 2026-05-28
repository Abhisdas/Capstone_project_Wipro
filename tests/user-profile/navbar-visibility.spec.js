const { test, expect } = require('@playwright/test');

test('Check Header Navigation Bar Presence in login view', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.locator('.shop-menu')
    ).toBeVisible();
});
