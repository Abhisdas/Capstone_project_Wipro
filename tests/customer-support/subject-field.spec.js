const { test, expect } = require('@playwright/test');

test('Confirm Subject Line Input Renders on Help Desk Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('input[data-qa="subject"]')
    ).toBeVisible();
});
