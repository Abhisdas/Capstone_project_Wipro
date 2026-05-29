const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Help Desk Page URL Path', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'commit' });
    await expect(page).toHaveURL(/contact_us/);
});
