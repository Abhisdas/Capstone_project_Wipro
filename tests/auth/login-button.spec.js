const { test, expect } = require('@playwright/test');

test('Check Login Button Visibility on Auth Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('button', { name: 'Login' })
    ).toBeVisible();
});
