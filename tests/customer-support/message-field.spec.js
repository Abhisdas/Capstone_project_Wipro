const { test, expect } = require('@playwright/test');

test('Check Message Body Field Presence inside Support Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('#message')
    ).toBeVisible();
});
