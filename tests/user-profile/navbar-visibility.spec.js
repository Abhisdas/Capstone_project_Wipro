const { test, expect } = require('@playwright/test');

test('Confirm Top Menu on Profile View Presence in login view', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.locator('.shop-menu')
    ).toBeVisible();
});
