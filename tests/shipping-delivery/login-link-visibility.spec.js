const { test, expect } = require('@playwright/test');

test('Check Login Page Link Presence in Header Menu for Delivery', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.getByRole('link', { name: 'Signup / Login' })
    ).toBeVisible();
});
