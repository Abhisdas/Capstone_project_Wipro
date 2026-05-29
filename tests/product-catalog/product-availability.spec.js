const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Check Stock Status inside Product Details Page', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.inspectTopProduct();
    await expect(
        storefront.itemStockStatus
    ).toBeVisible();
});
