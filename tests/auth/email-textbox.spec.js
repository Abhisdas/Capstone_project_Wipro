const { test, expect } = require('@playwright/test');

test('Ensure Email Address Input Renders on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByPlaceholder('Email Address').first()
    ).toBeVisible();
});
