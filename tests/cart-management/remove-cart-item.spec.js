const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Delete Item Action from Shopping Cart', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await catalogPage.addFirstProductToCart();
    await catalogPage.resumeShopping();
    await catalogPage.navigateToCart();
    await catalogPage.removeProductFromCart();
    await expect(catalogPage.cartItemTitle).not.toBeVisible();
});
