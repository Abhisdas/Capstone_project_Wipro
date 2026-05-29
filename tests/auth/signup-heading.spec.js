const { test, expect } = require('@playwright/test');

test('Ensure New User Registration Heading Renders', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByText('New User Signup!')
    ).toBeVisible();
});
