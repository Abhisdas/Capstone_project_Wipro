const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Initiate Order Flow and Confirm Checkout Button Appears', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.placeTopItemInBasket();
    await storefront.dismissConfirmationPopup();
    await storefront.openBasketPage();
    await expect(storefront.initiateCheckoutBtn).toBeVisible();
});
