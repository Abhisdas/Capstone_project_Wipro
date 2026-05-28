const { test, expect } = require('@playwright/test');

test('Check Submit Button Visibility on Support Form', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.locator('input[data-qa="submit-button"]')
    ).toBeVisible();
});
