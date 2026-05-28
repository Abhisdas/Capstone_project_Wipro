const { test, expect } = require('@playwright/test');

test('Check Login Page Document Title', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(page).toHaveTitle(/Automation Exercise/);
});
