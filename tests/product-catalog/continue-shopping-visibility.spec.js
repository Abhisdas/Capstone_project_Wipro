const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Modal Continue Shopping Action Visibility', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await catalogPage.addFirstProductToCart();
    await expect(
        catalogPage.modalContinueBtn
    ).toBeVisible();
});
