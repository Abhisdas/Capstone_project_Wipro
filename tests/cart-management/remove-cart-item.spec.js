const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Verify Item Disappears After Basket Removal Action', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.placeTopItemInBasket();
    await storefront.dismissConfirmationPopup();
    await storefront.openBasketPage();
    await storefront.discardBasketItem();
    await expect(storefront.basketItemHeading).not.toBeVisible();
});
