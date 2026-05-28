const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Cart Access Without Pre-authenticated User', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCart();
    await expect(page.getByText('Shopping Cart')).toBeVisible();
});
