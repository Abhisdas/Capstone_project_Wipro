const { test, expect } = require('../../fixtures/base-fixture');
const StorefrontManager = require('../../pages/catalog.page');

test('Query Catalog with Nonexistent Product Name', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.findProductByKeyword('InvalidProductXYZ99');
    await expect(
        storefront.visibleItemNames
    ).toHaveCount(0);
});
