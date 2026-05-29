const { test, expect } = require('@playwright/test');

test('Confirm Name Input Renders on Help Desk Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('input[data-qa="name"]')
    ).toBeVisible();
});
