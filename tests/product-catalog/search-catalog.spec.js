const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');
const productData = require('../../data/product-data');

productData.forEach((data) => {
    test(`Query Product from Catalog: ${data.product}`, async ({ page }) => {
        const catalogPage = new CatalogPage(page);
        await catalogPage.openApp();
        await catalogPage.navigateToCatalog();
        await catalogPage.searchCatalog(data.product);
        await expect(
            catalogPage.listedProductTitles.first()
        ).toContainText(data.product);
    });
});
