const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Verify Shopping Cart Heading Appears on Basket Page', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openBasketPage();
    await expect(page.getByText('Shopping Cart')).toBeVisible();
});
