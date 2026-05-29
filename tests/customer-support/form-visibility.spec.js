const { test, expect } = require('@playwright/test');

test('Confirm Help Request Form Elements Rendered', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('input[data-qa="name"]')
    ).toBeVisible();
});
