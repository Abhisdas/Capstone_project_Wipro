const { test, expect } = require('@playwright/test');

test('Check Footer Block Visibility inside Support Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('#footer')
    ).toBeVisible();
});
