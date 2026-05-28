const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Empty State Inside Cart Page initially', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCart();
    await expect(catalogPage.cartItemTitle).toHaveCount(0);
});
