const { test, expect } = require('../../fixtures/base-fixture');
const StorefrontManager = require('../../pages/catalog.page');

test('Verify Basket Icon Renders in Header Navigation', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await expect(storefront.basketHeaderLink).toBeVisible();
});
