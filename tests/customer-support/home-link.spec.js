const { test, expect } = require('@playwright/test');

test('Confirm Home Navigation Link on Help Desk Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.getByRole('link', { name: 'Home' }).first()
    ).toBeVisible();
});
