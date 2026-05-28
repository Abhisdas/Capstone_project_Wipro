const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Subscription Subsection Inside Cart Page', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCart();
    await expect(page.getByText('Subscription')).toBeVisible();
});
