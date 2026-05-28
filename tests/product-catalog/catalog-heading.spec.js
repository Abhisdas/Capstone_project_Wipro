const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Catalog Page Heading Text presence', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await expect(
        catalogPage.catalogHeading
    ).toContainText('All Products');
});
