const { test, expect } = require('../../fixtures/base-fixture');
const StorefrontManager = require('../../pages/catalog.page');
const productData = require('../../data/product-data');

productData.forEach((data) => {
    test(`Storefront Keyword Lookup: ${data.product}`, async ({ page }) => {
        const storefront = new StorefrontManager(page);
        await storefront.launchHomePage();
        await storefront.openProductListing();
        await storefront.findProductByKeyword(data.product);
        await expect(
            storefront.visibleItemNames.first()
        ).toContainText(data.product);
    });
});
