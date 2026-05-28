const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Query Catalog with Nonexistent Product Name', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await catalogPage.searchCatalog('InvalidProductXYZ99');
    await expect(
        catalogPage.listedProductTitles
    ).toHaveCount(0);
});
