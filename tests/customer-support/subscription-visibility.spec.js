const { test, expect } = require('@playwright/test');

test('Check Subscription Subsection inside Support Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.getByText('Subscription')
    ).toBeVisible();
});
