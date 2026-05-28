const { test, expect } = require('@playwright/test');

test('Check Signup Form Header Banner Visibility on login view', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByText('New User Signup!')
    ).toBeVisible();
});
