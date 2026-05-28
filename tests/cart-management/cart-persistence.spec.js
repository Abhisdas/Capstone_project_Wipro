const { test, expect } = require('@playwright/test');
const CatalogPage = require('../../pages/catalog.page');

test('Check Cart Item Retained After Navigating Away', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openApp();
    await catalogPage.navigateToCatalog();
    await catalogPage.addFirstProductToCart();
    await catalogPage.resumeShopping();
    await page.goto('https://automationexercise.com/');
    await catalogPage.navigateToCart();
    await expect(catalogPage.cartItemTitle).toBeVisible();
});
