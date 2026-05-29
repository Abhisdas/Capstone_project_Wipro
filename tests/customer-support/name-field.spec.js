const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Name Input Renders on Help Desk Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'commit' });
    await expect(
        page.locator('input[data-qa="name"]')
    ).toBeVisible();
});
