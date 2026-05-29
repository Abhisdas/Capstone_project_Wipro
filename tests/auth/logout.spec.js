const { test, expect } = require('@playwright/test');

test('Ensure Auth Navigation Link Visible When Logged Out', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('link', { name: 'Signup / Login' })
    ).toBeVisible();
});
