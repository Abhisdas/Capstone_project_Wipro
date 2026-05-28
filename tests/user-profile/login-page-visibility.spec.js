const { test, expect } = require('@playwright/test');

test('Check Login Form Header Banner Visibility', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByText('Login to your account')
    ).toBeVisible();
});
