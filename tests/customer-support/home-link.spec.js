const { test, expect } = require('@playwright/test');

test('Check Home Page Link Presence in Support Header Menu', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.getByRole('link', { name: 'Home' })
    ).toBeVisible();
});
