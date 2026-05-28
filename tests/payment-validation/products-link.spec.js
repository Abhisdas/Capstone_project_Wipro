const { test, expect } = require('@playwright/test');

test('Check Catalog Link in Header Menu for Billing page', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.getByRole('link', { name: 'Products' })
    ).toBeVisible();
});
