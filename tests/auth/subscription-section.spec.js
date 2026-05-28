const { test, expect } = require('@playwright/test');

test('Check Subscription Footer Visibility on Auth Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('heading', { name: 'Subscription' })
    ).toBeVisible();
});
