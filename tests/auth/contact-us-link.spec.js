const { test, expect } = require('../../fixtures/base-fixture');

test('Ensure Contact Us Hyperlink Appears on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByRole('link', { name: 'Contact us' })
    ).toBeVisible();
});
