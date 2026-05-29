const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Subject Line Input Renders on Help Desk Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'commit' });
    await expect(
        page.locator('input[data-qa="subject"]')
    ).toBeVisible();
});
