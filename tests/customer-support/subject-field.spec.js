const { test, expect } = require('@playwright/test');

test('Check Message Subject Textbox Presence inside Support Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('input[data-qa="subject"]')
    ).toBeVisible();
});
