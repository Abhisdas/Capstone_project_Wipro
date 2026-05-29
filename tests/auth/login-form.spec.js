const { test, expect } = require('@playwright/test');

test('Ensure Login Section Heading Renders on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByText('Login to your account')
    ).toBeVisible();
});
