const { test, expect } = require('@playwright/test');

test('Check File Attachment Button Presence inside Support Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('input[name="upload_file"]')
    ).toBeVisible();
});
