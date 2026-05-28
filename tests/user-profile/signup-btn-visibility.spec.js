const { test, expect } = require('@playwright/test');

test('Check Signup Submission Button Presence on Authentication View', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('button', { name: 'Signup' })
    ).toBeVisible();
});
