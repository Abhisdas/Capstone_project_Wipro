const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Verify Added Product Appears in Basket View', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.placeTopItemInBasket();
    await storefront.dismissConfirmationPopup();
    await storefront.openBasketPage();
    await expect(storefront.basketItemHeading).toBeVisible();
});
