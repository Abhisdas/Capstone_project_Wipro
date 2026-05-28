const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Header Cart Menu Button Visibility', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await expect(catalogPage.cartNavBtn).toBeVisible();
});
