const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Search for Product Then Add Result to Basket', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.findProductByKeyword('Top');
    await storefront.placeTopItemInBasket();
    await storefront.dismissConfirmationPopup();
    await storefront.openBasketPage();
    await expect(storefront.basketItemHeading).toBeVisible();
});
