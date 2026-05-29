const { test, expect } = require('@playwright/test');

test('Confirm File Attachment Picker Renders on Help Desk Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('input[name="upload_file"]')
    ).toBeAttached();
});
