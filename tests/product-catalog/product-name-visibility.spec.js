const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Details Page Item Title visibility', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await catalogPage.viewFirstProductDetails();
    await expect(
        catalogPage.detailProductName
    ).toBeVisible();
});
