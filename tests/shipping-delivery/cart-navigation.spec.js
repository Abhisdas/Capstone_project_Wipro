const { test, expect } = require('@playwright/test');

test('Check Redirect route to Basket from Navbar', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    await page.getByRole('link', { name: 'Cart' }).first().click();
    await expect(page).toHaveURL(/view_cart/);
});
