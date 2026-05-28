const { test, expect } = require('@playwright/test');

test('Check Home Navigation Link Click from Login Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await page.getByRole('link', { name: 'Home' }).first().click();
    await expect(page).toHaveURL('https://automationexercise.com/');
});
