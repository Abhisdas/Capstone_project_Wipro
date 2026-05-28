const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check API Documentation Header Link in Cart Page', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCart();
    await expect(
        page.getByRole('link', { name: 'API Testing' })
    ).toBeVisible();
});
