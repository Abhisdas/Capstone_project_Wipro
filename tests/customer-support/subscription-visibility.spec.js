const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Subscription Area Renders on Help Desk Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'commit' });
    await expect(page.getByText('Subscription')).toBeVisible();
});
