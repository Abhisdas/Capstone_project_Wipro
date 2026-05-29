const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Help Desk Page Document Title', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'commit' });
    await expect(page).toHaveTitle(/Automation Exercise/);
});
