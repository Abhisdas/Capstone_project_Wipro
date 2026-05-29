const { test, expect } = require('@playwright/test');

test('Ensure Newsletter Subscription Section Renders on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('heading', { name: 'Subscription' })
    ).toBeVisible();
});
