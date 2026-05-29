const { test, expect } = require('../../fixtures/base-fixture');
const StorefrontManager = require('../../pages/catalog.page');

test('Verify Basket Contents Survive Page Navigation', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.placeTopItemInBasket();
    await storefront.dismissConfirmationPopup();
    await page.goto('https://automationexercise.com/', { waitUntil: 'commit' });
    await storefront.openBasketPage();
    await expect(storefront.basketItemHeading).toBeVisible();
});
