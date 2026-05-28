const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Query Catalog and Place Item inside Cart', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await catalogPage.searchCatalog('Dress');
    await catalogPage.addFirstProductToCart();
    await catalogPage.resumeShopping();
    await catalogPage.navigateToCart();
    await expect(catalogPage.cartItemTitle).toBeVisible();
});
