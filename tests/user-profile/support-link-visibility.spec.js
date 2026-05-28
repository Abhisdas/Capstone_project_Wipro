const { test, expect } = require('@playwright/test');

test('Check Contact Us Link Visibility in Auth Context', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('link', { name: 'Contact us' })
    ).toBeVisible();
});
