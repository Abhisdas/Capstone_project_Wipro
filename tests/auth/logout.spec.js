const { test, expect } = require('@playwright/test');

test('Check Logout State Link Visibility', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('link', { name: 'Signup / Login' })
    ).toBeVisible();
});
