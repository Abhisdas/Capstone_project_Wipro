const { test, expect } = require('../../../fixtures/base-fixture');

test('Check Home Page Link Presence in Header Menu for Delivery', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'commit' });
    await expect(
        page.getByRole('link', { name: 'Home' }).first()
    ).toBeVisible();
});
