const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Confirm Item Detail Page Renders Successfully', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.inspectTopProduct();
    await expect(
        storefront.itemDetailHeading
    ).toBeVisible();
});
