const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Proceed to Checkout Button Presence inside Cart', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.addFirstProductToCart();
    await catalogPage.resumeShopping();
    await catalogPage.navigateToCart();
    await expect(catalogPage.checkoutButton).toBeVisible();
});
