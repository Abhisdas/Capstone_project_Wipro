const { test, expect } = require('../../fixtures/base-fixture');

test('Ensure Email Address Input Renders on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByPlaceholder('Email Address').first()
    ).toBeVisible();
});
