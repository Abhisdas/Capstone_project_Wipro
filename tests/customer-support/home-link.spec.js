const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Home Navigation Link on Help Desk Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'commit' });
    await expect(
        page.getByRole('link', { name: 'Home' }).first()
    ).toBeVisible();
});
