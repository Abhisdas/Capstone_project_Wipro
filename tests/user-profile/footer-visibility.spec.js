const { test, expect } = require('@playwright/test');

test('Confirm Footer Renders on Profile View inside Auth Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.locator('#footer')
    ).toBeVisible();
});
