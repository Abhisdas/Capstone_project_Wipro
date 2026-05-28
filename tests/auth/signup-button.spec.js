const { test, expect } = require('@playwright/test');

test('Check Signup Button Visibility on Auth Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('button', { name: 'Signup' })
    ).toBeVisible();
});
