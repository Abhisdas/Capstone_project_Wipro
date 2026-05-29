const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Check Catalog Search Keyword Result Rendering', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await storefront.findProductByKeyword('Dress');
    await expect(
        storefront.visibleItemNames.first()
    ).toContainText('Dress');
});
