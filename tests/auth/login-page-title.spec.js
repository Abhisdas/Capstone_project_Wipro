const { test, expect } = require('@playwright/test');

test('Confirm Auth Page Document Title Matches Expected', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(page).toHaveTitle(/Automation Exercise/);
});
