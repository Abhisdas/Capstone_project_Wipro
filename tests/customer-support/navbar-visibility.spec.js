const { test, expect } = require('@playwright/test');

test('Check Header Navigation Bar Presence in Support Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('.shop-menu')
    ).toBeVisible();
});
