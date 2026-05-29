const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Check Detail Page URL Route Structure', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.inspectTopProduct();
    await expect(page).toHaveURL(/product_details/);
});
