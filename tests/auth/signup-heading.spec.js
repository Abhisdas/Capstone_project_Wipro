const { test, expect } = require('../../fixtures/base-fixture');

test('Ensure New User Registration Heading Renders', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByText('New User Signup!')
    ).toBeVisible();
});
