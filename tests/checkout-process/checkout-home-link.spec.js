const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Home Page Link Presence in Cart Header Menu', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCart();
    await expect(
        page.getByRole('link', { name: 'Home' })
    ).toBeVisible();
});
