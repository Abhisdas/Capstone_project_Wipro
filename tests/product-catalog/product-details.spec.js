const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Detail Page Loading and Element Visibility', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await catalogPage.viewFirstProductDetails();
    await expect(
        catalogPage.detailProductName
    ).toBeVisible();
});
