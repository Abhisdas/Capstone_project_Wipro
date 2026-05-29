const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Get In Touch Title Renders on Help Desk', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'commit' });
    await expect(page.getByText('Get In Touch')).toBeVisible();
});
