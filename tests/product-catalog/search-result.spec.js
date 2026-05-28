const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Catalog Search Keyword Result Rendering', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await catalogPage.searchCatalog('Dress');
    await expect(
        catalogPage.listedProductTitles.first()
    ).toContainText('Dress');
});
