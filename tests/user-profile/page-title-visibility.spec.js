const { test, expect } = require('@playwright/test');

test('Check Document Title For Authentication Window', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(page).toHaveTitle(/Automation Exercise/);
});
