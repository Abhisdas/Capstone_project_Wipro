const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Verify Item Quantity Defaults to One After Adding', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.placeTopItemInBasket();
    await storefront.dismissConfirmationPopup();
    await storefront.openBasketPage();
    await expect(storefront.basketItemCount).toContainText('1');
});
