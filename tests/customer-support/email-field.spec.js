const { test, expect } = require('@playwright/test');

test('Check Email Field Presence inside Support Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('input[data-qa="email"]')
    ).toBeVisible();
});
