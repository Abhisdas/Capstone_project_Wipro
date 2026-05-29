const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Check Modal Continue Shopping Action Visibility', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.placeTopItemInBasket();
    await expect(
        storefront.keepShoppingBtn
    ).toBeVisible();
});
