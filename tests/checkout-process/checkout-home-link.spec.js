const { test, expect } = require('@playwright/test');
const StorefrontManager = require('../../pages/catalog.page');

test('Confirm Home Navigation Link Present on Basket Page', async ({ page }) => {
    const storefront = new StorefrontManager(page);
    await storefront.launchHomePage();
    await storefront.openBasketPage();
    await expect(
        page.getByRole('link', { name: 'Home' }).first()
    ).toBeVisible();
});
