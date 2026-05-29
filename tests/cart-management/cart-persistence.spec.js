const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Verify Basket Contents Survive Page Navigation', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.placeTopItemInBasket();
    await storefront.dismissConfirmationPopup();
    await page.goto('https://automationexercise.com/');
    await storefront.openBasketPage();
    await expect(storefront.basketItemHeading).toBeVisible();
});
