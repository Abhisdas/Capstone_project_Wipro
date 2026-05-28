const { test, expect } = require('@playwright/test');

test('Check URL Route For Login / Registration Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(page).toHaveURL(/login/);
});
