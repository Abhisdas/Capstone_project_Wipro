const { test, expect } = require('../../fixtures/base-fixture');
const StorefrontManager = require('../../pages/catalog.page');

test('Confirm Top Navigation Menu Present on Basket Page', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openBasketPage();
    await expect(page.locator('.shop-menu')).toBeVisible();
});
