const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Catalog Search Layout Frame visibility', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await expect(
        catalogPage.searchField
    ).toBeVisible();
});
