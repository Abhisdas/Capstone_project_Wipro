const { test, expect } = require('@playwright/test');

test('Check Route Navigation to Auth Form from Header Link', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(page).toHaveURL(/login/);
});
