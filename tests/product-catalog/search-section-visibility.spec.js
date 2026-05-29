const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Check Catalog Search Layout Frame visibility', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await expect(
        storefront.searchTermInput
    ).toBeVisible();
});
