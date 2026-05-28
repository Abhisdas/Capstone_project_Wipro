const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Brand Label inside Product Details Page', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await catalogPage.viewFirstProductDetails();
    await expect(
        catalogPage.brandText
    ).toBeVisible();
});
