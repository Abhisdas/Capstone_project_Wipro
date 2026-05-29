const { test, expect } = require('@playwright/test');

test('Confirm Get In Touch Title Renders on Help Desk', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(page.getByText('Get In Touch')).toBeVisible();
});
