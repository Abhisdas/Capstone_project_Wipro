const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Verify Confirmation Popup Closes After Keep Shopping Click', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.placeTopItemInBasket();
    await storefront.dismissConfirmationPopup();
    await expect(page.locator('#cartModal')).toBeHidden();
});
