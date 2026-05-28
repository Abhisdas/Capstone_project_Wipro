const { test, expect } = require('@playwright/test');

test('Check Catalog Navigation Header Link in Auth view', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('link', { name: 'Products' })
    ).toBeVisible();
});
