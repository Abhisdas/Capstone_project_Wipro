const { test, expect } = require('@playwright/test');

test('Ensure Signup Submit Button Renders on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('button', { name: 'Signup' })
    ).toBeVisible();
});
