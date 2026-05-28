const { test, expect } = require('@playwright/test');

test('Check Contact Us Link Visibility in Delivery context', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await expect(
        page.getByRole('link', { name: 'Contact us' })
    ).toBeVisible();
});
