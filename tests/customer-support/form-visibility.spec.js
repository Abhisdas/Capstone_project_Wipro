const { test, expect } = require('@playwright/test');

test('Check Contact Form Block Presence', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('input[data-qa="name"]')
    ).toBeVisible();
});
