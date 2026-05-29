const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Confirm API Testing Hyperlink Present on Basket Page', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openBasketPage();
    await expect(
        page.getByRole('link', { name: 'API Testing' })
    ).toBeVisible();
});
