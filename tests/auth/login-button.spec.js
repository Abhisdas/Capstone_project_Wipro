const { test, expect } = require('../../fixtures/base-fixture');

test('Ensure Sign-In Button Renders on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByRole('button', { name: 'Login' })
    ).toBeVisible();
});
