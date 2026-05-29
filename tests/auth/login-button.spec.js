const { test, expect } = require('@playwright/test');

test('Ensure Sign-In Button Renders on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('button', { name: 'Login' })
    ).toBeVisible();
});
