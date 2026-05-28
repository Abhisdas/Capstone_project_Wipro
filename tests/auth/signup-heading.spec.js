const { test, expect } = require('@playwright/test');

test('Check Signup Header Visibility on Auth Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByText('New User Signup!')
    ).toBeVisible();
});
