const { test, expect } = require('../../fixtures/base-fixture');
const StorefrontManager = require('../../pages/catalog.page');

test('Check Catalog Route Redirection Check', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openProductListing();
    await expect(page).toHaveURL(/products/);
});
