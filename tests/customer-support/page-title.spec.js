const { test, expect } = require('@playwright/test');

test('Check Document Title For Support Window', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(page).toHaveTitle(/Automation Exercise - Contact Us/);
});
