const { test, expect } = require('../../fixtures/base-fixture');

test('Ensure Auth Navigation Link Visible When Logged Out', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByRole('link', { name: 'Signup / Login' })
    ).toBeVisible();
});
