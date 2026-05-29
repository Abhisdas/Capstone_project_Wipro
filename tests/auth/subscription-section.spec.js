const { test, expect } = require('../../fixtures/base-fixture');

test('Ensure Newsletter Subscription Section Renders on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByRole('heading', { name: 'Subscription' })
    ).toBeVisible();
});
