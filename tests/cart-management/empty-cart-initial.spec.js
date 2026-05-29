const { test, expect } = require('../../fixtures/base-fixture');
const StorefrontManager = require('../../pages/catalog.page');

test('Verify Fresh Basket Has No Items Listed', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openBasketPage();
    await expect(storefront.basketItemHeading).not.toBeVisible();
});
