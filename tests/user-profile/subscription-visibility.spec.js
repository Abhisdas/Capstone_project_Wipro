const { test, expect } = require('../../fixtures/base-fixture');

test('Check Subscription Footer Area Visibility inside Auth View', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByText('Subscription')
    ).toBeVisible();
});
