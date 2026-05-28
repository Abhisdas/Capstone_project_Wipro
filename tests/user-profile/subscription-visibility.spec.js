const { test, expect } = require('@playwright/test');

test('Check Subscription Footer Area Visibility inside Auth View', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByText('Subscription')
    ).toBeVisible();
});
