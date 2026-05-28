const { test, expect } = require('@playwright/test');

test('Check Redirection URL For Support Route', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(page).toHaveURL(/contact_us/);
});
