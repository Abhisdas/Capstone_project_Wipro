const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Contact Support Header Link inside Cart Page', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCart();
    await expect(
        page.getByRole('link', { name: 'Contact us' })
    ).toBeVisible();
});
