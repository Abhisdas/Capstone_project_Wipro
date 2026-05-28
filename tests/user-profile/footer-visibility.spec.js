const { test, expect } = require('@playwright/test');

test('Check Footer Block Visibility inside Auth Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.locator('#footer')
    ).toBeVisible();
});
