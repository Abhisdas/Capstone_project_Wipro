const { test, expect } = require('@playwright/test');

test('Check Password Field Visibility on Auth Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByPlaceholder('Password')
    ).toBeVisible();
});
