const { test, expect } = require('@playwright/test');

test('Confirm Help Desk Page URL Path', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(page).toHaveURL(/contact_us/);
});
