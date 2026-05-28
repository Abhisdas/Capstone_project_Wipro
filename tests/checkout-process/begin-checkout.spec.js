const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Start Checkout Process Route Check', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.addFirstProductToCart();
    await catalogPage.resumeShopping();
    await catalogPage.navigateToCart();
    await expect(catalogPage.checkoutButton).toBeVisible();
});
