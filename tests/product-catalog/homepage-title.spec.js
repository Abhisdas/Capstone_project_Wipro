const { test, expect } = require('@playwright/test');

test('Check Initialization and Title of App Homepage', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
});
