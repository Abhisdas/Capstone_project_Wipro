const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Footer Section Renders on Help Desk Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'commit' });
    await expect(page.locator('#footer')).toBeVisible();
});
