const { test, expect } = require('../../fixtures/base-fixture');

test('Check Redirect route to Basket from Navbar', async ({ page }) => {
    await page.goto('https://automationexercise.com', { waitUntil: 'commit' });
    await page.getByRole('link', { name: 'Cart' }).first().click();
    await expect(page).toHaveURL(/view_cart/);
});
