const { test, expect } = require('../../fixtures/base-fixture');

test('Check Catalog Navigation Header Link in Auth view', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByRole('link', { name: 'Products' })
    ).toBeVisible();
});
