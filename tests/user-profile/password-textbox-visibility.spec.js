const { test, expect } = require('@playwright/test');

test('Check Password Field Presence inside Auth Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByPlaceholder('Password')
    ).toBeVisible();
});
