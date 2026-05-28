const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Header Block Visibility inside Cart Section', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCart();
    await expect(page.locator('#header')).toBeVisible();
});
