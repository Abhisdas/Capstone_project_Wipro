const { test, expect } = require('../../fixtures/base-fixture');

test('Check Contact Us Link Visibility in Auth Context', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByRole('link', { name: 'Contact us' })
    ).toBeVisible();
});
